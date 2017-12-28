<template>
  <div id="formulaireAjout">
  Ajouter une nouvelle todo de qualité supérieure : 

    <form>
        <div class="">
            <label for="titleTodo">Titre :</label>
            <input v-model="titleTodo" type="text" class="form-control" id="titleTodo" name="titleTodo" placeholder="Titre todo">
        </div>
        <button type="submit" class="" @submit.prevent="addTodo">Ajouter</button>
    </form>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'formulaireAjout',
  components: {
  },
  data () {
      return{
        titleTodo: ''
      }
  },
  methods: {
    addTodo: function (titleTodo) {
      axios.post('http://localhost:3000/add', {
        params: {
          title: titleTodo
        }
      })
      .then(response => {
        this.todos = response.data.todo;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>
#formulaireAjout {
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