import Vue from "vue";

const tokens = {
  "#": { pattern: /[0-9]/ },
  X: { pattern: /[0-9a-zA-Z]/ },
  Y: { pattern: /[0-9a-zA-Z ]/ },
  L: { pattern: /[a-zA-Z]/ },
  S: { pattern: /[a-zA-Z ]/ },
  A: { pattern: /[a-zA-Z]/, uppercase: true },
  a: { pattern: /[a-zA-Z]/, lowercase: true },
  E: { pattern: /[a-zA-Z ]/, uppercase: true },
  e: { pattern: /[a-zA-Z ]/, lowercase: true },
  "!": { escape: true },
  "*": { repeat: true },
};

class Mask {
  public element: any
  public configuration: any
  public target: any
  public events: any

  constructor(el: any, configuration: any = {}) {
    if (!el) return;

    if (configuration.tokens) {
      for (const i in configuration.tokens) {
        configuration.tokens[i] = { ...configuration.tokens[i] };
        if (
          configuration.tokens[i].pattern &&
          Vue.prototype.$utils.boolean.isString(configuration.tokens[i].pattern)
        ) {
          configuration.tokens[i].pattern = new RegExp(
            configuration.tokens[i].pattern
          );
        }
      }
    }

    this.configuration = {
      mask: configuration.mask,
      tokens: { ...tokens, ...configuration.tokens },
    };
    this.target = Vue.prototype.$utils.boolean.isString(el)
      ? document.querySelectorAll(el)
      : el;
    this._init();
  }

  _init() {
    this.element = Vue.prototype.$utils.node.find(this.target, "input");
    if (
      this.configuration.mask &&
      (!this.element.dataset.mask ||
        this.element.dataset.mask !== this.configuration.mask)
    ) {
      this.element.dataset.mask = this.configuration.mask;
    }
    this._updateValue(this.element, null);
    if (!this.element.dataset.masked) {
      this.element.dataset.masked = true;
      this._bind();
    }
  }

  _bind() {
    this.events = {
      blur: this._validValue.bind(this),
      input: this._updateValue.bind(this),
      beforeInput: this._beforeInput.bind(this),
    };

    this.element.addEventListener("blur", this.events.blur);
    this.element.addEventListener("input", this.events.input);
    this.element.addEventListener("beforeinput", this.events.beforeInput);
  }

  _mask(value: any, mask: any, tokens: any, masked = true) {
    return this._processMask(mask).length > 1
      ? this._dynamic(mask)(value, mask, tokens, masked)
      : this._process(value, mask, tokens, masked);
  }

  _processMask(mask: any) {
    try {
      return JSON.parse(mask);
    } catch {
      return [mask];
    }
  }

  _dynamic(mask: any) {
    const that = this;
    const masks = this._processMask(mask).sort((a: any, b: any) => a.length - b.length);

    return function (value: any, _: any, tokens: any, masked = true) {
      const processed = masks.map((m: any) =>
        that._process(value, m, tokens, false)
      );
      const last = processed.pop();

      for (const i in masks) {
        if (checkMask(last, masks[i], tokens)) {
          return that._process(value, masks[i], tokens, masked);
        }
      }

      return "";
    };

    function checkMask(variant: any, mask: any, tokens: any) {
      for (const tok in tokens) {
        if (tokens[tok].escape) {
          mask = mask.replace(new RegExp(tok + ".{1}", "g"), "");
        }
      }

      return (
        mask.split("").filter((el: any) => tokens[el] && tokens[el].pattern)
          .length >= variant.length
      );
    }
  }

  _process(value: any, mask: any, tokens: any, masked = true) {
    let i = 0;
    let j = 0;
    let ret = "";
    let rest = "";

    while (i < mask.length && j < value.length) {
      let character = mask[i];
      const valueChar = value[j];
      const token = tokens[character];

      if (token && token.pattern) {
        if (token.pattern.test(valueChar)) {
          ret += this._tokenTransform(valueChar, token);
          i++;
          if (masked && mask[i] && !tokens[mask[i]]) {
            ret += mask[i];
            i++;
          }
        }
        j++;
      } else if (token && token.repeat) {
        const tokenPrev = tokens[mask[i - 1]];
        if (tokenPrev && !tokenPrev.pattern.test(valueChar)) {
          i++;
        } else {
          i--;
        }
      } else {
        if (token && token.escape) {
          i++;
          character = mask[i];
        }
        if (masked) ret += character;
        if (valueChar === character) j++;
        i++;
      }
    }

    while (masked && i < mask.length) {
      const character = mask[i];
      if (tokens[character]) {
        rest = "";
        break;
      }
      rest += character;
      i++;
    }

    return ret + rest;
  }

