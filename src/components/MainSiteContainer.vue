<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <navbar />
    <searchbar />
    <moviescontainier />
  </div>
</template>

<script>
import navbar from './Nav.vue';
import searchbar from './Search.vue';
import moviescontainier from './MoviesContainer.vue';

export default {
  name: 'MainSiteContaiiner',
  components: {
    navbar, searchbar, moviescontainier
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
