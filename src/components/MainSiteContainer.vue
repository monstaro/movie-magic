<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <navbar />
    <moviescontainier />
  </div>
</template>

<script>
import navbar from './Nav.vue';
import moviescontainier from './MoviesContainer.vue';

export default {
  name: 'MainSiteContaiiner',
  components: {
    navbar, moviescontainier
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #b90000;
  height: 100vh;
}
</style>
