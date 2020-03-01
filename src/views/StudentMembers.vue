<template lang="pug">
  .about
    Navbar(:breadcrumbs="breadcrumbs")

    v-content
      v-container
        .team-member
          span.display-4.text-yellow.font-weight-medium Student सदस्य
          .team-member-profiles
            .team-member-profile(v-for="item in items" :key="item.id")
              v-avatar(size="128")
                v-img(:src="item.url" aspect-ratio="0.9")
              .team-member-profile-info
                span.username.font-weight-light {{item.name}}
                span.department.font-weight-medium.pt-1 {{item.department}}
                span.department.font-weight-medium.pt-1 {{item.department2}}
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
          name: "Amit Verma",
          department: "निदेशक, रा. प्रो. सं. गोवा ",
          url: require("@/assets/Amit Verma.jpg"),
          email: "email_id@nitgoa.ac.in",
          phone: "tel:+918322404200"
        },
        {
          name: "डॉ. शिव नारायण पाटीदार",
          department: "सहायक प्राध्यापक",
          url: require("@/assets/student2.jpg"),
          email: "mailto:shivnarayan.patidar@nitgoa.ac.in ",
          phone: "tel:"
        },
        {
          name: "डॉ. प्रगति पटेल",
          department: "सहायक प्राध्यापक ",
          url: require("@/assets/student3.jpg"),
          email: "mailto:pragati@nitgoa.ac.in",
          phone: "tel:+91-832-2404204"
        },

        {
          name: "श्री संदीप जैसवार",
          department: "बहुविध कार्य कर्मचारी ",
          url: require("@/assets/student4.jpg"),
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
          text: "Student सदस्य",
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
      grid-column: 1;
      @media (max-width: 1264px) {
        grid-column: 1;
      }
    }

    @media (max-width: 1264px) {
      grid-template-columns: 1fr;
    }
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
