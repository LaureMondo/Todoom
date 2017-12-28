<template>
  <div id="myHead">
    <router-link to="/">Accueil</router-link>
    <router-link to="/ajouter">Nouvelle Todo</router-link>
  </div>
</template>

<script>
export default {
  name: 'myHead',
  components: {}
}
</script>

<style>
#myHead {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
