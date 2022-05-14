class Clipboard {
  public events: any
  public target: any
  public html: boolean = false
  public self: boolean = false
  public value: boolean = false
  public outer: boolean = false
  public ref: string | undefined
  public listeners: any

  constructor(el: any, binding: any, vnode: any) {
    if (binding.value || binding.modifiers.self) {
      this.target = el;
      this.html = binding.modifiers.html ?? false;
      this.self = binding.modifiers.self ?? false;
      this.value = binding.modifiers.value ?? false;
      this.outer = binding.modifiers.outer ?? false;
      this.ref = binding.modifiers.target ? binding.value : null;
      this.listeners = vnode.componentOptions?.listeners ?? vnode.data?.on;
      this.target.classList.add("c-pointer");
      this._init();
    }
  }

  _init() {
    this._bind();
  }

  _value() {
    const ref = this.ref ? document.querySelectorAll(this.ref)[0] : null;
    const target = ref ?? this.target;
    return this.self
      ? this.html
        ? this.outer
          ? target.outerHTML
          : target.innerHTML
        : target.textContent?.trim()
      : this.value
        ? target.value?.trim()
        : target.getAttribute("data-clipboard-value")?.trim();
  }

  _bind() {
    this.events = {
      click: this._click.bind(this)
    };

    this.target.addEventListener("click", this.events.click);
  }

  _destroy() {
    this.target.removeEventListener("click", this.events.click);
    delete this.target.dataset.clipboardValue;
  }

  _copy() {
    const value = this._value();
    navigator.clipboard.writeText(value).then(() => {
      if (this.listeners && "oncopy" in this.listeners) {
        this.listeners.oncopy(value);
      }
    });
  }

  _click() {
    this._copy();
  }
}

export default {
  key: "clipboard",
  value: {
    bind(el: any, binding: any, vnode: any) {
      if (!binding.modifiers.self && binding.value) {
        el.dataset.clipboardValue = binding.value;
      }
      new Clipboard(el, binding, vnode);
    },
    componentUpdated(el: any, binding: any) {
      if (!binding.modifiers.self && binding.value) {
        el.dataset.clipboardValue = binding.value;
      }
    }
  }
};
