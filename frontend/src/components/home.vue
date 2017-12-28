<template>
  <div id="home">
    <div class="row">
      <myTodo></myTodo>
    </div>
  </div>
</template>

<script>

import myTodo from '@/Components/myTodo'

export default {
  name: 'home',
  components: {
    myTodo,
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
