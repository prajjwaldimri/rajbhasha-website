<template lang="pug"> 
  .home
    Navbar
    v-content
      v-container
        h1 Hello
    FloatingNav
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FloatingNav from "@/components/FloatingNav.vue";
export default {
  name: "home",
  components: {
    Navbar,
    FloatingNav
  }
};
</script>

<style lang="scss">
.home {
  background: linear-gradient(
      237.99deg,
      rgba(67, 67, 67, 0.96) 0%,
      rgba(0, 0, 0, 0.96) 100%
    ),
    url("~@/assets/alphabet.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
