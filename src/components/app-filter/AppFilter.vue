<template>
  <div class="btn-group">
    <Button
      v-for="btn in buttons"
      :key="btn.id"
      type="button"
      @click="onFilterMovie(btn.filter)"
      :class="[filterName === btn.filter ? 'btn-dark' : 'btn-outline-dark']"
    >
      {{ btn.name }}
    </Button>
  </div>
</template>
<script>
export default {
  props: {
    onUpdateFilter: {
      type: Function,
      required: true,
    },
    filterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      buttons: [
        {
          id: 0,
          name: "barcha kinolar",
          filter: "all",
        },
        {
          id: 1,
          name: "mashhur kinolar",
          filter: "popular",
        },
        {
          id: 2,
          name: "eng ko'p korilgan kinolar",
          filter: "mostViewers",
        },
      ],
      value: "all",
    };
  },
  methods: {
    onFilterMovie(value) {
      this.value = value;
      this.onUpdateFilter(value);
    },
  },
};
</script>
<style scoped></style>
