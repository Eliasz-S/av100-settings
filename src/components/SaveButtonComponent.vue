<template>
  <b-button variant="success" class="save-button my-3" @click="onClick">
    <slot />
  </b-button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
  name: "SaveButtonComponent",
  methods: {},
};
</script>

<style scoped>
.save-button {
  width: 100%;
}
</style>
