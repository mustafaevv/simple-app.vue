<template>
  <Box>
    <h3>added movie</h3>
    <form class="add-form d-flex" @submit.prevent="addMovie">
      <Input
        class="new-movie-label"
        placeholder="searching..."
        v-model="name"
      />
      <Input
        class="new-movie-label"
        placeholder="how many watch"
        v-model="viewers"
      />
      <Button class="btn-outline-dark" type="submit">add</Button>
    </form>
  </Box>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      viewers: "",
    };
  },
  methods: {
    addMovie() {
      if (this.name.trim() && this.viewers.trim()) {
        const newMovie = {
          id: Date.now(),
          name: this.name,
          viewer: Number(this.viewers),
          favorite: false,
          like: false,
        };
        this.$emit("createMovie", newMovie);
      }
      this.name, (this.viewers = "");
    },
  },
};
</script>
<style></style>
