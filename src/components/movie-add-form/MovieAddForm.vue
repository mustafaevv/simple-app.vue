<template>
  <div class="movie-add-form">
    <h3>added movie</h3>
    <form class="add-form d-flex" @submit.prevent="addMovie">
      <input
        type="text"
        class="form-control new-movie-label"
        placeholder="searching..."
        :value="name"
        @input="name = $event.target.value"
      />
      <input
        type="number"
        class="form-control new-movie-label"
        placeholder="how many watch"
        :value="viewers"
        @input="viewers = $event.target.value"
      />
      <button class="btn btn-outline-dark" type="submit">added</button>
    </form>
  </div>
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
<style>
.movie-add-form {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fcf5fc;
  border-radius: 4px;
}
</style>
