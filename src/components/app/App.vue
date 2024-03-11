<template>
  <div class="app">
    <div class="content">
      <AppInfo
        :allMovieCount="movies.length"
        :favoriteMovie="movies.filter((item) => item.favorite).length"
      />
      <Box>
        <div>
          <SearchPanel :onUpdateValue="onUpdateValue" />
          <AppFilter :onUpdateFilter="onUpdateFilter" :filterName="filter" />
        </div>
      </Box>
      <MovieList
        :movies="onFilterMovie(onSearchMovie(movies, term), filter)"
        @onToggle="onToggle"
        @onRemove="onRemove"
      />
      <Box>
        <nav aria-label="pagination">
          <ul class="pagination pagination-sm">
            <li
              v-for="numberPage in totalPage"
              :key="numberPage"
              :class="{ active: numberPage === page }"
              @click="onChangePage(numberPage)"
            >
              <span class="page-link">{{ numberPage }}</span>
            </li>
          </ul>
        </nav>
      </Box>
      <MovieAddForm @createMovie="createMovie" />
      <button @click="getData">click me</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
      movies: [],
      term: "",
      filter: "all",
      limit: 10,
      page: 1,
      totalPage: 0,
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
    onRemove(id) {
      this.movies = this.movies.filter((el) => el.id !== id);
    },
    onSearchMovie(arr, value) {
      if (value.length === 0) return arr;
      return arr.filter((el) => el.name.toLowerCase().indexOf(value) > -1);
    },
    onUpdateValue(value) {
      this.term = value;
    },
    onFilterMovie(arr, rank) {
      switch (rank) {
        case "popular":
          return arr.filter((el) => el.like);
        case "mostViewers":
          return arr.filter((el) => el.viewer > 250);
        default:
          return arr;
      }
    },
    onUpdateFilter(value) {
      this.filter = value;
    },
    onChangePage(page) {
      this.page = page;
      this.onGetData();
    },
    async onGetData() {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: { _limit: this.limit, _page: this.page },
        }
      );

      const newData = res.data.map((item) => ({
        id: item.id,
        name: item.title,
        like: false,
        favorite: false,
        viewer: item.id * 10,
      }));
      this.totalPage = res.headers["x-total-count"] / this.limit;
      this.movies = newData;
      console.log("rendered");
    },
  },
  mounted() {
    this.onGetData();
  },
  watch: {
    page() {
      this.onGetData();
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
</style>
