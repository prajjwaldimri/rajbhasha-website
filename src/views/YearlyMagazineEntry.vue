<template lang="pug">
div
  Navbar(:breadcrumbs="breadcrumbs")

  v-content
    v-container
      .d-flex.flex-column.pt-5.text-yellow
        span.display-3(style="text-align: center; font-weight: 600") वार्षिक पत्रिका "उर्बा"
        h2.poppins-font-resolution.pt-3(style="text-align: justify") “हिंदी में हमारे संस्थान NIT Goa की पत्रिका "उर्बा " के पहले संस्करण के लिए प्रविष्टियाँ आमंत्रित हैं / Submissions are invited for first edition of our Institute NIT Goa's magazine "Urba" in Hindi
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Dear All,
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Greetings from Rajbhasha Samiti!
        h2.poppins-font-resolution.pt-3(style="text-align: justify") All the members of the NIT Goa fraternity including faculty members, staff members, and students are cordially invited to send submissions to our first Hindi Magazine entitled "Urban", including short stories (500 words), poems, essays, humor memoirs/memoirs, jokes, graphic artwork, puzzles, photographs with appropriate captioning, cover page etc. Tentatively, this magazine is set to be released on 14 September 2021. If you would like to contribute, please send us your "expression of interest" to the below given link (Google form) and "final article" to rajbhasha@nitgoa.ac.in on or before 15 July 2021 & 31 July 2021 respectively. Please note that submission of "expression of interest" is mandatory so as to help us in deciding the framework of the magazine.
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Furthermore, design of the template and the cover page of the magazine is also a part of this call. Best design for template of the magazine (with cover page), will be entitled for a cash prize of Rs.1000/-. And the winner for the same will be given an opportunity to prepare the magazine in full.
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Also go through the instructions given below regarding your entries. All rights reserved for the selection and publication of compositions of the Rajbhasha Samiti. For more information / any type of question or clarification contact:
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Amit Verma (18EEE1003, B.tech Final year): 6377738495; baberwalamit9@gmail.com
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Saurabh Singh Chauhan (18MCE1022,B.tech Final year): 7905020037; 84.sschauhan@gmail.com
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Google link for submission of "expression of interest": https://docs.google.com/forms/d/1oWkm2W1-sxmDG2CgbOWz4Rk-cv0k4evD54UufYmxQ7M/edit
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Best Wishes,
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Dr. Shivnarayan Patidar,
        h2.poppins-font-resolution.pt-3(
          style="text-align: justify; padding-bottom: 2rem"
        ) Convenor, Rajbhasha Samiti, NIT Goa
        h2.poppins-font-resolution.pt-3(style="text-align: justify") Instructions:
        h2.poppins-font-resolution.pt-5(
          style="text-align: justify; padding-bottom: 5rem"
        ) For this year's edition, send only your original and unpublished entries as much as possible. Your creations should be as typed and editable as possible (say, in Microsoft word, text or page for Mac). The photo of the creator/writer, full name, designation and contact details are required to be mentioned in the entries. In articles, diagrams, photographs and figures should be clear and readable. Ensure authenticity of translated articles. You can contact the members of Rajbhasha Prakoshtha for help in translation. No honorarium will be paid to any candidate for publication. All those views are welcome in this publication that represent people living or working in the Institute campus but political views of any kind will not be encouraged. The editorial board or Rajbhasha Prakoshtha will not be responsible for the thoughts or feelings contained in the works and the entire responsibility will be of the author himself. The language used should be simple, clear and legible Hindi.
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "yearlyMagazineEntry",
  components: {
    Navbar,
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: "होम",
          disabled: false,
          href: "/",
        },
        {
          text: "वार्षिक पत्रिका",
          disabled: true,
          href: "/yearlyMagazineEntry",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.about {
  padding-bottom: 128px;
}

.poppins-font-resolution {
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: "Poppins", sans-serif !important;
}
</style>
