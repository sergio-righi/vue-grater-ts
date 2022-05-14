<template>
  <gv-table>
    <template #head>
      <gv-th v-for="item in columns" :key="item.id" v-bind="item" />
      <gv-th />
    </template>
    <template #body>
      <gv-tr v-for="item in rows" :key="item.id">
        <gv-td fit>{{ item.age }}</gv-td>
        <gv-td>{{ item.first_name }}</gv-td>
        <gv-td>{{ item.country }}</gv-td>
        <gv-td>
          <gv-button sm>action</gv-button>
        </gv-td>
      </gv-tr>
    </template>
  </gv-table>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { label: "Age", fit: true },
        { label: "Name", prop: "first_name" },
        { label: "Country" }
      ],
      rows: [
        { age: 32, first_name: "Cyndi", country: "Brazil" },
        { age: 27, first_name: "Havij", country: "Canada" },
        { age: 42, first_name: "Robert", country: "South Korea" },
        { age: 35, first_name: "John", country: "Singapore" }
      ]
    };
  }
};
</script>
