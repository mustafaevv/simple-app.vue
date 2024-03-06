<template>
  <div class="app">
    <div class="content">
      <AppInfo
        :allMovieCount="movies.length"
        :favoriteMovie="movies.filter((item) => item.favorite).length"
      />
      <div class="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <MovieList :movies="movies" @onToggle="onToggle" />
      <MovieAddForm @createMovie="createMovie" />
    </div>
  </div>
</template>

<script>
import AppInfo from "@/components/app-info/AppInfo.vue";
import SearchPanel from "@/components/search-panel/SearchPanel.vue";
import AppFilter from "@/components/app-filter/AppFilter.vue";
import MovieList from "@/components/movie-list/MovieList.vue";
import MovieAddForm from "@/components/movie-add-form/MovieAddForm.vue";
export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm,
  },
  data() {
    return {
      movies: [
        {
          id: 0,
          name: "Wolf of wall street",
          viewer: 10,
          favorite: true,
          like: false,
        },

        {
          id: 1,
          name: "Thor 3",
          viewer: 12,
          favorite: false,
          like: true,
        },
      ],
    };
  },
  methods: {
    createMovie(item) {
      this.movies.push(item);
    },
    onToggle({ id, prop }) {
      this.movies = this.movies.map((el) => {
        if (el.id === id) {
          return { ...el, [prop]: !el[prop] };
        }
        return el;
      });
    },
  },
};
</script>

<style>
.app {
  height: 100vh;
  color: #000;
}
.content {
  width: 1000px;
  min-height: 700px;
  background: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}
.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fcf5fc;
  border-radius: 4px;
}
</style>
