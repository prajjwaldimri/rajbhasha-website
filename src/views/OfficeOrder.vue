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
                td
                  a(:href="item.href" target="_blank" style="color:white;text-decoration-line:underline;") डाउनलोड
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
      //Add Code in here
      {
        date: "01/01/2020",
        subject:
          "राजभाषा अधिनियम/नियम के प्रावधानों को कार्यान्वित करने के लिए सूचना एवं निर्देश (हिन्दी)",
        href:
          "https://drive.google.com/open?id=1V6M3tCYSVBUA8uh1aZ67o8LMiCmyquPm"
      },
      {
        date: "01/01/2020",
        subject:
          "राजभाषा अधिनियम/नियम के प्रावधानों को कार्यान्वित करने के लिए सूचना एवं निर्देश (अंग्रेजी)",
        href:
          "https://drive.google.com/open?id=1x6potWJerIjzGIjBh-z7JQepas3nTILK"
      }
    ],
    breadcrumbs: [
      {
        text: "होम",
        disabled: false,
        href: "/"
      },
      {
        text: "हिंदी कार्यालय आदेश",
        disabled: true,
        href: "/officeorder"
      }
    ]
  })
};
</script>
