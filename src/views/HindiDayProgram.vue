<template lang="pug">
div
  Navbar(:breadcrumbs="breadcrumbs")
  v-content
    v-container.pb-10(fluid)
      .d-flex.flex-column.pt-5.pr-10.pl-10
        h3.poppins-font-resolution.pt-3(style="text-align: justify") प्रिय बंधुगण,
        h3.poppins-font-resolution.pt-3(style="text-align: justify") नमस्कार!
        h3.poppins-font-resolution.pt-3(style="text-align: justify") संस्था की राजभाषा समिति अत्यंत हर्षपूर्वक यह सूचित करती है कि इस वर्ष हम "हिंदी सप्ताह २०२१" को ऑनलाइन माध्यम द्वारा आयोजित करने जा रहे है। और इस सप्ताह का आयोजन दिनांक १४ से २० सितंबर तक किया जायेगा।
        h3.poppins-font-resolution.pt-3(style="text-align: justify") "हिंदी सप्ताह २०२१" का शुभारंभ दिनांक १४ सितंबर २०२१ को संध्याकाल ४ बजे Google Meet के माध्यम से किया जायेगा तथा इसका विवरण एवं आमंत्रण शीघ्र ही प्रेषित किया जायेगा। "हिंदी सप्ताह २०२१" के दौरान विभिन्न प्रतियोगितओं का भी आयोजन किया जायेगा एवं आप सब से अनुरोध है कि इन प्रतियोगिताओं में बढ़-चढ़ कर हिस्सा लें और कार्यक्रम को सफल बनाएँ। धन्यवाद।
        h3.poppins-font-resolution.pt-8.text-yellow(
          style="text-align: center; font-weight: bold"
        ) "अभिरुचि की अभिव्यक्ति" को प्रस्तुत करने हेतु लिंक ("गूगल फ़ॉर्म "): https://docs.google.com/forms/d/1piZAIuuV7jN3XvL1JraZpPOLC1YdwgxhBoMpWifZpWc/edit
        h3.poppins-font-resolution.pt-8(
          style="text-align: justify; font-weight: bold"
        ) कृपया ध्यान दें:-
        h3.poppins-font-resolution.pt-5(style="text-align: justify") "हिंदी सप्ताह २०२१" के दौरान आयोजित किये जाने वाले कार्यक्रमों एवं प्रतियोगिताओं की सूची इस मेल के साथ संलग्न है। कृपया हमें अपनी "अभिरुचि की अभिव्यक्ति" १० सितंबर २०२१ को या उससे पहले भेजें।
        h3.poppins-font-resolution.pt-3(style="text-align: justify") आयोजित किये जाने वाले कार्यक्रमों एवं प्रतियोगिताओं में भाग लेने के लिए आप सभी से प्रविष्टियां आमंत्रित है। कृपया हमें अपनी "अभिरुचि की अभिव्यक्ति" ("expression of interest" ) को नीचे दी गयी लिंक ("गूगल फ़ॉर्म ") पर १४ सितंबर २०२१ या उससे पहले भेजें।
        h3.poppins-font-resolution.pt-3(style="text-align: justify") सभी प्रतियोगिताएं निर्धारित कार्यक्रम के अनुसार होंगी, हालांकि हम आपसे अनुरोध करते है की निबंध लेखन प्रतियोगिता हेतु आप अपनी प्रविष्टियाँ समय से पूर्व यानी १५ सितंबर २०२१ से पहले ही हमें हमारे इस ईमेल आईडी rajbhasha@nitgoa.ac.in पर pdf स्वरूप में भेज दे।
        h3.poppins-font-resolution.pt-3(style="text-align: justify") ठीक इसी प्रकार, हिंदी काव्य पाठ प्रतियोगिता एवं हिंदी हास्य काव्य पाठ प्रतियोगिता हेतु भी आप अपनी प्रविष्टियाँ समय से पूर्व यानी १४ सितंबर २०२१ से पहले ही हमें भेज दे। उल्लेखित प्रतियोगिताओं हेतु आप को उपयुक्त प्रारूप में ५ मिनट की अवधि (अधिक से अधिक) का एक पूर्व-रिकॉर्डेड वीडियो भेजना होगा ।

        h3.poppins-font-resolution.pt-6(style="text-align: justify") अन्त में, राजभाषा समिति, संस्था के निदेशक महोदय को इस कार्यक्रम के अनुमोदन एवं प्रोत्साहन के लिए ह्रदय से आभार प्रकट करती है।
        h3.poppins-font-resolution.pt-6(style="text-align: justify") विनीत,
        h3.poppins-font-resolution.pt-1(style="text-align: justify") राजभाषा समिति,
        h3.poppins-font-resolution.pt-1.pb-10(style="text-align: justify") राष्ट्रीय प्रौद्योगिकी संस्थान गोवा

      v-simple-table.mb-10(:dense="dense", :fixed-header="fixedHeader")
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
      //Add Code in here
      {
        date: "१४/०९/२०२१",
        subject: "हिंदी सप्ताह का शुभारम्भ एवं हिंदी साहित्य का परिचय",
        download: "डाउनलोड",
        href: "https://drive.google.com/file/d/1JmjbwkSfcHhZNcSfnyCH4QHISAQFTtJ_/view?usp=sharing",
      },
    ],
    breadcrumbs: [
      {
        text: "होम",
        disabled: false,
        href: "/",
      },
      {
        text: "हिंदी सप्ताह कार्यक्रम",
        disabled: true,
        href: "/hindidayprogram",
      },
    ],
  }),
};
</script>
