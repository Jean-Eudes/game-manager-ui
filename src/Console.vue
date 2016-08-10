<template>
     <div>
       <table class="table table-striped table-condensed table-bordered">
           <caption>Consoles</caption>
             <tbody>
             <tr v-for="console in consoles">
               <td><a v-on:click="chooseConsole(console.id)">{{* console.name}}</a></td>
             </tr>
             <tbody>
       </table>
     </div>
</template>

<script>

export default {

  data () {
    return {
      consoles: []
    }
  },
  ready: function() {
    this.$http.get('http://localhost:9000/console').then((response) => {
        this.consoles = response.json()
        console.log("load page" + response.json())
    }, (response) => {
        // error callback
    });

  },
  methods: {
    chooseConsole: function(consoleId) {
      console.log('changeConsole : ' + consoleId)
      this.$dispatch('changeConsole', consoleId)
    }
  }
}
</script>
