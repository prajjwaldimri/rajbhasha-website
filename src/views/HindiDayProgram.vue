<template lang="pug">
  div
    Navbar(:breadcrumbs="breadcrumbs")
    v-content
      v-container(fluid)
        v-simple-table(:dense='dense' :fixed-header='fixedHeader' )
          template(v-slot:default='')
            thead
              tr
                th.text-left Date
                th.text-left Subject
            tbody
              tr(v-for='item in information' :key='item.name')
                td {{ item.date }}
                td {{ item.subject }}
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
  },

  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    information: [
      {
        date: "28 / 12 / 2019",
        subject: "I saw what you emanate I held my hand to take",
        office_order: "Download"
      },
      {
        date: "29 / 12 / 2019",
        subject: "A piece of it with me Passed through me like Gamma rays",
        office_order: "Download"
      },
      {
        date: "30 / 12 / 2019",
        subject: "It burned my soul to see A thing with such beauty",
        office_order: "Download"
      },
      {
        date: "31 / 12 / 2019",
        subject: "Stratosphere",
        office_order: "Download"
      },
      {
        date: "31 / 12 / 2019",
        subject: "Floating in your stare",
        office_order: "Download"
      },
      {
        date: "32 / 12 / 2019",
        subject: "Take me far from here",
        office_order: "Download"
      },
      {
        date: "33 / 12 / 2019",
        subject: "Are you even there? I miss the way you felt to breathe",
        office_order: "Download"
      }
    ],
    breadcrumbs: [
      {
        text: "होम",
        disabled: false,
        href: "/"
      },
      {
        text: "हिंदी दिवस कार्यक्रम",
        disabled: true,
        href: "/hindidayprogram"
      }
    ]
  })
};
</script>
