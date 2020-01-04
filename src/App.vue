<template lang="pug">
  v-app
    transition(name="fade" mode="out-in")
      router-view
    FloatingNav

</template>

<script>
import FloatingNav from "@/components/FloatingNav.vue";
export default {
  name: "App",
  components: {
    FloatingNav
  },
  methods: {}
};
</script>

<style lang="scss">
.text-yellow {
  color: #feee77;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
