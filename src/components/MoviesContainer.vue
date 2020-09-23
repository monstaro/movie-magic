<template>
  <div id="movies-container">
    New Movies
    <div class="movies">
    <div class="movie" v-for="movie in newMovies" :key="movie.id">
      {{movie}}
    </div>
    </div>
    <moviecard movies=movies />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moviecard from './MovieCard';


export default {
  name: 'MoviesContainer',
  methods: {
    ...mapActions(["fetchMovies"])
  },
  computed: mapGetters(['allMovies', 'newMovies']),
  created() {
    this.fetchMovies()
  },
  components: {
    moviecard
  }
}
</script>

<style scoped>
  #movies-container {
    background: white;
    margin: 40px;
    height: 75vh;
  }
  .movies {
    display: flex;
    margin: 10px;
  }
  .movie {
    margin: 10px;
    border: 1px solid black;
    height: 25vh;
    width: 10vw;
  }
</style>