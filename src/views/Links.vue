<template lang="pug">
  .imp-link
    Navbar
    v-content
      v-container
        .links-text
          a(href="http://www.nitgoa.ac.in/")
            span.text-yellow sansthan ki rajbhasha prakoshtha ki timahi report
          a(href="href=https://rajbhasha.nic.in/hi/hindi-vocabulary")
            span.text-yellow hindi shabadkosh
          a(href="https://mantra-rajbhasha.rb-aai.in/")
            span.text-yellow hindi anuvad ki link
          a(href="http://e-mahashabdkosh.rb-aai.in/")
            span.text-yellow  e-mahashabadkosh ki link
          a(href="https://www.microsoft.com/en-in/bhashaindia/downloads.aspx")
            span.text-yellow microsoft indic input tool
          a(href="https://rajbhasha.nic.in/")
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  grid-row-gap: 1rem;
  span {
    line-break: loose;
    word-break: break-word;
    word-break: break-all;
    font-family: "Poppins", sans-serif !important;
    font-size: 1.5rem;
    line-height: 4rem;
  }
  &:link {
    text-decoration: none;
  }
}
</style>