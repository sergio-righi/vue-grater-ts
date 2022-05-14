<template>
  <gv-calendar
    :events="events"
    :categories="categories"
    :holidays="holidays"
    locale="en-CA"
  />
</template>

<script>
export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      events: [
        { id: 3, date: new Date(year, month, 7), category: 2 },
        {
          id: 2,
          date: new Date(year, month, 22),
          endDate: new Date(year, month, 26),
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 1,
          date: new Date(year, month, 13),
          category: 1,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          id: 4,
          date: new Date(year, month, 13),
          category: 2,
          description: "Lorem ipsum dolor sit amet"
        }
      ],
      categories: [
        { category: -1, color: "black" },
        { category: 1, color: "yellow" },
        { category: 2, color: "green" }
      ],
      holidays: [new Date(year, month, 17)]
    };
  }
};
</script>
