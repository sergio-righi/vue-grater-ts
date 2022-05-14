<template>
  <gv-poll v-model="items" @onvote="onVote">
    <template #header>
      Which is the best JavaScript framework in the world?
    </template>
    <template #footer>
      <gv-flexbox align="center">
        <gv-gap sm>
          <gv-avatar-group>
            <gv-avatar sm>
              <gv-image src="/img/user_f.png" />
            </gv-avatar>
            <gv-avatar sm>
              <gv-image src="/img/user_m.png" />
            </gv-avatar>
            <gv-avatar sm>
              <gv-image src="/img/user_f.png" />
            </gv-avatar>
            <gv-avatar sm> +{{ total }} </gv-avatar>
          </gv-avatar-group>
          <small>
            have participated, much appreciated <gv-emoji value="beaming" />
          </small>
        </gv-gap>
      </gv-flexbox>
    </template>
  </gv-poll>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "VueJS", votes: 17 },
        { text: "ReactJS", votes: 11 },
        { text: "AngularJS", votes: 7 }
      ]
    };
  },
  computed: {
    total() {
      return this.items.reduce((a, b) => a + b.votes, 0);
    }
  },
  methods: {
    onVote: function(index) {
      this.items[index].votes++;
    }
  }
};
</script>
