<template>
  <gv-row>
    <gv-col>
      <form action="#">
        <gv-row>
          <gv-col>
            <gv-form-group label="Transport" v-validation.group="[1, 3]">
              <gv-row>
                <gv-col
                  :sm="6"
                  :md="4"
                  v-for="(item, index) in ['Bus', 'Car', 'Plane', 'Ship']"
                  :key="item.id"
                >
                  <gv-input-box
                    name="transport"
                    v-model="transport"
                    :val="index"
                    >{{ item }}</gv-input-box
                  >
                </gv-col>
              </gv-row>
            </gv-form-group>
          </gv-col>
          <gv-col>
            <gv-button type="submit" primary>Submit</gv-button>
          </gv-col>
        </gv-row>
      </form>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      transport: [],
    };
  },
};
</script>
