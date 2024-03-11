<template>
  <Box>
    <li
      class="list-group-item d-flex justify-content-center"
      :class="[{ like: movie.like }, { favorite: movie.favorite }]"
    >
      <span
        @click="$emit('onToggle', { id: movie.id, prop: 'like' })"
        class="list-group-item-label"
        >{{ movie.name }}</span
      >
      <input
        class="list-group-item-input"
        type="number"
        :value="movie.viewer"
      />
      <div class="d-flex justify-content-center align-items-center">
        <button
          class="btn-cookie btn-sm"
          @click="$emit('onToggle', { id: movie.id, prop: 'favorite' })"
        >
          fov
        </button>
        <button class="btn-trash btn-sm" @click="$emit('onRemove', movie.id)">
          del
        </button>
        <button class="btn-start btn-sm">start</button>
      </div>
    </li>
  </Box>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onLike() {
      this.$emit("onLike", this.movie.id);
    },
  },
};
</script>

<style scoped>
.list-group-item {
  padding: 15px 20px;
  border-bottom: 1px solid red;
}

.list-group-item span {
  line-height: 35px;
  cursor: pointer;
  font-size: 20px;
  width: 550px;
}

.list-group-item input {
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: none;
}

.list-group-item button {
  height: 35px;
  width: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.list-group-item .btn-cookie {
  color: gold;
}
.list-group-item .btn-trash {
  color: red;
}
.list-group-item .btn-start {
  opacity: 0;
  transform: translateX(30px);
}

.list-group-item.like .btn-start {
  opacity: 1;
  transform: translateX(0);
}

.list-group-item.favorite .list-group-item-label,
.list-group-item.favorite .list-group-item-input {
  color: gold;
}
</style>
