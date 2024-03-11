<template>
  <Box>
    <p class="fs-3 text-uppercase">barcha kinolar soni: {{ allMovieCount }}</p>
    <p class="fs-4 text-uppercase">
      Ko'rilgan kinolar soni: {{ favoriteMovie }}
    </p>
  </Box>
</template>

<script>
export default {
  props: {
    allMovieCount: {
      type: Number,
      required: true,
    },
    favoriteMovie: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
