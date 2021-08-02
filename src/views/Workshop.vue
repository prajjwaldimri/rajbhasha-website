<template lang="pug">
div
  Navbar(:breadcrumbs="breadcrumbs")
  v-content
    v-container(fluid)
      v-simple-table(:dense="dense", :fixed-header="fixedHeader")
        template(v-slot:default="")
          thead
            tr
              th.text-left दिनांक
              th.text-left विषय
          tbody
            tr(v-for="item in information", :key="item.name")
              td {{ item.date }}
              td {{ item.subject }}
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar,
  },

  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    information: [
      //Add Code in here
      {
        date: "जल्द ही",
        subject: "हिंदी सप्ताह २०२१",
      },
    ],
    breadcrumbs: [
      {
        text: "होम",
        disabled: false,
        href: "/",
      },
      {
        text: "हिंदी कार्यशाला",
        disabled: true,
        href: "/workshop",
      },
    ],
  }),
};
</script>
