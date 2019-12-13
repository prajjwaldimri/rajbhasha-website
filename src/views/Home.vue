<template>
  <div class="home">
    <HelloWorld />
    <FloatingNav />
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
