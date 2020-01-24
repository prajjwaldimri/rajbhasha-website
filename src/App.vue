<template lang="pug">
  v-app
    Notification
    transition(name="fade" mode="out-in")
      router-view
    FloatingNav
    Footer

</template>

<script>
import FloatingNav from "@/components/FloatingNav.vue";
import Footer from "@/components/Footer.vue";
import Notification from "@/components/Notification.vue";
export default {
  name: "App",
  components: {
    FloatingNav,
    Footer,
    Notification
  }
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
