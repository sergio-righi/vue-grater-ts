import Vue from 'vue';
import {i18n} from '@/utils';

const patterns = {
  number: '[0-9]+',
  alpha: '[a-zA-Z]+',
  url: "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$",
  email:
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
};

class Validation {
  public target: any;
  public valid: boolean = true;
  public message: any | undefined;
  public inserted: any;
  public listeners: any;
  public configuration: any;
  public elements: any;
  public element: any;
  public events: any;
  public form: any;

  constructor(el: any, vnode: any, configuration: any, inserted = false) {
    if (Object.keys(configuration).length === 0) return;
    this.target = el;
    this.valid = true;
    this.message = null;
    this.inserted = inserted;
    this.listeners = vnode.componentOptions?.listeners ?? vnode.data?.on;
    this.configuration = configuration;
    this._init();
  }

  _init() {
    this._config();
    if (this.inserted) this._bind();
    else this._setError();
  }

  _config() {
    let elements = [];

    for (const item of ['input', 'select', 'textarea']) {
      elements = Vue.prototype.$utils.node.find(this.target, item, true);
      if (elements.length) break;
    }

    this.elements = elements instanceof NodeList ? elements : [elements];
    this.element = elements.length === 1 ? elements[0] : this.target;

    this.form = this.elements[0]?.form;

    if (this.elements.length === 1) {
      for (const item of Object.keys(this.configuration)) {
        const attr = this._normalize(item);
        this.elements[0].dataset[attr] = this.configuration[item].value ?? true;
      }
    }
  }

  _setError() {
    if ('error' in this.configuration) {
      const element = this.elements[0];
      element.dataset.validationError = this.configuration.error.value;
      if (this.configuration.error.message) {
        element.dataset.validationCustom = this.configuration.error.message;
      }
      this._validate();
    }
  }

  _setStatus() {
    const hasValidation =
      typeof this.target !== undefined &&
      typeof this.target?.__vue__ !== undefined &&
      typeof this.target.__vue__?.setState === 'function';

    const customErrorMessage = this.element.dataset.validationCustom;
    const hasCustomError = JSON.parse(
      this.element.dataset.validationError ?? false,
    );

    if (this._isValid()) {
      if (hasValidation) {
        this.target.__vue__.setState(false);
      } else {
        this.element.classList.remove('error');
        delete this.element.dataset.validationMessage;
      }
    } else {
      const message =
        this.valid && hasCustomError && customErrorMessage
          ? customErrorMessage
          : this.message;
      if (hasValidation) {
        this.target.__vue__.setState(true, message);
      } else {
        this.element.classList.add('error');
        this.element.dataset.validationMessage = message;
      }
    }
  }

  _bind() {
    this.events = {
      submit: this._submit.bind(this),
      validate: this._validate.bind(this),
    };

    this.form?.addEventListener('submit', this.events.submit, true);
    this.form?.addEventListener('invalid', this.events.submit, true);

    for (const element of this.elements) {
      element.addEventListener('blur', this.events.validate);
      element.addEventListener('input', this.events.validate);
    }
  }

  _destroy() {
    this.form?.removeEventListener('submit', this.events.submit);
    this.form?.removeEventListener('invalid', this.events.submit);

    for (const element of this.elements) {
      element.removeEventListener('blur', this.events.validate);
      element.removeEventListener('input', this.events.validate);
    }
  }

  _validate() {
    this.valid = true;
    this.message = null;
    const value = this.elements[0].value;
    const exist = Vue.prototype.$utils.boolean.hasValue(value);
    for (const key of Object.keys(this.configuration)) {
      const rule = this._value(key);
      switch (key) {
        case 'required':
          this.valid = rule.value ? exist : true;
          break;
        case 'url':
        case 'alpha':
        case 'email':
        case 'pattern':
          if (!exist) break;
          this.valid = new RegExp(rule.value, 'g').test(value);
          break;
        case 'number':
          if (!exist) break;
          this.valid = Vue.prototype.$utils.boolean.isNumber(value);
          break;
        case 'date':
          if (!exist) break;
          this.valid = Number.isNaN(Number(Date.parse(value)));
          break;
        case 'range':
          if (!exist) break;
          this.valid = Vue.prototype.$utils.number.between(
            Number(value),
            rule.value[0],
            rule.value[1],
          );
          break;
        case 'maxLength':
          if (!exist) break;
          this.valid = value.length <= rule.value;
          break;
        case 'minLength':
          if (!exist) break;
          this.valid = value.length >= rule.value;
          break;
        case 'match':
          if (exist) {
            const element = document.querySelector(rule.value);
            if (
              element &&
              Vue.prototype.$utils.boolean.hasValue(element.value)
            ) {
              this.valid = element.value === value;
            }
          }
          break;
        case 'group':
          if (exist) {
            const count =
              [].filter.call(this.elements, (item: any) => item.checked)
                ?.length ?? 0;
            if (count < rule.value[0] ?? 1) {
              this.valid = false;
              this.message = rule.message.min;
              break;
            } else if (count > rule.value[1] ?? Number.MAX_SAFE_INTEGER) {
              this.valid = false;
              this.message = rule.message.max;
              break;
            }
          }
      }
      if (!this.valid) {
        this.message = this.message ?? rule.message;
        break;
      }
    }
    this._setStatus();
  }

