<template>
  <input
    type="text"
    class="form-control"
    :value="modelValue"
    @input="onDataInputValue"
  />
</template>
<script>
export default {
  name: "Input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    onDataInputValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
<style scoped></style>
