<template lang="pug">
  .about
    Navbar(:breadcrumbs="breadcrumbs")

    v-content
      v-container
        .gandhi-message-section
          .about-text.text-yellow
            span.display-2 मैं हिन्दी के जरिए प्रांतीय भाषाओं को दबाना नहीं चाहता किन्तु उनके साथ हिन्दी को भी मिला देना चाहता हूँ।
            h2.headline - महात्मा गांधी
          v-img(src="@/assets/gandhi.jpg" aspect-ratio="0.7")

        .team-member
          span.display-4.text-yellow.font-weight-medium सदस्य
          .team-member-profiles
            .team-member-profile(v-for="item in items" :key="item.id")
              v-avatar(size="128")
                v-img(:src="item.url" aspect-ratio="0.9")
              .team-member-profile-info
                span.username.font-weight-light {{item.name}}
                span.department.font-weight-medium.pt-1 {{item.department}}
                v-row(justify="space-around").pt-2
                  v-icon.mr-2 mdi-facebook-box
                  v-icon.mr-2 mdi-phone
                  v-icon.mr-2 mdi-whatsapp

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
  data() {
    return {
      items: [
        {
          name: "निदेशक ,रा. प्रो. सं गोवा",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "डॉ.शिव नारायण पाटीदार",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "डॉ.प्रगति पटेल",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "श्री मुनीश कुमार",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "श्री अमित कबिराज",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "श्री एस सुदर्सन",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "श्रीमती सुविधा नाइक",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "श्री श्रीराम कुमावत",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "श्री राजकुमार",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "श्री संदीप जैसवार",
          department: "department",
          url: require("@/assets/headshot.jpg")
        }
      ],
      breadcrumbs: [
        {
          text: "होम",
          disabled: false,
          href: "/"
        },
        {
          text: "हमारे बारे में",
          disabled: true,
          href: "/about"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.about {
  padding-bottom: 128px;
}
</style>
