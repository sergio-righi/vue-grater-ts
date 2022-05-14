import Vue from "vue";

const responsive = {
  min: 0,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
  max: 7680,
};

class Responsive {
  public rules: Array<any>
  public target: any
  public modifiers: any
  public on: boolean = false
  public hide: boolean = false
  public listeners: any
  public responsive: any
  public events: any

  constructor(el: any, binding: any, vnode: any) {
    this.rules = [];
    this.target = el;
    this.modifiers = binding.modifiers;
    this.on = binding.modifiers.on ?? false;
    this.hide = binding.modifiers.hide ?? false;
    this.listeners = vnode.componentOptions?.listeners ?? vnode.data?.on;

    this.responsive = Vue.prototype.$utils.boolean.isObject(binding.value)
      ? Object.assign({}, responsive, binding.value)
      : responsive;

    this._init();
  }

  _init() {
    this._config();
    this._bind();
  }

  _config() {
    const rules: any = { show: [], hide: [] };

    let hide = false;
    for (const item of Object.keys(this.modifiers)) {
      hide = item === "hide" ? true : item === "show" ? false : hide;
      const value = this.responsive[item];
      if (!value) continue;
      if (hide) rules.hide.push(value);
      else rules.show.push(value);
    }

    rules.show.sort((a: any, b: any) => a - b);
    rules.hide.sort((a: any, b: any) => b - a);

    rules.show = this._rule(rules.show, true);
    rules.hide = this._rule(rules.hide, false);

    this.rules = Object.values(rules.show)
      .map((item) => ({ show: true, value: item }))
      .concat(
        Object.values(rules.hide).map((item: any) => ({ show: false, value: item }))
      );
  }

  _rule(items: any, show: boolean) {
    const rules = [];
    const values = Object.values(this.responsive);

    for (const item of items) {
      const index = values.indexOf(item) - 1;
      const other: any = values[index];
      if (items.length === 1 && this.on) {
        rules.push(show ? `{0} >= ${item}` : `{0} <= ${item}`);
      } else {
        rules.push(
          other < item
            ? `{0} >= ${other} && {0} < ${item}`
            : `{0} >= ${item} && {0} < ${other}`
        );
      }
    }

    return rules;
  }

  _bind() {
    this.events = {
      load: this._resize.bind(this),
      resize: this._resize.bind(this),
    };
    window.addEventListener("load", this.events.load);
    window.addEventListener("resize", this.events.resize);
  }

  _destroy() {
    window.removeEventListener("load", this.events.load);
    window.removeEventListener("resize", this.events.resize);
  }

  _resize(event: any) {
    if (!this.rules.length) this._destroy();
    const width = event.currentTarget.innerWidth;

    let state = this.hide;
    for (const rule of this.rules) {
      const value = rule.value.replace(/\{0}/g, width);
      if (eval(value)) {
        state = rule.show;
        break;
      }
    }

    if (state) {
      this.target.classList.remove("d-none");
      if (this.listeners && "onshow" in this.listeners) {
        this.listeners.onshow(this.target);
      }
    } else {
      this.target.classList.add("d-none");
      if (this.listeners && "onhide" in this.listeners) {
        this.listeners.onhide(this.target);
      }
    }
  }
}

export default {
  key: "responsive",
  value: {
    bind(el: any, binding: any, vnode: any) {
      new Responsive(el, binding, vnode);
    },
  },
};
