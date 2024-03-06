<template>
  <div class="app-info">
    <p class="fs-3 text-uppercase">barcha kinolar soni: {{ allMovieCount }}</p>
    <p class="fs-4 text-uppercase">
      Ko'rilgan kinolar soni: {{ favoriteMovie }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    allMovieCount: {
      type: Number,
      require: true,
    },
    favoriteMovie: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style scoped>
.app-info {
  padding: 1.5rem;
  border-radius: 4px;
  background: #fcfafc;
}
</style>
