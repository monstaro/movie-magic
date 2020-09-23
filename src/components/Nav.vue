<template>
  <div id="nav">
    <span class="logo">MOVIE MAGIC</span>
    <div class="pages-and-search">
    <span class="page-selector">all movies</span>
    <span class="page-selector">my movies</span>
    <search class="searchbar" />
    </div>
  </div>
</template>

<script>
import search from './Search';
export default {
  name: 'Nav',
  components: {
    search
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
#nav {
    font-family: 'Racing Sans One', cursive;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    background-color: aliceblue;
  }
.logo {
    font-size: 4em;
    color: black;
    /* margin: 40px; */
  }
.pages-and-search {
    display: flex;
    flex-direction: row;
  }
.searchbar {
    margin-left: 10px;
  }
.page-selector {
    margin: 0 10px;
  }
</style>