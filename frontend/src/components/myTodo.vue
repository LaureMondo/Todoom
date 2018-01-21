<template>
  <div id="myTodos">
    <h2>Mes Todos magiques en cours :</h2>

    <div>
      <todo @detail="detailTodo" @delete="deleteTodo" v-for="(todo, key) in todos" :key="key" :title="todo.title" :id="todo.id"></todo>
    </div>
    
  </div>
</template>

<script>
import todo from '@/Components/todo'
import axios from 'axios'

export default {
  name: 'myTodos',
  components: {
    todo,
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo: function (idTodo) {
      axios.get('http://localhost:3000/delete', {
        params: {
          id: idTodo,
        },
        withCredentials: true
      })
      .then(response => {
        this.todos = response.data.todo;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    detailTodo: function (idTodo) {
      this.$router.push({ path: `/detail?id=${idTodo}` });
    }
  },
  created () {
    // fonction appelée quand vue js construit le composant
    axios.get('http://localhost:3000/', 
    {withCredentials: true})
      .then(response => {
        this.todos = response.data.todo
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style>
#myTodos {
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