<template>
  <div class="gv-bracket" :class="{'out-of-8': isEight}">
    <div class="gv-content">
      <section
        class="round"
        :class="[
          {'of-16': round === 'r16'},
          {'of-8': round === 'r8'},
          {'of-4': round === 'r4'},
          {'of-2': round === 'r2'},
        ]"
        v-for="round in Object.keys(items)"
        :key="round.id"
      >
        <div class="box" v-for="i in roundLength(round)" :key="i">
          <div class="matchups">
            <div class="matchup" v-for="j in matchupLength(round, i)" :key="j">
              <div class="participants">
                <div
                  class="participant"
                  :class="{winner: items[round][j].winner === 0}"
                  @click="advance(round, j, 0)"
                >
                  <span>{{ items[round][j].x.name }}</span>
                </div>
                <div
                  class="participant"
                  :class="{winner: items[round][j].winner === 1}"
                  @click="advance(round, j, 1)"
                >
                  <span>{{ items[round][j].y.name }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="connector" v-if="items[round][i + 1]">
            <div class="bracket"></div>
            <div class="line"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'gv-bracket',
  props: {
    items: {
      type: Object,
    },
  },
  computed: {
    isEight: function () {
      return this.items.r16 === undefined;
    },
  },
  methods: {
    roundLength: function (round) {
      const quantity = Object.values(this.items[round]).length / 2;
      return [...Array(Math.round(quantity)).keys()];
    },
    matchupLength: function (round, i) {
      const value = i * 2 + 1;
      return round === 'r2' ? [value - 1] : [value - 1, value];
    },
    advance: function (round, match, index) {
      const item = this.items[round][match];
      const {newMatch, newRound} = this.calculateNext(round, match);
      this.cascade(newRound, newMatch);
      if (round !== newRound) {
        this.items[newRound][newMatch][match % 2 === 0 ? 'x' : 'y'] =
          item[index === 0 ? 'x' : 'y'];
      }
      item.winner = index;
    },
    calculateNext: function (round, match) {
      const newMatch = Math.trunc(match / 2);
      const newRound = round === 'r16' ? 'r8' : round === 'r8' ? 'r4' : 'r2';
      return {newRound, newMatch};
    },
    cascade: function (round, match) {
      this.items[round][match].winner = -1;
      if (round === 'r2') return;
      ({newRound: round, newMatch: match} = this.calculateNext(round, match));
      this.items[round][match][match % 2 === 0 ? 'x' : 'y'] = {};
      return this.cascade(round, match);
    },
  },
};
</script>
