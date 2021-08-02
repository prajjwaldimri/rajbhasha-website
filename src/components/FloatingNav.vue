<template lang="pug">
aside
  v-toolbar.floatingNav.d-none.d-lg-block(bottom)
    v-toolbar-items.floatingNavItems
      v-btn.nav-1.textDecorations(text) हमारे बारे में +
      v-btn.nav-2.textDecorations(text) कार्यकलाप +
      v-btn.nav-3.textDecorations(text) संसाधन +
      router-link(to="/links")
        v-btn.textDecorations.textDecorationsLink(text) आवश्यक लिंक्स
      v-btn.nav-5.textDecorations(text) संपर्क करे +

    ///////////////////////////////////////////////////////////////////////////////////////////////

    v-toolbar-items.expanded-menu
      .expanded-menu-items
        .members.floatingNavFlex
          router-link(to="/members")
            v-btn.textDecorations.removeUnderline(text)
              v-img(src="@/assets/member.jpg", height="70", width="140")
              span.pl-3 सदस्य
        .studentmembers.floatingNavFlex
          router-link(to="/studentmembers")
            v-btn.textDecorations.removeUnderline(text)
              v-img(src="@/assets/studentmember.jpg", height="70", width="140")
              span.pl-3 student सदस्य
        .message.floatingNavFlex
          router-link(to="/message")
            v-btn.textDecorations(text)
              v-img(src="@/assets/sandesh1.jpg", height="70", width="140")
              span.pl-3 संदेश

        .lang-resolution.floatingNavFlex
          router-link(to="/resolution")
            v-btn.textDecorations(text)
              v-img(src="@/assets/oath3.jpg", height="70", width="140")
              span.pl-3 राजभाषा संकल्प

        .thoughts.floatingNavFlex
          router-link(to="/thoughts")
            v-btn.textDecorations(text)
              v-img(src="@/assets/thoughts.jpg", height="70", width="140")
              span.pl-3 विचार

    ///////////////////////////////////////////////////////////////////////////////////////////////

    v-toolbar-items.expanded-menu2
      .expanded-menu-items2
        .workshop.floatingNavFlex
          router-link(to="/workshop")
            v-btn.textDecorations(text)
              v-img(src="@/assets/workshop.jpg", height="70", width="140")
              span.pl-3 हिंदी कार्यशाला
        .office-order.floatingNavFlex
          router-link(to="/officeOrder")
            v-btn.textDecorations(text)
              v-img(src="@/assets/officeorder.jpg", height="70", width="140")
              span.pl-3 हिंदी कार्यालय आदेश
        .hindi-day-programme.floatingNavFlex
          router-link(to="/hindiDayProgram")
            v-btn.textDecorations(text)
              v-img(src="@/assets/hindidivas1.jpg", height="70", width="140")
              span.pl-3 हिंदी दिवस कार्यक्रम

    ///////////////////////////////////////////////////////////////////////////////////////////////

    v-toolbar-items.expanded-menu3
      .expanded-menu-items3
        .hindi-writing.floatingNavFlex
          router-link(to="/writings")
            v-btn.textDecorations.pl-3(text)
              v-img(src="@/assets/hindiLetter.jpg", height="70", width="140")
              span.pl-3 हिंदी लेखा
        .yearly-magazine.floatingNavFlex
          router-link(to="/yearlyMagazineEntry")
            v-btn.textDecorations.pl-3(text)
              v-img(src="@/assets/magazine.jpg", height="70", width="140")
              span.pl-3 वार्षिक पत्रिका

    ///////////////////////////////////////////////////////////////////////////////////////////////

    v-toolbar-items.expanded-menu5
      .expanded-menu-items5
        .span-items.floatingNavFlex.textDecorations
          .creators
            span.text-yellow निर्माता:
            .creator-item
              span प्रज्जवल डिमरी
              v-row.creator-icon
                a(href="https://prajjwal.me/", target="_blank")
                  v-icon mdi-web
                a.pl-2(href="https://t.me/prajjwaldimri", target="_blank")
                  v-icon mdi-telegram
                a.pl-2(href="https://github.com/prajjwaldimri", target="_blank")
                  v-icon mdi-github-face
            .creator-item
              span सुबर्णा धर
              v-row.creator-icon
                a(
                  href="https://www.linkedin.com/in/subarnadhar/",
                  target="_blank"
                )
                  v-icon mdi-linkedin-box
                a.pl-2(href="https://t.me/subarnadhar", target="_blank")
                  v-icon mdi-telegram
                a.pl-2(href="https://github.com/subarnadhar", target="_blank")
                  v-icon mdi-github-face
            .creator-item
              span आर वी कौंडिन्या
              v-row.creator-icon
                a(
                  href="https://www.linkedin.com/in/rv-kaundinya-4ba503110/",
                  target="_blank"
                )
                  v-icon mdi-linkedin-box
                a.pl-2(href="https://t.me/kaundinya77", target="_blank")
                  v-icon mdi-telegram
                a.pl-2(href="https://github.com/kaundinya77", target="_blank")
                  v-icon mdi-github-face
            .creator-item
              span दीप पटेल
              v-row.creator-icon
                a(
                  href="https://www.linkedin.com/in/deep-patel-71473519b/",
                  target="_blank"
                )
                  v-icon mdi-linkedin-box
                a.pl-2(href="https://t.me/deep2_0", target="_blank")
                  v-icon mdi-telegram
                a.pl-2(href="https://github.com/Deep-patell", target="_blank")
                  v-icon mdi-github-face
          .contactus
            h5 राजभाषा प्रकोष्ठ
            h5 राष्ट्रीय प्रौद्योगिकी संस्थान गोवा
            h5 फार्मागुडी, पोंडा, गोवा &nbsp;
              span(style="font-family: sans-serif; font-size: 1.1rem") - ४०३४०१
          .contactus-icon
            a(href="mailto:rajbhasha@nitgoa.ac.in", target="_blank")
              v-icon(size="1.2rem") mdi-email
            a(href="https://www.facebook.com/nitgoa/", target="_blank")
              v-icon(size="1.2rem") mdi-facebook-box
            a(href="https://twitter.com/NITGoa_Official", target="_blank")
              v-icon(size="1.2rem") mdi-twitter

    ///////////////////////////////////////////////////////////////////////////////////////////////

  v-btn.d-lg-none.darken-3(fab, bottom, color="grey", right, fixed, @click="sheet = true")
    v-icon(color="#feee77") mdi-menu
  v-bottom-sheet.d-lg-none(v-model="sheet")
    v-list
      v-subheader मेनू
      v-list-group(
        v-for="item in items",
        :key="item.title",
        v-model="item.active",
        no-action
      )
        template(v-slot:activator)
          v-list-item-content
            v-list-item-title.pt-2(v-text="item.title")

        v-list-item(
          v-for="subItem in item.items",
          :key="subItem.title",
          :to="subItem.to",
          @click="mobileNavItemClick"
        )
          v-list-item-content
            v-list-item-title.pt-2(v-text="subItem.title")

  ///////////////////////////////////////////////////////////////////////////////////////////////
