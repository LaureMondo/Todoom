<template>
  <div class="todo">
    <p class="title"> {{ title }}</p>
    <button v-on:click="deleteTodo(id)">X</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'todo',
  // données qui viennent du composant parent
  props: ['title', 'id'],
  methods: {
    deleteTodo(idTodo) {
      this.$emit('delete', idTodo);
    }
  },
  components: {}
}
</script>

<style>
.todo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.todo p{
  margin: 0;
}
.todo button{
  height: 20px;
}
</style>