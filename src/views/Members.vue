<template lang="pug">
  .about
    Navbar(:breadcrumbs="breadcrumbs")

    v-content
      v-container
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

</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar
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
          url: require("@/assets/pragati.jpg")
        },
        {
          name: "श्री मुनीश कुमार",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "श्री अमित कबिराज",
          department: "department",
          url: require("@/assets/amit.jpg")
        },
        {
          name: "श्री एस सुदर्सन",
          department: "department",
          url: require("@/assets/sudhu.jpg")
        },
        {
          name: "श्रीमती सुविधा नाइक",
          department: "department",
          url: require("@/assets/headshot.jpg")
        },
        {
          name: "श्री श्रीराम कुमावत",
          department: "department",
          url: require("@/assets/ram.jpg")
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
          text: "सदस्य",
          disabled: true,
          href: "/members"
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

.team-member {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .display-4 {
    text-align: center;
  }

  &-profiles {
    :first-child {
      grid-column: 1 / span 3;
      @media (max-width: 1264px) {
        grid-column: 1 / span 1;
      }
    }

    @media (max-width: 1264px) {
      grid-template-columns: 1fr;
    }
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
