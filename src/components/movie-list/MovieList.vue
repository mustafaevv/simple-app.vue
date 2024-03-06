<template>
  <ul class="movie-list movie-group">
    <MovieListItem
      v-for="movie in movies"
      v-bind:movie="movie"
      :key="movie.id"
      @onToggle="$emit('onToggle', $event)"
    />
  </ul>
</template>
<script>
import MovieListItem from "@/components/movie-list-item/MovieListItem.vue";
export default {
  components: {
    MovieListItem,
  },
  props: {
    movies: {
      type: Array,
      require: true,
    },
  },
};
</script>
<style scoped>
.movie-list {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fcf5fc;
  border-radius: 4px;
}
</style>
