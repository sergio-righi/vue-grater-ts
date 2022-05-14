<template>
  <div
    class="col"
    :class="[
      xl ? 'col-xl-' + xl : '',
      lg ? 'col-lg-' + lg : '',
      md ? 'col-md-' + md : '',
      sm ? 'col-sm-' + sm : '',
      xs ? 'col-xs-' + xs : '',
      col ? 'col-' + col : '',
      align ? 'align-items-' + align : '',
      justify ? 'justify-content-' + justify : ''
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-col",
  props: {
    xl: {
      type: [String, Number],
      validator: value => {
        value = parseInt(value, 10);
        return value >= 1 && value <= 12;
      }
    },
    lg: {
      type: [String, Number],
      validator: value => {
        value = parseInt(value, 10);
        return value >= 1 && value <= 12;
      }
    },
    md: {
      type: [String, Number],
      validator: value => {
        value = parseInt(value, 10);
        return value >= 1 && value <= 12;
      }
    },
    sm: {
      type: [String, Number],
      validator: value => {
        value = parseInt(value, 10);
        return value >= 1 && value <= 12;
      }
    },
    xs: {
      type: [String, Number],
      validator: value => {
        value = parseInt(value, 10);
        return value >= 1 && value <= 12;
      }
    },
    col: {
      default: 12,
      type: [String, Number],
      validator: value => {
        value = parseInt(value, 10);
        return value >= 1 && value <= 12;
      }
    },
    align: {
      type: String,
      validator: value => ["start", "center", "end"].includes(value)
    },
    justify: {
      type: String,
      validator: value =>
        [
          "center",
          "flex-end",
          "flex-start",
          "space-around",
          "space-between"
        ].includes(value)
    }
  }
};
</script>
