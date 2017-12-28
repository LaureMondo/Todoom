<template>
  <div>
    <myHead></myHead>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import myHead from '@/Components/header'
import foot from '@/Components/footer'

export default {
  name: 'app',
  components: {
    myHead,
    foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

