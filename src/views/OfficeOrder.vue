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
                th.text-left परिपत्र/आदेश
            tbody
              tr(v-for='item in information' :key='item.name')
                td {{ item.date }}
                td {{ item.subject }}
                td {{ item.office_order }}
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
        date: "06/12/2018",
        subject: "आंतरिक एवं बाह्य पत्राचार का पृथक रिकॉर्ड रखने बाबत",
        office_order: "डाउनलोड"
      },
      {
        date: "05/10/2018",
        subject:
          "राजभाषा के प्रगामी प्रयोग हेतु जांच बिन्दु निर्धारित करने के सम्बन्ध में",
        office_order: "डाउनलोड"
      },
      {
        date: "08/06/2018 ",
        subject: "जाँच का उम्मीदवार के लिये पैनल जैसा हिंदी अनुवादक।",
        office_order: "डाउनलोड"
      },
      {
        date: "31/05/2018",
        subject:
          "संसथान के सभी कम्प्यूटरों में हिन्दी सॉफ्टवेयर सुनाशित करने के सम्बन्ध में",
        office_order: "डाउनलोड"
      },
      {
        date: "09/05/2018",
        subject:
          "एम.एच.आर.डी की हिंदी सलाहकार समिति के सदयस्य के सुझाव के सम्प्रेषण के सम्बन्ध में",
        office_order: "डाउनलोड"
      },
      {
        date: "16/03/2018",
        subject: "नवीन राजभाषा कार्यान्वयन समिति का गठन",
        office_order: "डाउनलोड"
      },
      {
        date: "16/03/2018",
        subject: "भाषा अध्ययन प्रोत्साहन योजना",
        office_order: "डाउनलोड"
      },
      {
        date: "15/01/2018",
        subject:
          "हिन्दी टंकण एवं अनुवाद परीक्षा दिनांक १५ जनवरी, २०१८ का परिणाम",
        office_order: "डाउनलोड"
      },
      {
        date: "26/12/2017",
        subject:
          "समस्त विज्ञापनों में संस्थान का नाम व पता द्विभाषी रूप में छपवाए जाने के संबंध में ",
        office_order: "डाउनलोड"
      },
      {
        date: "23/01/2017",
        subject:
          '24 जनवरी, 2017 को "तेरहवीं हिन्दी टंकण एवं अनुवादकीय प्रवीणता परीक्षा" के आयोजन के संबंध में ।',
        office_order: "डाउनलोड"
      },
      {
        date: "24/08/2016",
        subject: "हिन्दी पखवाड़ा - 2016 परिपत्र",
        office_order: "डाउनलोड"
      },
      {
        date: "15/07/2016",
        subject: "सरकारी कामकाज में राजभाषा हिन्दी के प्रयोग हेतु परिपत्र ।",
        office_order: "डाउनलोड"
      },
      {
        date: "13/06/2016",
        subject:
          '20 जून, 2016 को "ग्यारहवीं हिन्दी टंकण एवं अनुवादकीय प्रवीणता परीक्षा" के आयोजन के संबंध में ।',
        office_order: "डाउनलोड"
      },
      {
        date: "22/10/2015",
        subject:
          '28 दिसम्बर, 2015 को "दशम हिन्दी टंकण एवं अनुवादकीय प्रवीणता परीक्षा" के आयोजन के संबंध में ।',
        office_order: "डाउनलोड"
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
