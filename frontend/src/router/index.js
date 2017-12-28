import Vue from 'vue'
import Router from 'vue-router'

import home from '@/Components/home'
import formulaireAjout from '@/Components/formulaireAjout'

Vue.use(Router)

export default new Router({
  routes: [{
    name: 'home',
    path: '/',
    component: home
  },
  {
    name: 'formulaireAjout',
    path: '/ajouter',
    component: formulaireAjout
  }]
})
