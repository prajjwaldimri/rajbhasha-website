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
              th.text-left डाउनलोड
          tbody
            tr(v-for="item in information", :key="item.name")
              td {{ item.date }}
              td {{ item.subject }}
              td 
                a(
                  :href="item.href",
                  target="_blank",
                  style="color: white; text-decoration-line: underline"
                ) {{ item.download }}
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
      //Add code here
      {
        date: "12 / 09 / 2018",
        subject: "हिंदी दिवस संदेश",
        download: "डाउनलोड",
        href: "https://drive.google.com/open?id=1Tq-oLVinv4JCllifm_cWo6ssMwEoCWat",
      },
      {
        date: "14 / 09 / 2016",
        subject:
          "हिंदी दिवस के अवसर पर मानव संसाधन विकास भारत सरकार मंत्री जी का हिंदी संदेश",
        download: "डाउनलोड",
        href: "https://drive.google.com/file/d/1IeDL8lXG_rlI6mMOEWIHCqsIsOqMd83z/view?usp=sharing",
      },

      {
        date: "14 / 09  / 2015",
        subject:
          "हिंदी दिवस के अवसर पर भारत के राष्ट्रपति श्री प्रणब मुखर्जी का अभिभाषण",
        download: "डाउनलोड",
        href: "https://drive.google.com/file/d/1VofmU-bU7U-0tKkol93KhqMa6TpYnNLj/view?usp=sharing",
      },
      {
        date: "14 / 09  / 2015",
        subject: "हिंदी दिवस के अवसर पर माननीय गृह मंत्री जी का हिंदी संदेश ",
        download: "डाउनलोड",
        href: "https://drive.google.com/open?id=1sXy13WASh82rtHkGlTL9nwZVc6WxHgUS",
      },
      {
        date: "14 / 09  / 2015",
        subject:
          "हिंदी दिवस के अवसर पर मानव संसाधन विकास भारत सरकार मंत्री जी का हिंदी संदेश",
        download: "डाउनलोड",
        href: "https://drive.google.com/open?id=1DMuJpZ94u_nQJba9uUvS2YEmypr_g0Xp",
      },
    ],
    breadcrumbs: [
      {
        text: "होम",
        disabled: false,
        href: "/",
      },
      {
        text: "संदेश",
        disabled: true,
        href: "/messages",
      },
    ],
  }),
};
</script>
