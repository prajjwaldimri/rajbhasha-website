<template lang="pug">
  .home
    Navbar(isFlat="true" :breadcrumbs="breadcrumbs")
    v-content
      .home-content
        .left
          h2 राजभाषा
          h2 प्रकोष्ठ
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
    ],
    breadcrumbs: [
      {
        text: "Home",
        disabled: true,
        href: "/"
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
  @media (max-width: 1264px) {
    flex-direction: column;
    justify-content: center;
    height: 90vh;
  }
  height: 75vh;

  .left {
    width: 40%;
    @media (max-width: 1264px) {
      width: 100%;
      justify-content: center;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    h2 {
      @media (max-width: 1264px) {
        font-size: 4rem !important;
        padding: 0;
        transform: none;
        text-align: center;
        line-height: 8rem;
      }
      text-align: right;
      transform: translateX(10%);
      z-index: 2;
      color: #feee77;
      -webkit-text-stroke: -200px black;
      font-weight: 400;
      font-size: 8rem !important;
      font-family: "Kalam", sans-serif !important;
      padding: 3%;
    }
  }

  .right {
    @media (max-width: 1264px) {
      width: 100%;
    }
    width: 60%;
  }
}
</style>
