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
                v-img(src="@/assets/headshot.jpg" aspect-ratio="0.9")
              .team-member-profile-info
                span.username.font-weight-light User Name
                span.department.font-weight-medium.pt-1 Department Name
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
      items: [1, 2, 3, 4, 5],
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

.gandhi-message-section {
  display: flex;
  align-items: center;
  height: 75vh;

  .about-text {
    display: flex;
    flex-direction: column;
    span {
      &.display-2 {
        font-family: "Poppins", sans-serif !important;
        line-height: 4rem;
      }
    }
    h2 {
      padding-top: 1rem;
      &.headline {
        font-family: "Poppins", sans-serif !important;
      }
    }
    width: 70%;
  }
}

.team-member {
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .display-4 {
    text-align: center;
  }

  &-profiles {
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 3rem;
  }

  &-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-info {
      display: flex;
      padding-top: 0.5rem;
      flex-direction: column;
      align-items: center;
      .username {
        font-size: 1.6rem;
      }
      .department {
        font-size: 1.2rem;
        margin-top: -0.3rem;
      }
    }
  }
}
</style>
