<template>
  <gv-indexer right>
    <gv-indexer-item v-for="item in items" :key="item.id" :header="item" hidden>
      <gv-collapse>
        <gv-collapse-item>
          <template #title>{{ item }}</template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet lacus nec sem cursus viverra ut et odio. Mauris
              sollicitudin, mauris a facilisis ultricies, magna mauris tristique
              nunc, sit amet lacinia leo tellus eu elit.
            </p>
          </template>
        </gv-collapse-item>
      </gv-collapse>
    </gv-indexer-item>
  </gv-indexer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Wak",
        "Wbwmf",
        "Wurih",
        "Wjsohmi",
        "Xecpvy",
        "Xzp",
        "Xjz",
        "Xaqqf",
        "Mwwv",
        "Movt",
        "Mhx",
        "Lctrdg",
        "Lwvov",
        "Lny",
        "Cyporl",
        "Cvncne",
        "Cfibc",
        "Ccrxh",
        "Cux",
        "Afbue",
        "Aqh",
        "Snbj",
        "Stuap",
        "Sahpdwb",
        "Sak",
        "Sw",
        "Fhztjd",
        "Floc",
        "Tvhjzz",
        "Tndyg",
        "Txtvgtv"
      ]
    };
  },
  mounted() {
    setTimeout(
      () => this.items.push("Hrhax", "Hhjto", "Hh", "Hwtq", "Hciao"),
      2000
    );
  }
};
</script>
