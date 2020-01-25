<template lang="pug">
  v-app
    Notification(v-if="!isInauguration")
    transition(name="fade" mode="out-in")
      router-view#top
    FloatingNav(v-if="!isInauguration")
    Footer(v-if="!isInauguration")

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
  },
  data() {
    return {
      isInauguration: false
    };
  },
  beforeMount() {
    if (this.$route.name === "inauguration") {
      this.isInauguration = true;
    } else {
      this.isInauguration = false;
    }
  },
  watch: {
    $route(to) {
      if (to.name === "inauguration") {
        this.isInauguration = true;
      } else {
        this.isInauguration = false;
      }
    }
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

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
