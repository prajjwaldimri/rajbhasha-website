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
            tbody
              tr(v-for='item in information' :key='item.name')
                td {{ item.date }}
                td {{ item.subject }}
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
      {
        date: "१५/१०/२०१८",
        subject: "निबंध प्रतियोगिता",
        office_order: "Download"
      },
      {
        date: "१०/१०/२०१८",
        subject: "हिंदी टंकण एवं हिंदी हस्त लेखन प्रतियोगिता",
        office_order: "Download"
      },
      {
        date: "१८/०१/२०१७ ",
        subject:
          "हिंदी आदर्श वाक्य लेखन प्रतियोगिता तथा हिंदी सप्ताह समापन समारोह ",
        office_order: "Download"
      },
      {
        date: "१५/०१/२०१७ ",
        subject: "वाद संवाद : वर्तमान तकनिकी में नवाचार एवं लाभान्वित समुदाय ",
        office_order: "Download"
      },
      {
        date: "१४/०१/२०१७ ",
        subject: "हिंदी हस्त लेखन एवं हिंदी टंकण प्रतियोगिता ",
        office_order: "Download"
      },
      {
        date: "१३/०१/२०१७ ",
        subject:
          "स्वरचित हिंदी काव्य पाठ प्रतियोगिता एवं हिंदी हास्य काव्य पाठ प्रतियोगिता",
        office_order: "Download"
      },
      {
        date: "१२/०१/२०१७ ",
        subject:
          "हिंदी सप्ताह का शुभ आरंभ तथा हिंदी साहित्य का परिचय : हिंदी समिति की पेशकश",
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
