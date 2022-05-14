<template>
  <div>
    <gv-table selectable>
      <template #head>
        <gv-th label="Age" fit />
        <gv-th label="Name" prop="first_name" />
        <gv-th label="Country" />
      </template>
      <template #body>
        <gv-tr
          v-for="(item, index) in rows"
          :key="item.id"
          :val="index"
          v-model="selected"
        >
          <gv-td fit>{{ item.age }}</gv-td>
          <gv-td>{{ item.first_name }}</gv-td>
          <gv-td>{{ item.country }}</gv-td>
        </gv-tr>
      </template>
    </gv-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      columns: [
        { label: "Age", fit: true },
        { label: "Name", prop: "first_name" },
        "Country"
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