  _value(key: string) {
    const rule = this.configuration[key];
    const attr = this._normalize(key);
    const value = this.elements[0].dataset[attr] ?? rule.value;
    rule.value = value === 'true' ? true : value === 'false' ? false : value;
    return rule;
  }

  _normalize(value: any) {
    return `validation${value.charAt(0).toUpperCase() + value.slice(1)}`;
  }

  _isValid() {
    return (
      this.valid && !JSON.parse(this.element.dataset.validationError ?? false)
    );
  }

  _submit(event: any) {
    if (this.form !== event.target) return;
    this._validate();
    const isValid = this._isValid();
    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    }
    return isValid;
  }
}
/* -------------------------------- */

function t(key: string, context: any): string {
  return '$i18n' in context ? context.$t(key) : i18n.t(key);
}

function validationMessage(context: any): any {
  return {
    required: t('validation.required', context),
    alpha: t('validation.alpha', context),
    minLength: t('validation.minLength', context),
    maxLength: t('validation.maxLength', context),
    range: t('validation.range', context),
    date: t('validation.date', context),
    number: t('validation.number', context),
    pattern: t('validation.pattern', context),
    email: t('validation.email', context),
    url: t('validation.url', context),
    match: t('validation.match', context),
    group: {
      min: t('validation.group.min', context),
      max: t('validation.group.max', context),
    },
  };
}

function config(binding: any, context: any) {
  const configuration: any = {};
  const messages = validationMessage(context)
  const modifiers = Object.keys(binding.modifiers);
  const items =
    binding.value &&
    !(binding.value instanceof RegExp) &&
    Vue.prototype.$utils.boolean.isObject(binding.value)
      ? Object.keys(binding.value)
      : [];

  // const args = binding.arg ? ["required"] : [];

  for (const key of [...new Set([...modifiers, ...items])]) {
    const obj = Vue.prototype.$utils.boolean.isObject(binding.value)
      ? Vue.prototype.$utils.boolean.isObject(binding.value[key])
        ? binding.value[key]
        : {value: binding.value[key]}
      : {value: binding.value};

    switch (key) {
      case 'required':
        configuration.required = {
          value: obj.value ?? true,
          message: Vue.prototype.$utils.boolean.isString(obj.value)
            ? obj.value
            : messages.required,
        };
        break;
      case 'number':
        configuration.number = {
          message: Vue.prototype.$utils.boolean.isString(obj.value)
            ? obj.value
            : messages.number,
        };
        break;
      case 'alpha':
        configuration.alpha = {
          value: patterns.alpha,
          message: Vue.prototype.$utils.boolean.isString(obj.value)
            ? obj.value
            : messages.alpha,
        };
        break;
      case 'date':
        configuration.date = {
          message: Vue.prototype.$utils.boolean.isString(obj.value)
            ? obj.value
            : messages.date,
        };
        break;
      case 'url':
        configuration.url = {
          value: patterns.url,
          message: Vue.prototype.$utils.boolean.isString(obj.value)
            ? obj.value
            : messages.url,
        };
        break;
      case 'email':
        configuration.email = {
          value: patterns.email,
          message: Vue.prototype.$utils.boolean.isString(obj.value)
            ? obj.value
            : messages.email,
        };
        break;
      case 'pattern':
        if (Vue.prototype.$utils.boolean.isRegex(obj.value)) {
          configuration.pattern = {
            value: obj.value,
            message: 'message' in obj ? obj.message : messages.pattern,
          };
        }
        break;
      case 'match':
        if (obj.value) {
          configuration.match = {
            value: obj.value,
            message:
              'message' in obj
                ? obj.message
                : Vue.prototype.$utils.string.format(messages.match, obj.value),
          };
        }
        break;
      case 'maxLength':
        if (obj.value) {
          configuration.maxLength = {
            value: obj.value,
            message:
              'message' in obj
                ? obj.message
                : Vue.prototype.$utils.string.format(
                    messages.maxLength,
                    obj.value,
                  ),
          };
        }
        break;
      case 'minLength':
        if (obj.value) {
          configuration.minLength = {
            value: obj.value,
            message:
              'message' in obj
                ? obj.message
                : Vue.prototype.$utils.string.format(
                    messages.minLength,
                    obj.value,
                  ),
          };
        }
        break;
      case 'range':
        if (obj.value.length === 2) {
          configuration.range = {
            value: obj.value,
            message:
              'message' in obj
                ? obj.message
                : Vue.prototype.$utils.string.format(
                    messages.range,
                    ...obj.value,
                  ),
          };
        }
        break;
      case 'group':
        obj.value = Array.isArray(obj.value) ? obj.value : [obj.value];
        configuration.group = {
          value: obj.value,
          message:
            'message' in obj
              ? obj.message
              : {
                  min: Vue.prototype.$utils.string.format(
                    messages.group.min,
                    obj.value[0] ?? 1,
                  ),
                  max: obj.value[1]
                    ? Vue.prototype.$utils.string.format(
                        messages.group.max,
                        obj.value[1],
                      )
                    : null,
                },
        };
        break;
      case 'error':
        configuration.error = {
          value: obj.value ?? false,
          message: 'message' in obj ? obj.message : null,
        };
        break;
    }
  }

  return configuration;
}

export default {
  key: 'validation',
  value: {
    inserted: function (el: any, binding: any, vnode: any) {
      new Validation(el, vnode, config(binding, vnode.context), true);
    },
    update(el: any, binding: any, vnode: any) {
      new Validation(el, vnode, config(binding, vnode.context));
    },
  },
};
