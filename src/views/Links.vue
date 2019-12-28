<template lang="pug">
  .imp-link
    Navbar(pageName="Important Links")
    v-content
      v-container
        .links-text
          v-row
            a(href="href=https://rajbhasha.nic.in/hi/hindi-vocabulary" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow hindi shabadkosh
          v-row
            a(href="https://mantra-rajbhasha.rb-aai.in/" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow hindi anuvad ki link
          v-row 
            a(href="https://www.microsoft.com/en-in/bhashaindia/downloads.aspx" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow microsoft indic input tool
          v-row 
            a(href="http://e-mahashabdkosh.rb-aai.in/" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow  e-mahashabadkosh ki link
          v-row
            a(href="http://www.nitgoa.ac.in/" target="_blank")
              v-icon(color = "#feee77") mdi-pdf-box
              span.text-yellow sansthan ki rajbhasha prakoshtha ki timahi report
          v-row 
            a(href="https://rajbhasha.nic.in/" target="_blank")
              v-icon(color = "#feee77") mdi-open-in-new
              span.text-yellow bharat sarkar grih mantralaya ki rajbhasha vibhag ki website  
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
  }
  a:link {
    text-decoration: none;
  }
}
</style>