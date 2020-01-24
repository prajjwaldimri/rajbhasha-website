<template lang="pug">
  div
    Navbar(:breadcrumbs="breadcrumbs")
    v-content
      v-container(fluid)
        v-simple-table(:dense='dense' :fixed-header='fixedHeader' )
          template(v-slot:default='')
            thead
              tr
                th.text-left लेखक
                th.text-left लेख
                th.text-left लिंक
            tbody
              tr(v-for='item in information' :key='item.name')
                td {{ item.author }}
                td {{ item.title }}
                td
                  a(:href="item.href" target="_blank" style="color:white;text-decoration-line:underline;") लिंक
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
        author: "रमानाथ अवस्थी",
        title: "रचना और तुम",
        href: "https://kaavyaalaya.org/rachna_aur_tum"
      },
      {
        author: "वाणी मुरारका",
        title: "देश की नागरिक",
        href: "https://kaavyaalaya.org/aise-desh-kee-naagarik"
      },
      {
        author: "नागार्जुन",
        title: "कालिदास",
        href: "https://kaavyaalaya.org/kalidas"
      },
      {
        author: "मीराबाई",
        title: "पग घूँघरू बाँध मीरा नाची रे",
        href: "https://kaavyaalaya.org/pag_ghunghroo_baandh_meeraa_naachee_re"
      },
      {
        author: "मीराबाई",
        title: "मेरे तो गिरिधर गोपाल",
        href: "https://kaavyaalaya.org/mere_to_giridhar_gopal"
      },
      {
        author: "गोस्वामी तुलसीदास",
        title: "बालकाण्ड (रामचरितमानस अंश)",
        href: "https://kaavyaalaya.org/baalkaand"
      },
      {
        author: "कबीरदास",
        title: "काहे री नलिनी तूं कुमिलानी",
        href: "https://kaavyaalaya.org/kaahe_re_nalinee"
      },
      {
        author: "सूरदास",
        title: "पिया बिन नागिन काली रात",
        href: "https://kaavyaalaya.org/piyaa_bin_naagin_kaalee_raat"
      },
      {
        author: "रवीन्द्रनाथ टगोर",
        title: "क्यूँ भिजोये ना",
        href: "https://kaavyaalaya.org/kyun_bhijoye_na"
      },
      {
        author: "विनीत मिश्रा",
        title: "शून्य कर दो",
        href: "https://kaavyaalaya.org/shoonya-kar-do"
      },
      {
        author: "साहिर लुधियानवी",
        title: "परछाइयाँ",
        href: "https://kaavyaalaya.org/parchhaaiyaan"
      }
    ],
    breadcrumbs: [
      {
        text: "होम",
        disabled: false,
        href: "/"
      },
      {
        text: "हिंदी लेखा",
        disabled: true,
        href: "/writings"
      }
    ]
  })
};
</script>
