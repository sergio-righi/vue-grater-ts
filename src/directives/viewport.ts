import Vue from "vue";

class Viewport {
  public target: any
  public element: any
  public triggered: boolean = false
  public listeners: any
  public events: any

  constructor(el: any, binding: any, vnode: any) {
    this.target = el;
    this.element = binding.modifiers.self ? el : binding.value;
    this.triggered = false;
    this.listeners = vnode.componentOptions?.listeners ?? vnode.data?.on;
    this._init();
  }

  _init() {
    this._config();
    if (Vue.prototype.$utils.boolean.isElement(this.element)) {
      this._bind();
    }
  }

  _config() {
    if (typeof this.element === "string") {
      const element = document.querySelectorAll(this.element)[0];
      if (element) {
        this.element = element;
      }
    }
  }

  _bind() {
    this.events = {
      load: this._load.bind(this),
      scroll: this._scroll.bind(this),
    };

    window.addEventListener("load", this.events.load);
    window.addEventListener("scroll", this.events.scroll);
  }

  _destroy() {
    window.removeEventListener("load", this.events.load);
    window.removeEventListener("scroll", this.events.scroll);
  }

  _check() {
    if (Vue.prototype.$utils.node.inViewport(this.element)) {
      if (!this.triggered && this.listeners && "onvisible" in this.listeners) {
        this.listeners.onvisible(this.element);
      }
      this.triggered = true;
    } else {
      if (this.triggered && this.listeners && "onhidden" in this.listeners) {
        this.listeners.onhidden(this.element);
      }
      this.triggered = false;
    }
  }

  _load() {
    this._check();
  }

  _scroll() {
    this._check();
  }
}

export default {
  key: "viewport",
  value: {
    bind(el: any, binding: any, vnode: any) {
      if (binding.value) {
        el.setAttribute("data-viewport-value", binding.value);
      }
      if (binding.value || binding.modifiers.self) {
        new Viewport(el, binding, vnode);
      }
    },
    componentUpdated(el: any, binding: any) {
      if (binding.value) {
        el.setAttribute("data-viewport-value", binding.value);
      }
    },
  },
};
