<template>
  <div>
  <table class="table table-striped table-condensed">
    <caption>Liste des jeux</caption>
    <tbody>
    <tr v-for="game in gamesByConsole">
      <td><div class="progress">
            <div class="progress-bar" :class="{ 'progress-bar-danger': game.progression === 'TO_DO',
              'progress-bar-info progress-bar-striped': game.progression === 'IN_PROGRESS',
              'progress-bar-success': game.progression == 'DONE'}" role="progressbar"
              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style="{width: fillPercentProgression(game.progression) + '%'}">
              <span>{{* game.title }}</span>
            </div>
          </div>
          </td>
          <td><button type= "button" v-on:click = "deleteGame(game)" class="glyphicon glyphicon-trash btn btn-xs btn-danger pull-right"></button></td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>

export default {

  data () {
      return {
        gamesByConsole: []
      }
  },

  props: {
    consoleId: Number
  },
  watch : {
     consoleId: function () {
        this.$http.get('http://localhost:9000/console/' + this.consoleId + '/game').then((response) => {
             this.gamesByConsole = response.json()
         }, (response) => {
             // error callback
         });
      }
    },
  methods: {
    fillPercentProgression : function (progression) {
      switch (progression) {
        case "TO_DO":
          return 40;
        case "IN_PROGRESS":
          return 70;
        case "DONE":
          return 100;
      }
    },
    deleteGame : function(game) {
      this.$http.delete('http://localhost:9000/console/' + this.consoleId + '/game/' + game.id).then((response) => {
        this.gamesByConsole.$remove(game)
        }, (response) => {
         // error callback
       });
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.progress {
  margin-bottom: 0px
}
</style>
