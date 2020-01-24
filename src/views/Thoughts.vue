<template lang="pug">
  .about
    Navbar(:breadcrumbs="breadcrumbs")

    v-content
      v-container
        .gandhi-message-section
          .about-text.text-yellow
            span.display-2 मैं हिन्दी के जरिए प्रांतीय भाषाओं को दबाना नहीं चाहता किन्तु उनके साथ हिन्दी को भी मिला देना चाहता हूँ। 
          v-img(src="@/assets/gandhi.jpg" aspect-ratio="0.7")
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
          text: "अभिभाषण /विचार",
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
    width: 70%;
  }
}
.gandhi-additional-message-section {
  display: flex;
  align-items: center;
  height: 68vh;

  .about-add-text {
    display: flex;
    flex-direction: column;
    span {
      font-size: 2rem;
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
