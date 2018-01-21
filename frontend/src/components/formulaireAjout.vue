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
        <button type="submit" v-on:click="addTodo(id)">Valider</button>
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
        id: '',
        titleTodo: '',
        descriptionTodo: ''
      }
  },
  methods: {
    addTodo: function (id) {
      if(id == ''){
        var params = new URLSearchParams();
        params.append('title', this.titleTodo);
        params.append('description', this.descriptionTodo);
        axios.post('http://localhost:3000/add', params, {withCredentials: true})
        .then(response => {
          this.todos = response.data.todo;
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
          var params = new URLSearchParams();
          params.append('id', this.$route.query.id);
          params.append('title', this.titleTodo);
          params.append('description', this.descriptionTodo);
          axios.post('http://localhost:3000/modifier', params, {withCredentials: true})
        .then(response => {
          this.titleTodo = response.data.title
          this.descriptionTodo = response.data.description
        })
        .catch(function (error) {
          console.log(error)
        });
      }
    }
  },
  created () {
    // fonction appelée quand vue js construit le composant
    axios.get('http://localhost:3000/getTodo', {
        params: {
          id: this.$route.query.id
        },
        withCredentials: true
      })
      .then(response => {
        this.titleTodo = response.data.title
        this.descriptionTodo = response.data.description
      })
      .catch(function (error) {
        console.log(error)
      })
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