</template>

<style lang="scss">
.textDecorations {
  letter-spacing: initial !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  height: 100% !important;
  text-decoration: none !important;
}

.textDecorationsLinks {
  display: flex;
  align-content: center;
  align-items: center;
  text-decoration: none;
}

.floatingNavFlex {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.floatingNav {
  position: fixed !important;
  bottom: 1rem !important;
  left: 2rem;
  right: 2rem;
  z-index: 2;
}

.floatingNavItems {
  width: 100%;
  justify-content: space-around;
}

a:link {
  text-decoration: none;
}

.expanded-menu,
.expanded-menu2,
.expanded-menu3,
.expanded-menu5 {
  z-index: 2;
  &.active {
    z-index: 2;
    opacity: 1;
    // transform: translateY(-80%) translateX(-1rem);
    visibility: visible;
  }
  visibility: hidden;
  opacity: 0;
  height: 200% !important;
  width: 100%;
  position: absolute;
  background: #424242;
  transform: translateY(-80%) translateX(-1rem);
  transition: all 400ms;
}

.expanded-menu-items,
.expanded-menu-items2,
.expanded-menu-items3,
.expanded-menu-items5 {
  z-index: 4;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}

.span-items {
  display: flex;
  flex: 1 1 0;
  justify-items: center;
  span {
    justify-items: space-around;
  }
}

.creators {
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
}
.creator-item {
  display: flex;
  flex-direction: column;
}
.creator-icon {
  display: flex;
  justify-content: center;
}
.contactus {
  display: flex;
  flex-flow: column;
  text-align: end;
}
.contactus-icon {
  display: flex;
  flex-flow: column;
  text-align: end;
}
.nav-mobile {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>

<script>
export default {
  data() {
    return {
      sheet: false,
      items: [
        {
          title: "हमारे बारे में",
          items: [
            {
              title: "सदस्य",
              to: "/members",
            },
            {
              title: "Student सदस्य",
              to: "/studentmembers",
            },
            {
              title: "संदेश",
              to: "/message",
            },
            {
              title: "राजभाषा संकल्प",
              to: "/resolution",
            },
            {
              title: "विचार",
              to: "/thoughts",
            },
          ],
        },
        {
          title: "कार्यकलाप",
          items: [
            {
              title: "हिन्दी कार्यशाला",
              to: "/workshop",
            },
            {
              title: "हिन्दी कार्यशाला आदेश",
              to: "/officeOrder",
            },
            {
              title: "हिन्दी दिवस कार्यक्रम",
              to: "/hindiDayProgram",
            },
          ],
        },
        {
          title: "संसाधन",
          items: [
            {
              title: "हिन्दी लेखा",
              to: "/writings",
            },
            {
              title: "वार्षिक पत्रिका",
              to: "/",
            },
          ],
        },
        {
          title: "आवश्यक लिंक्स",
          items: [
            {
              title: "लिंक्स",
              to: "/links",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    const menu = document.getElementsByClassName("expanded-menu")[0];
    const floatingNavItem = document.getElementsByClassName("nav-1")[0];

    const menu2 = document.getElementsByClassName("expanded-menu2")[0];
    const floatingNavItem2 = document.getElementsByClassName("nav-2")[0];

    const menu3 = document.getElementsByClassName("expanded-menu3")[0];
    const floatingNavItem3 = document.getElementsByClassName("nav-3")[0];

    const menu5 = document.getElementsByClassName("expanded-menu5")[0];
    const floatingNavItem5 = document.getElementsByClassName("nav-5")[0];

    const activeRemover = () => {
      menu.classList.remove("active");
      menu2.classList.remove("active");
      menu3.classList.remove("active");
      menu5.classList.remove("active");
    };

    floatingNavItem.addEventListener("mouseover", () => {
      menu.classList.add("active");
    });

    floatingNavItem.addEventListener("mouseleave", activeRemover);

    menu.addEventListener("mouseover", () => {
      menu.classList.add("active");
    });

    menu.addEventListener("mouseleave", activeRemover);

    ///////////////////////////////////////////////////////////////////////////////////////////////

    floatingNavItem2.addEventListener("mouseover", () => {
      menu2.classList.add("active");
    });

    floatingNavItem2.addEventListener("mouseleave", activeRemover);

    menu2.addEventListener("mouseover", () => {
      menu2.classList.add("active");
    });

    menu2.addEventListener("mouseleave", activeRemover);

    ///////////////////////////////////////////////////////////////////////////////////////////////

    floatingNavItem3.addEventListener("mouseover", () => {
      menu3.classList.add("active");
    });

    floatingNavItem3.addEventListener("mouseleave", activeRemover);

    menu3.addEventListener("mouseover", () => {
      menu3.classList.add("active");
    });

    menu3.addEventListener("mouseleave", activeRemover);

    ///////////////////////////////////////////////////////////////////////////////////////////////

    floatingNavItem5.addEventListener("mouseover", () => {
      menu5.classList.add("active");
    });

    floatingNavItem5.addEventListener("mouseleave", activeRemover);

    menu5.addEventListener("mouseover", () => {
      menu5.classList.add("active");
    });

    menu5.addEventListener("mouseleave", activeRemover);

    ///////////////////////////////////////////////////////////////////////////////////////////////
  },
  methods: {
    mobileNavItemClick() {
      this.sheet = false;
    },
  },
  watch: {
    $route() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
