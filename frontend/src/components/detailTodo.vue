<template>
  <div class="detailTodo">
    <div> 
        <h2>Voici le détail de la todo :</h2>
        <button v-on:click="modifierTodo(id)">Modifier</button>
    </div>
    <p class="title"> Titre : {{ todo.title }}</p>
    <p class="description"> Description : {{ todo.description }}</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'detailTodo',
  // données qui viennent du composant parent
  components: {},
  data () {
    return {
      todo: ''
    }
  },
  created () {
    // fonction appelée quand vue js construit le composant
    axios.get('http://localhost:3000/detail', {
        params: {
          id: this.$route.query.id
        }
      })
      .then(response => {
        this.todo = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style>
.detailTodo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>