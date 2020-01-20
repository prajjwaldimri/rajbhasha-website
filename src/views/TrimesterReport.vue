<template lang="pug">
  div
    Navbar(:breadcrumbs="breadcrumbs")
    v-content
      v-container(fluid)
        v-simple-table(:dense='dense' :fixed-header='fixedHeader' )
          template(v-slot:default='')
            thead
              tr
                th.text-left अवधि 
                th.text-left डाउनलोड 
            tbody
              tr(v-for='item in information' :key='item.name')
                td {{ item.duration }}
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
      //Add Code in here
      {
        duration: "जुलाई से सितमबर १९",
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
        text: "तिमाही रिपोर्ट ",
        disabled: true,
        href: "/trimesterReport"
      }
    ]
  })
};
</script>
