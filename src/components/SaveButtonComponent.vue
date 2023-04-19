<template>
  <b-button variant="success" class="save-button my-3" @click="clickSave"
    >Сохранить</b-button
  >
</template>

<script>
export default {
  name: "SaveButtonComponent",
  methods: {
    clickSave() {
      console.log("click");
    },
  },
};
</script>

<style scoped>
.save-button {
  width: 100%;
}
</style>
