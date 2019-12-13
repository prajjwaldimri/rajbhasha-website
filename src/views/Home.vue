<template>
  <div class="home">
    <HelloWorld />
    <FloatingNav ma-4 />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FloatingNav from "@/components/FloatingNav.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    FloatingNav
  }
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  background-color: grey;
}

.v-toolbar.v-toolbar--bottom {
  bottom: 1rem;
  left: 4rem;
  right: 4rem;
  border-radius: 0.2rem;
}
</style>
