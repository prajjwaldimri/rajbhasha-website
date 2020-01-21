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
                  a(:href = "item.email" target="_blank")
                    v-icon.mr-2 mdi-email
                  a(:href = "item.phone" target="_blank")
                    v-icon.mr-2 mdi-phone


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
          name: "डॉ. गोपाल मुगेराय",
          department: "निदेशक ,रा. प्रो. सं गोवा",
          url: require("@/assets/director.jpg"),
          email: "mailto:",
          phone: "tel:"
        },
        {
          name: "डॉ. शिव नारायण पाटीदार",
          department: "सहायक प्राध्यापक",
          url: require("@/assets/shiv.jpg"),
          email: "mailto:shivnarayan.patidar@nitgoa.ac.in ",
          phone: "tel:"
        },
        {
          name: "डॉ. प्रगति पटेल",
          department: "सहायक प्राध्यापक ",
          url: require("@/assets/pragati.jpg"),
          email: "mailto:pragati@nitgoa.ac.in",
          phone: "tel:+91-832-2404204"
        },
        {
          name: "श्री मुनीश कुमार",
          department: "सहायक पुस्तकालयाध्यक्ष",
          url: require("@/assets/munesh.jpg"),
          email: "mailto:asst.librarian@nitgoa.ac.in",
          phone: "tel:"
        },
        {
          name: "श्री अमित कबिराज",
          department: "सहायक रजिस्ट्रार",
          url: require("@/assets/amit.jpg"),
          email: "mailto:asst.reg@nitgoa.ac.in",
          phone: "tel:+91-832-2404207"
        },
        {
          name: "श्री एस सुदर्सन",
          department: "तकनीकी सहायक",
          url: require("@/assets/sudhu.jpg"),
          email: "mailto:sudharsan@nitgoa.ac.in",
          phone: "tel:+91-9405153443"
        },
        {
          name: "श्रीमती सुविधा नाइक",
          department: "तकनीकी सहायक",
          url: require("@/assets/suvida.jpg"),
          email: "mailto:suvidanaik@nitgoa.ac.in",
          phone: "tel:"
        },
        {
          name: "श्री श्रीराम कुमावत",
          department: "तकनीशियन",
          url: require("@/assets/ram.jpg"),
          email: "mailto:shriram@nitgoa.ac.in",
          phone: "tel:"
        },
        {
          name: "श्री राजकुमार",
          department: "बहुविध कार्य कर्मचारी ",
          url: require("@/assets/rajkumar.jpg"),
          email: "mailto:rajkumar@nitgoa.ac.in",
          phone: "tel:"
        },
        {
          name: "श्री संदीप जैसवार",
          department: "बहुविध कार्य कर्मचारी ",
          url: require("@/assets/sandeep.jpg"),
          email: "mailto:sandeep8025@nitgoa.ac.in",
          phone: "tel:"
        } // Add new members here
        //Add a comma here before adding another member
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
