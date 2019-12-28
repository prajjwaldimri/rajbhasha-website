<template lang="pug">
    v-toolbar-title
      .imp-link
        a.link1(href="http://www.nitgoa.ac.in/")
            span sansthan ki rajbhasha prakoshtha ki timahi report
        a.link2(href="href=https://rajbhasha.nic.in/hi/hindi-vocabulary")
            span hindi shabadkosh
        a.link2(href="https://mantra-rajbhasha.rb-aai.in/")
            span hindi anuvad ki link
        a.link3(href="http://e-mahashabdkosh.rb-aai.in/")
            span e-mahashabadkosh ki link
        a.link4(href="http://www.nitgoa.ac.in/")
            span microsoft indic input tool
        a.link5(href="https://rajbhasha.nic.in/")
            span bharat sarkar grih mantralaya ki rajbhasha vibhag ki website  
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
  display: flex;
  align-items: center;
  justify-items: flex-;
  span {
    padding-left: 0.5rem;
    color: white;
  }
  &:link {
    text-decoration: none;
  }
}
</style>