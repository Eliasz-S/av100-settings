<template>
  <div class="profile">
    <ProfileSettingsComponent />
  </div>
</template>

<script>
import ProfileSettingsComponent from "@/components/ProfileSettingsComponent.vue";

export default {
  name: "ProfileView",
  components: {
    ProfileSettingsComponent,
  },
};
</script>

<style scoped>
.profile {
  width: 50%;
}
</style>
