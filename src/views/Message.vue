<template lang="pug">
  .about
    Navbar(:breadcrumbs="breadcrumbs")

    v-content
      v-container
        .gandhi-message-section
          .about-text.text-yellow
            span.display-2 मैं हिन्दी के जरिए प्रांतीय भाषाओं को दबाना नहीं चाहता किन्तु उनके साथ हिन्दी को भी मिला देना चाहता हूँ।
            h2.headline - महात्मा गांधी
          v-img(src="@/assets/gandhi.jpg" aspect-ratio="0.7")

</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: "होम",
          disabled: false,
          href: "/"
        },
        {
          text: "Sandesh",
          disabled: true,
          href: "/message"
        }
      ]
    };
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

  .about-text {
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
</style>
