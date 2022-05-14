import Vue from "vue";
import { animation } from "@/utils";

class Scroll {
  public target: any
  public animation: any
  public scrollElement: any
  public top: any
  public bottom: any
  public targetElement: any
  public listeners: any
  public events: any

  constructor(el: any, binding: any, vnode: any) {
    this.target = el;
    this.animation = null;
    this.scrollElement = null;
    this.top = binding.modifiers.top;
    this.bottom = binding.modifiers.bottom;
    this.targetElement = binding?.value ?? undefined;
    this.listeners = vnode.componentOptions?.listeners ?? vnode.data?.on;
    this._init();
  }

  _init() {
    if (this.top || this.bottom || this.targetElement) {
      this._bind();
    }
  }

  _bind() {
    this.events = {
      load: this._load.bind(this),
      click: this._click.bind(this),
    };

    window.addEventListener("load", this.events.load);
    this.target.addEventListener("click", this.events.click);
  }

  _destroy() {
    window.removeEventListener("load", this.events.load);
    this.target.removeEventListener("click", this.events.click);
  }

  _scroll(elm: any, from: any, to: any, duration: any, easing: any) {
    const frameDuration = 1000 / 60;
    const animationDuration = duration;
    const totalFrames = Math.round(animationDuration / frameDuration);
    const diff = to - from;
    if (diff !== 0) {
      let frame = 0;
      this.animation = setInterval(() => {
        frame++;
        const progress = easing(frame / totalFrames);
        elm.scrollTop = from + diff * progress;
        if (frame === totalFrames) {
          clearInterval(this.animation);
          if (this.listeners && "onreach" in this.listeners) {
            this.listeners.onreach(this.target, this.targetElement);
          }
        }
      }, frameDuration);
    }
  }

  _targetElement() {
    if (typeof this.targetElement === "string") {
      const element = document.querySelectorAll(this.targetElement)[0];
      if (element) {
        return element;
      }
    }
    this._destroy();
    return undefined;
  }

  _scrollElement() {
    if (this.targetElement) {
      let element = this.targetElement;
      while (element && !Vue.prototype.$utils.boolean.hasScrollbar(element))
        element = element.parentNode;
      if (element instanceof Element) return element;
    }
    return document.scrollingElement || document.documentElement;
  }

  _load() {
    this.targetElement = this._targetElement();
    this.scrollElement = this._scrollElement();
  }

  _click() {
    if (!this.targetElement) return;
    if (this.animation) clearInterval(this.animation);

    const offsetTop = () => {
      if (this.targetElement) {
        const targetBoundaries = this.targetElement.getBoundingClientRect();
        return (
          targetBoundaries.top +
          this.scrollElement.scrollTop -
          targetBoundaries.height
        );
      }
      return this.scrollElement.offsetTop;
    };

    this._scroll(
      this.scrollElement,
      this.scrollElement.scrollTop,
      this.top
        ? 0
        : this.bottom
          ? this.scrollElement.scrollHeight - this.scrollElement.clientHeight
          : offsetTop() - 10,
      300,
      animation.linear
    );
  }
}

export default {
  key: "scroll",
  value: {
    bind(el: any, binding: any, vnode: any) {
      new Scroll(el, binding, vnode);
    },
  },
};
