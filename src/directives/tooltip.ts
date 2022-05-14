class Tooltip {
  public offset: number = 8
  public target: any
  public placement: any
  public element: any
  public events: any

  constructor(el: any, binding: any) {
    if (binding.value) {
      this.offset = 8;
      this.target = el;
      this.placement = this._placement(binding.modifiers);
      this._init();
    }
  }

  _init() {
    this._bind();
  }

  _build() {
    this.element = document.createElement("div");
    this.element.className = "gv-tooltip tooltip-hidden";
    document.body.appendChild(this.element);
  }

  _value() {
    this.element.innerHTML = this.target.getAttribute("data-tooltip-value");
  }

  _placement(modifiers: any) {
    const target = this.target.getBoundingClientRect();
    return modifiers.left
      ? "left"
      : modifiers.right
        ? "right"
        : modifiers.bottom
          ? "bottom"
          : modifiers.top
            ? "top"
            : target.top <= window.outerHeight / 2
              ? "top"
              : "bottom";
  }

  _position() {
    const target = this.target.getBoundingClientRect();
    const element = this.element.getBoundingClientRect();

    const top = this._top(target, element.height);
    const left = this._left(target, element.width);

    this.element.style.top = top;
    this.element.style.left = left;

    this.element.setAttribute("data-tooltip-placement", this.placement);
  }

  _left(el: any, width: any) {
    const left =
      this.placement === "left"
        ? el.left - width - this.offset
        : this.placement === "right"
          ? el.left + el.width + this.offset
          : el.left + el.width / 2 - width / 2;
    return this._proxy(left, window.outerWidth);
  }

  _top(el: any, height: any) {
    const top =
      this.placement === "top"
        ? el.top - height - this.offset
        : this.placement === "bottom"
          ? el.top + el.height + this.offset
          : el.top + el.height / 2 - height / 2;
    return this._proxy(top, window.outerHeight);
  }

  _proxy(value: any, max: any) {
    if (typeof value === "string") return value;
    const tvalue = value < 0 ? 0 : value > max ? max : value;
    if (tvalue === 0) return this.offset + "px";
    if (tvalue === max) return -this.offset + "px";
    return tvalue + "px";
  }

  _bind() {
    this.events = {
      blur: this._blur.bind(this),
      focus: this._focus.bind(this),
      mouseenter: this._mouseenter.bind(this),
      mouseleave: this._mouseleave.bind(this)
    };

    this.target.addEventListener("blur", this.events.blur);
    this.target.addEventListener("focus", this.events.focus);
    this.target.addEventListener("mouseenter", this.events.mouseenter);
    this.target.addEventListener("mouseleave", this.events.mouseleave);
  }

  _destroy() {
    this.target.removeEventListener("blur", this.events.blur);
    this.target.removeEventListener("focus", this.events.focus);
    this.target.removeEventListener("mouseenter", this.events.mouseenter);
    this.target.removeEventListener("mouseleave", this.events.mouseleave);
  }

  _show() {
    if (!this.element) this._build();
    this.element.classList.add("tooltip-animation");
    this.element.classList.remove("tooltip-hidden");
    this._value();
    this._position();
  }

  _hide() {
    this.element.classList.add("tooltip-hidden");
    this.element.classList.remove("tooltip-animation");
  }

  _blur() {
    this._hide();
  }

  _focus() {
    this._show();
  }

  _mouseenter(event: any) {
    event.preventDefault();
    this._show();
  }

  _mouseleave(event: any) {
    event.preventDefault();
    this._hide();
  }
}

export default {
  key: "tooltip",
  value: {
    bind(el: any, binding: any) {
      el.dataset.tooltipValue = binding.value;
      new Tooltip(el, binding);
    },
    componentUpdated(el: any, binding: any) {
      el.dataset.tooltipValue = binding.value;
    }
  }
};
