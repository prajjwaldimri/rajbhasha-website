<template lang="pug">
  .about
    Navbar(:breadcrumbs="breadcrumbs")

    v-content
      v-container
        .gandhi-message-section
          .about-text.text-yellow
            span.display-2 मैं हिन्दी के जरिए प्रांतीय भाषाओं को दबाना नहीं चाहता किन्तु उनके साथ हिन्दी को भी मिला देना चाहता हूँ। 
          v-img.gandhi-image(src="@/assets/gandhi.jpg" aspect-ratio="0.7")
        .gandhi-additional-message-section
          .about-add-text.text-yellow
            span भारत में स्वतंत्रता के बाद संसदीय लोकतंत्र लगातार मजबूत हुआ है। भारतीय लोकतंत्र विश्व का सबसे बड़ा लोकतंत्र है जहां अनेक जातियों, धर्मों और भाषयों के बावजूत सबको बराबरी का हक मिला है। जहां स्त्री पुरुष के बीच कोई असमानता नहीं है बल्कि भारत के महिलायें जीवन के सभी क्षेत्रों में शीर्ष पर पहुंची हैं और हर क्षेत्र में वो अपनी क्षमता का प्रदर्शन करने मे सफल रही हैं ।
            h2.headline - महात्मा गांधी
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
          text: "विचार",
          disabled: true,
          href: "/thoughts"
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

.gandhi-image {
  @media (max-width: 1264px) {
    position: relative;
    z-index: 1;
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }
}

.gandhi-message-section {
  display: flex;
  align-items: center;
  height: 75vh;
  @media (max-width: 1264px) {
    flex-direction: column-reverse;
    height: auto;
  }
  .about-text {
    display: flex;
    flex-direction: column;

    span {
      &.display-2 {
        font-family: "Poppins", sans-serif !important;
        line-height: 4rem;
        @media (max-width: 1264px) {
          text-align: justify;
          font-size: 1.2rem !important;
          font-weight: 300;
          line-height: 3rem;
          letter-spacing: normal !important;
        }
      }
    }
    @media (max-width: 1264px) {
      width: 100%;
    }
    width: 70%;
  }
}
.gandhi-additional-message-section {
  display: flex;
  align-items: center;
  height: 68vh;
  @media (max-width: 1264px) {
    flex-direction: column-reverse;
    height: auto;
    padding-top: 1rem;
  }
  .about-add-text {
    display: flex;
    flex-direction: column;
    span {
      font-size: 2rem;
      @media (max-width: 1264px) {
        font-size: 1.2rem;
      }
      font-weight: 300;
      line-height: 3rem;
      letter-spacing: normal !important;
      font-family: "Poppins", sans-serif !important;
      text-align: justify;
    }
    h2 {
      padding-top: 1rem;
      text-align: end;
      &.headline {
        font-family: "Poppins", sans-serif !important;
      }
    }
    width: 100%;
  }
}
</style>
