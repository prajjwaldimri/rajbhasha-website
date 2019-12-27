<template lang="pug">
  .home
    Navbar
    v-content
      .home-content
        .left
          span.display-4 राजभाषा प्रकोष्ठ
        .right
          VueperSlides(autoplay fade :arrows="false" :slideRatio="3/5").no-shadow
            VueperSlide(v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" :image="slide.image")
    FloatingNav
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FloatingNav from "@/components/FloatingNav.vue";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "home",
  components: {
    Navbar,
    FloatingNav,
    VueperSlides,
    VueperSlide
  },
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide content.",
        image: require("@/assets/carriage.jpg")
      },
      {
        title: "Slide #2",
        content: "Slide content.",
        image: require("@/assets/clouds.jpg")
      }
    ]
  })
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

.home-content {
  display: flex;
  align-items: center;
  height: 75vh;

  .left {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    span {
      text-align: right;
      transform: translateX(10%);
      z-index: 2;
      color: #feee77;
      -webkit-text-stroke: -200px black;
      font-weight: 400;
    }
  }

  .right {
    width: 60%;
  }
}
</style>
