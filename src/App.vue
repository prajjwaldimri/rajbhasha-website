<template lang="pug">
  v-app
    v-content
      v-container(fluid)
        router-view
      FloatingNav

</template>

<script>
import FloatingNav from "@/components/FloatingNav.vue";
export default {
  name: "App",
  components: {
    FloatingNav
  }
};
</script>
