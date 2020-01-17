<template lang="pug">
  div
    Navbar(:breadcrumbs="breadcrumbs")
    v-content
      v-container(fluid)
        v-simple-table(:dense='dense' :fixed-header='fixedHeader' )
          template(v-slot:default='')
            thead
              tr
                th.text-left दिनांक
                th.text-left विषय
                th.text-left डाउनलोड
            tbody
              tr(v-for='item in information' :key='item.name')
                td {{ item.date }}
                td {{ item.subject }}
                td {{ item.download }}
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar
  },

  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    information: [
      //Add code here
      {
        date: "28 / 12 / 2019",
        subject: "I saw what you emanate I held my hand to take",
        download: "डाउनलोड"
      },
      {
        date: "29 / 12 / 2019",
        subject: "A piece of it with me Passed through me like Gamma rays",
        download: "डाउनलोड"
      },
      {
        date: "30 / 12 / 2019",
        subject: "It burned my soul to see A thing with such beauty",
        download: "डाउनलोड"
      },
      {
        date: "31 / 12 / 2019",
        subject: "Stratosphere",
        download: "डाउनलोड"
      },
      {
        date: "31 / 12 / 2019",
        subject: "Floating in your stare",
        download: "डाउनलोड"
      },
      {
        date: "32 / 12 / 2019",
        subject: "Take me far from here",
        download: "डाउनलोड"
      },
      {
        date: "33 / 12 / 2019",
        subject: "Are you even there? I miss the way you felt to breathe",
        download: "डाउनलोड"
      }
    ],
    breadcrumbs: [
      {
        text: "होम",
        disabled: false,
        href: "/"
      },
      {
        text: "संदेश",
        disabled: true,
        href: "/messages"
      }
    ]
  })
};
</script>
