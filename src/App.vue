<template lang="pug">
  v-app
    v-content
      Navbar
      v-container(fluid)
        router-view
      FloatingNav

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FloatingNav from "@/components/FloatingNav.vue";
export default {
  name: "App",
  components: {
    Navbar,
    FloatingNav
  }
};
</script>
