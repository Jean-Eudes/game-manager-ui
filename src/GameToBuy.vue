<template>
<div>
  <table class="table table-striped table-condensed table-bordered">
    <caption>Liste des jeux</caption>
    <tbody>
    <tr v-for="game in games">
      <td>{{* game.title }}</td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {

  data () {
    return {
      games: []
    }
  },
  ready: function() {
    this.$http.get('http://localhost:9000/gameToBuy').then((response) => {
        this.games = response.json()
        console.log("load page game To buy" + response.json())
    }, (response) => {
        // error callback
    });

  }
}

</script>