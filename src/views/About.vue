<template lang="pug">
  .about
    Navbar

    v-content
      v-container
        .gandhi-message-section
          .text.text-yellow
            span.display-2 मैं हिन्दी के जरिए प्रांतीय भाषाओं को दबाना नहीं चाहता किन्तु उनके साथ हिन्दी को भी मिला देना चाहता हूँ।
            h2.headline - महात्मा गांधी
          v-img(src="@/assets/gandhi.jpg" aspect-ratio="0.7")

        .team-members
          span.display-4.text-yellow सदस्य

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
.about {
  padding-bottom: 128px;
}

.gandhi-message-section {
  display: flex;
  align-items: center;
  height: 75vh;

  .text {
    display: flex;
    flex-direction: column;
    span {
      &.display-2 {
        font-family: "Poppins", sans-serif !important;
        line-height: 4rem;
      }
    }
    h2 {
      padding-top: 1rem;
      &.headline {
        font-family: "Poppins", sans-serif !important;
      }
    }
    width: 70%;
  }
}

.team-members {
  padding-top: 2rem;
}
</style>
