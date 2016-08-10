<template>
  <div class = "row">
    <console class="col-md-6"></console>
    <game class="col-md-6" :console-id="consoleId"></game>
  </div>

</template>

<script>
import Game from './Game.vue'
import Console from './Console.vue'

  export default {

    components: {
      Console,
      Game
    },
     data () {
         return {
           consoleId: 0
         }
       },

     events: {
       changeConsole: function (consoleId) {
         console.log('call ' + consoleId)
         this.consoleId = consoleId
       }
    }
  }

</script>