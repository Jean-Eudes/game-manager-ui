import Vue from 'vue'
import Login from './Login.vue'
import Game from './Game.vue'
import Todo from './Todo.vue'
import Biblio from './Biblio.vue'
import GameToBuy from './GameToBuy.vue'

import Router from 'vue-router'
import VueResource from 'vue-resource'



var App = Vue.extend({})

Vue.use(Router)
Vue.use(VueResource)


// routing
var router = new Router();

router.map({
    '/biblio': {
        component: Biblio
    },
    '/todoList': {
        component: Todo
    },
    '/tobuyList': {
        component: GameToBuy
    },
    '/signIn': {
        component: Login
    }
});

router.start(App, '#body')
