<template>
  <input
    type="text"
    class="form-control search-input"
    placeholder="search..."
    :value="value"
    @input="onChangeValue"
  />
</template>
<script>
export default {
  props: {
    onUpdateValue: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onChangeValue(e) {
      this.value = e.target.value;
      this.onUpdateValue(this.value);
    },
  },
};
</script>
<style scoped>
.search-input {
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background: #fcf5fc;
  border-radius: 4px;
}
</style>
