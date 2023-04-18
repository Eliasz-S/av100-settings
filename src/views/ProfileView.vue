<template>
  <div>
    <div>This is profile view</div>
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
