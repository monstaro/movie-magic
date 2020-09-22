<template>
  <div id="movies-container">
    MOVIES CONTAINER
    <moviecard />
  </div>
</template>

<script>
import moviecard from './MovieCard';
export default {
  name: 'MoviesContainer',
  components: {
    moviecard
  }
}
</script>