  _tokenTransform(value: any, token: any) {
    if (token.transform) value = token.transform(value);
    return token.uppercase
      ? value.toLocaleUpperCase()
      : token.lowercase
        ? value.toLocaleLowerCase()
        : value;
  }

  _fixInputSelection(position: any, digit: any) {
    while (
      position &&
      position < this.element.value.length &&
      this.element.value.charAt(position - 1) !== digit
    ) {
      position++;
    }

    const selectionRange = this.element.type
      ? this.element.type.match(/^(text|search|password|tel|url)$/i)
      : !this.element.type;

    if (selectionRange && this.element === document.activeElement) {
      this.element.setSelectionRange(position, position);
      setTimeout(() => {
        this.element.setSelectionRange(position, position);
      }, 0);
    }
  }

  _event(name: any, inputType = null) {
    const event: any = document.createEvent("Event");
    event.initEvent(name, true, true);
    if (inputType) event.inputType = inputType;
    return event;
  }

  _destroy() {
    const el = Vue.prototype.$utils.node.find(this.target[0], "input");
    el.removeEventListener("input", (event: Event) =>
      this._updateValue(event.target, event)
    );
    el.removeEventListener("beforeinput", (event: Event) => this._beforeInput(event));
    delete el.dataset.mask;
    delete el.dataset.masked;
  }

  _valid() {
    if (/\*/g.test(this.configuration.mask)) return true;
    const masks = this._processMask(this.configuration.mask).sort(
      (a: any, b: any) => a.length - b.length
    );
    return masks.find((item: any) => this.element.value.length === item.length);
  }

  _updateValue(_: any, event: any) {
    const wrongNum =
      this.element.type.match(/^number$/i) && this.element.validity.badInput;
    if ((!this.element.value && !wrongNum) || !this.element.dataset.mask) {
      this.element.dataset.maskValue = "";
      this._dispatch("mask", event);
      return;
    }

    let position = this.element.selectionEnd;
    const oldValue = this.element.value;
    const digit = oldValue[position - 1];

    this.element.dataset.maskValue = this._mask(
      this.element.value,
      this.element.dataset.mask,
      this.configuration.tokens,
      false
    );
    this.element.value = this._mask(
      this.element.value,
      this.element.dataset.mask,
      this.configuration.tokens
    );

    if (
      event &&
      event.inputType === "insertText" &&
      position === oldValue.length
    ) {
      position = this.element.value.length;
    }
    this._fixInputSelection(position, digit);

    this._dispatch("mask", event);
    if (this.element.value !== oldValue) {
      this._dispatch("input", event);
    }
  }

  _beforeInput(event: any) {
    if (
      this.element.type.match(/^number$/i) &&
      event.data &&
      isNaN(this.element.value + event.data)
    ) {
      event.preventDefault();
    }
  }

  _validValue() {
    if (!this._valid()) {
      this.element.value = "";
      this.element.dataset.maskValue = "";
    }
  }

  _dispatch(name: any, event: any) {
    this.element.dispatchEvent(
      this._event(name, (event && event.inputType) || null)
    );
  }
}

function config(binding: any) {
  const configuration: any = {};

  if (binding.mask) {
    configuration.mask = Array.isArray(binding.mask)
      ? JSON.stringify(binding.mask)
      : binding.mask;
    configuration.tokens = binding.tokens ? { ...binding.tokens } : {};
  } else {
    configuration.mask = Array.isArray(binding)
      ? JSON.stringify(binding)
      : binding;
  }

  return configuration;
}

function needUpdate(mask: any) {
  return !(
    (Vue.prototype.$utils.boolean.isString(mask.value) &&
      mask.value === mask.oldValue) ||
    (Array.isArray(mask.value) &&
      JSON.stringify(mask.value) === JSON.stringify(mask.oldValue)) ||
    (mask.value &&
      mask.value.mask &&
      mask.oldValue &&
      mask.oldValue.mask &&
      mask.value.mask === mask.oldValue.mask)
  );
}

function directive(el: any, binding: any) {
  if (!binding.value) return;
  if (binding.value && needUpdate(binding)) {
    return new Mask(el, config(binding.value));
  }
}

export default {
  key: "mask",
  value: directive,
};
