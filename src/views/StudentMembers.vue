<template lang="pug">
.about
  Navbar(:breadcrumbs="breadcrumbs")

  v-content
    v-container
      .student-team-member
        span.display-4.text-yellow.font-weight-medium विद्यार्थी सदस्य
        .student-team-member-studentprofiles
          .student-team-member-studentprofile(
            v-for="item in items",
            :key="item.id"
          )
            v-avatar(size="180")
              v-img(:src="item.url", aspect-ratio="0.9")
            .student-team-member-studentprofile-studentinfo
              span.username.font-weight-light {{ item.name }}
              span.department.font-weight-medium.pt-1 {{ item.department }}
              span.department.font-weight-medium.pt-1 {{ item.department2 }}
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        {
          name: "अमित वर्मा",

          url: require("@/assets/Amit Verma.jpg"),
        },
        {
          name: "स्नेहिल मिश्रा",

          url: require("@/assets/student2.jpg"),
        },
        {
          name: "विशाखा घाडी",

          url: require("@/assets/student3.jpg"),
        },

        // Add new members here
        //Add a comma here before adding another member
      ],
      breadcrumbs: [
        {
          text: "होम",
          disabled: false,
          href: "/",
        },
        {
          text: "विद्यार्थी सदस्य",
          disabled: true,
          href: "/members",
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

.student-team-member {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .display-4 {
    text-align: center;
  }

  &-studentprofiles {
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
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;
  }

  &-studentprofile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-studentinfo {
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
