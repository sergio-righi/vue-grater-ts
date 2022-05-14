export default {
  key: "click-outside",
  value: {
    bind: function (el: any, binding: any, vnode: any) {
      const handler = (event: Event) => {
        if (!el.contains(event.target) && el !== event.target) {
          if (binding.value) binding.value(event);
        } else {
          const listeners = vnode.componentOptions?.listeners;
          if (listeners && "oninside" in listeners) listeners.oninside(event);
        }
      };
      el.clickOutside = handler;
      document.addEventListener("click", handler);
    },
    unbind: function (el: any) {
      document.removeEventListener("click", el.clickOutside);
      el.clickOutside = null;
    }
  }
};
