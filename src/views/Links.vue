<template lang="pug">
  .imp-link
    Navbar(:breadcrumbs="breadcrumbs")
    v-content
      v-container
        .links-text
          v-row
            a(href="https://rajbhasha.nic.in/hi/hindi-vocabulary" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow हिंदी शब्दकोश
          v-row
            a(href="https://mantra-rajbhasha.rb-aai.in/" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow हिंदी अनुवाद की लिंक
          v-row
            a(href="https://www.microsoft.com/en-in/bhashaindia/downloads.aspx" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow मइक्रोसॉफ़्ट इंडिक इनपुट टूल
          v-row
            a(href="http://e-mahashabdkosh.rb-aai.in/" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow  इ-महाशब्दकोश की लिंक
          v-row
            router-link(to="/trimesterReport")
              v-icon(color = "#feee77") mdi-pdf-box
              span.text-yellow संस्थान की राजभाषा प्रकोष्ठ की तिमाही रिपोर्ट
          v-row
            a(href="https://rajbhasha.nic.in/" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow भारत सरकार गृह मंत्रालय के राजभाषा विभाग की वेबसाइट
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
          text: "आवश्यक लिंक्स",
          disabled: true,
          href: "/links"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.imp-link {
  padding-bottom: 128px;
}
.links-text {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  span {
    word-break: break-word;
    font-family: "Poppins", sans-serif !important;
    font-size: 1.7rem;
    line-height: 4rem;
    padding-left: 0.5rem;
    @media (max-width: 1264px) {
      width: 100%;
      font-size: 0.8rem !important;
    }
  }
  a:link {
    text-decoration: none;
  }
  a {
    outline: none;
    display: flex;
  }
  @media (max-width: 1264px) {
    width: 100%;
    line-height: 0.2rem;
  }
}
</style>
