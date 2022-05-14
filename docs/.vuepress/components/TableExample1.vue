<template>
  <gv-table :columns="columns" :rows="rows" />
</template>

<script>
export default {
  data() {
    return {
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
