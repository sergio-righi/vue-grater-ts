<template>
  <gv-row>
    <gv-col>
      <gv-bracket
        v-for="tournament in tournaments"
        :key="tournament.id"
        :items="tournament.rounds"
      />
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      tournaments: [
        {
          name: 'Tournament 1',
          participants: [
            '63627c815db2569f1b044daf',
            '63627c815db2569f1b044db0',
            '63627c815db2569f1b044db1',
            '63627c815db2569f1b044db2',
            '63627c815db2569f1b044db3',
            '63627c815db2569f1b044db4',
            '63627c815db2569f1b044db5',
            '63627c815db2569f1b044db6',
            '63627c815db2569f1b044db7',
            '63627c815db2569f1b044db8',
            '63627c815db2569f1b044db9',
            '63627c815db2569f1b044dba',
            '63627c815db2569f1b044dbb',
            '63627c815db2569f1b044dbc',
            '63627c815db2569f1b044dbd',
            '63627c815db2569f1b044dbe',
          ],
          rounds: {
            r16: [
              {
                x: '63627c815db2569f1b044daf',
                y: '63627c815db2569f1b044db0',
                winner: -1,
              },
              {
                x: '63627c815db2569f1b044db1',
                y: '63627c815db2569f1b044db2',
                winner: -1,
              },
              {
                x: '63627c815db2569f1b044db3',
                y: '63627c815db2569f1b044db4',
                winner: -1,
              },
              {
                x: '63627c815db2569f1b044db5',
                y: '63627c815db2569f1b044db6',
                winner: -1,
              },
              {
                x: '63627c815db2569f1b044db7',
                y: '63627c815db2569f1b044db8',
                winner: -1,
              },
              {
                x: '63627c815db2569f1b044db9',
                y: '63627c815db2569f1b044dba',
                winner: -1,
              },
              {
                x: '63627c815db2569f1b044dbb',
                y: '63627c815db2569f1b044dbc',
                winner: -1,
              },
              {
                x: '63627c815db2569f1b044dbd',
                y: '63627c815db2569f1b044dbe',
                winner: -1,
              },
            ],
            r8: [
              {
                x: '',
                y: '',
                winner: -1,
              },
              {
                x: '',
                y: '',
                winner: -1,
              },
              {
                x: '',
                y: '',
                winner: -1,
              },
              {
                x: '',
                y: '',
                winner: -1,
              },
            ],
            r4: [
              {
                x: '',
                y: '',
                winner: -1,
              },
              {
                x: '',
                y: '',
                winner: -1,
              },
            ],
            r2: [
              {
                x: '',
                y: '',
                winner: -1,
              },
            ],
          },
          startDate: '+2022-11-03T00:00:00Z',
          createdAt: '+2022-11-02T10:24:00Z',
          createdBy: '63627d5b1b0ad31a2af90f30',
        },
      ],
      players: [
        {
          _id: '63627c815db2569f1b044daf',
          name: 'Name of the player 1',
        },
        {
          _id: '63627c815db2569f1b044db0',
          name: 'Name of the player 2',
        },
        {
          _id: '63627c815db2569f1b044db1',
          name: 'Name of the player 3',
        },
        {
          _id: '63627c815db2569f1b044db2',
          name: 'Name of the player 4',
        },
        {
          _id: '63627c815db2569f1b044db3',
          name: 'Name of the player 5',
        },
        {
          _id: '63627c815db2569f1b044db4',
          name: 'Name of the player 6',
        },
        {
          _id: '63627c815db2569f1b044db5',
          name: 'Name of the player 7',
        },
        {
          _id: '63627c815db2569f1b044db6',
          name: 'Name of the player 8',
        },
        {
          _id: '63627c815db2569f1b044db7',
          name: 'Name of the player 9',
        },
        {
          _id: '63627c815db2569f1b044db8',
          name: 'Name of the player 10',
        },
        {
          _id: '63627c815db2569f1b044db9',
          name: 'Name of the player 11',
        },
        {
          _id: '63627c815db2569f1b044dba',
          name: 'Name of the player 12',
        },
        {
          _id: '63627c815db2569f1b044dbb',
          name: 'Name of the player 13',
        },
        {
          _id: '63627c815db2569f1b044dbc',
          name: 'Name of the player 14',
        },
        {
          _id: '63627c815db2569f1b044dbd',
          name: 'Name of the player 15',
        },
        {
          _id: '63627c815db2569f1b044dbe',
          name: 'Name of the player 16',
        },
      ],
    };
  },
  created() {
    this.tournaments.forEach((tournament) => {
      Object.keys(tournament.rounds).forEach((round) => {
        tournament.rounds[round] = tournament.rounds[round].map((item) => {
          item.x = this.players.find((subitem) => subitem._id === item.x) || {};
          item.y = this.players.find((subitem) => subitem._id === item.y) || {};
          return item;
        });
      });
    });
  },
};
</script>
