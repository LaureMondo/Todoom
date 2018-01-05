<template>
  <div id="formulaireAjout">
  Ajouter une nouvelle todo de qualité supérieure : 

    <form>
        <div class="">
            <label for="titleTodo">Titre :</label>
            <input v-model="titleTodo" type="text" class="form-control" id="titleTodo" name="titleTodo" placeholder="Titre todo">
            <label for="descriptionTodo">Description :</label>
            <input v-model="descriptionTodo" type="text" class="form-control" id="descriptionTodo" name="descriptionTodo" placeholder="Description todo">
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
        titleTodo: '',
        descriptionTodo: ''
      }
  },
  methods: {
    addTodo: function (titleTodo) {
      axios.post('http://localhost:3000/add', {
        params: {
          title: titleTodo,
          description: descriptionTodo
        }
      })
      .then(response => {
        this.todos = response.data.todo;
        this.$router.push('/');
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