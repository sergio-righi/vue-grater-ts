<template>
  <gv-row>
    <gv-col>
      <gv-form-group>
        <gv-select
          label="Single"
          placeholder="Lorem ipsum dolor sit amet"
          v-model="input"
          :items="items"
        />
      </gv-form-group>
      <gv-form-group>
        <gv-select
          label="Multiple"
          placeholder="Lorem ipsum dolor sit amet"
          v-model="multiple"
          :items="items"
          multiple
        />
      </gv-form-group>
      <gv-form-group>
        <gv-select label="Lorem ipsum dolor sit amet" error>
          <option value="1">First</option>
          <option value="2">Second</option>
          <option value="3">Third</option>
        </gv-select>
      </gv-form-group>
      <gv-form-group>
        <gv-select label="Lorem ipsum dolor sit amet" disabled />
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      input: 4,
      multiple: [3],
      items: [
        {value: 0, text: 'Airplane'},
        {value: 2, text: 'Car', disabled: true},
        {value: 3, text: 'Train'},
        {value: 4, text: 'Bus'},
        {value: 4, text: 'Rocket'},
        {value: 5, text: 'Motorcycle'},
        {value: 6, text: 'Spaceship'},
        {value: 7, text: 'Ship'},
        {value: 8, text: 'Bike'},
      ],
    };
  },
};
</script>
