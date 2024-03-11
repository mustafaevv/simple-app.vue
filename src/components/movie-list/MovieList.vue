<template>
  <Box>
    <MovieListItem
      v-for="movie in movies"
      v-bind:movie="movie"
      :key="movie.id"
      @onToggle="$emit('onToggle', $event)"
      @onRemove="$emit('onRemove', movie.id)"
    />
  </Box>
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
      required: true,
    },
  },
};
</script>
<style scoped></style>
