<template lang="pug">
  aside
    v-toolbar(bottom).floatingNav.d-none.d-lg-block
      v-toolbar-items.floatingNavItems
        v-btn(text).nav-1.textDecorations  हमारे बारे में +
        v-btn(text).nav-2.textDecorations कार्यकलाप +
        v-btn(text).nav-3.textDecorations संसाधन +
        router-link(to='/links')
          v-btn(text).textDecorations.textDecorationsLink आवश्यक लिंक्स
        v-btn(text).nav-5.textDecorations संपर्क करे +

      ///////////////////////////////////////////////////////////////////////////////////////////////

      v-toolbar-items.expanded-menu
        .expanded-menu-items
          .members.floatingNavFlex
            v-img(src="@/assets/member3.jpg" height="70" width="140")
            v-row
              a(href="/members" target="_self")
                v-btn(text).textDecorations.removeUnderline सदस्य
          .message.floatingNavFlex
            v-img(src="@/assets/sandesh4.jpg" height="70" width="140")
            v-row
              a(href="/message" target="_self")
                v-btn(text).textDecorations संदेश

          .lang-resolution.floatingNavFlex
            v-img(src="@/assets/oath.jpg" height="70" width="140")
            v-row
              a(href="/resolution" target="_self")
                v-btn(text).textDecorations राजभाषा संकल्प
          .thoughts.floatingNavFlex
            v-img(src="@/assets/vichar.jpg" height="70" width="140")
            v-row
              a(href="/thoughts" target="_self")
                v-btn(text).textDecorations अभिभाषण /विचार

      ///////////////////////////////////////////////////////////////////////////////////////////////

      v-toolbar-items.expanded-menu2
        .expanded-menu-items2
          .workshop.floatingNavFlex
            v-img(src="@/assets/gandhi.jpg" height="70" width="140" )
            v-row
              a(href="/workshop" target="_self")
                v-btn(text).textDecorations हिंदी कार्यशाला
          .office-order.floatingNavFlex
            v-img(src="@/assets/gandhi.jpg" height="70" width="140")
            v-row
              a(href="/officeOrder" target="_self")
                v-btn(text).textDecorations हिंदी कार्यालय आदेश
          .hindi-day-programme.floatingNavFlex
            v-img(src="@/assets/gandhi.jpg" height="70" width="140")
            v-row
              a(href="/hindiDayProgram" target="_self")
                v-btn(text).textDecorations हिंदी दिवस कार्यक्रम


      ///////////////////////////////////////////////////////////////////////////////////////////////

      v-toolbar-items.expanded-menu3
        .expanded-menu-items3
          .hindi-writing.floatingNavFlex
            v-img(src="@/assets/gandhi.jpg" height="70" width="140")
            v-btn(text).textDecorations हिंदी लेखा
          .yearly-magazine.floatingNavFlex
            v-img(src="@/assets/gandhi.jpg" height="70" width="140")
            v-btn(text).textDecorations वार्षिक पत्रिका


      ///////////////////////////////////////////////////////////////////////////////////////////////

      v-toolbar-items.expanded-menu5
        .expanded-menu-items5
          .span-items.floatingNavFlex.textDecorations
            .creators
              span Created by:
              .creator-item
                span Prajjwal Dimri
                v-row.creator-icon
                  a(href = "https://prajjwal.me/" target="_blank")
                    v-icon mdi-web
                  a(href = "https://t.me/prajjwaldimri" target="_blank").pl-2
                    v-icon mdi-telegram
                  a(href = "https://github.com/prajjwaldimri" target="_blank").pl-2
                    v-icon mdi-github-face
              .creator-item
                span Subarna Dhar
                v-row.creator-icon
                  a(href = "https://www.linkedin.com/in/subarnadhar/" target="_blank")
                    v-icon mdi-linkedin-box
                  a(href = "https://t.me/subarnadhar" target="_blank").pl-2
                    v-icon mdi-telegram
                  a(href = "https://github.com/subarnadhar" target="_blank").pl-2
                    v-icon mdi-github-face
              .creator-item
                span RV Kaundinya
                v-row.creator-icon
                  a(href = "https://www.linkedin.com/in/rv-kaundinya-4ba503110/" target="_blank")
                    v-icon mdi-linkedin-box
                  a(href = "https://t.me/kaundinya77" target="_blank").pl-2
                    v-icon mdi-telegram
                  a(href = "https://github.com/kaundinya77" target="_blank").pl-2
                    v-icon mdi-github-face
              .creator-item
                span Deep Patel
                v-row.creator-icon
                  a(href = "https://www.instagram.com/deep2.0_" target="_blank")
                    v-icon mdi-instagram
                  a(href = "https://t.me/deep2_0" target="_blank").pl-2
                    v-icon mdi-telegram
                  a(href = "https://github.com/Deep-patell" target="_blank").pl-2
                    v-icon mdi-github-face
            .contactus
              h5 Rajbhasha Prakoshtha
              h5  National Institute of Technology Goa
              h5 Farmagudi, Ponda, Goa 403401
            .contactus-icon
              a(href = "mailto:xyz@gmail.com" target="_blank")
                v-icon mdi-email
              a(href = "https://www.facebook.com/nitgoa/" target="_blank")
                v-icon mdi-facebook-box
              a(href = "https://twitter.com/NITGoa_Official" target="_blank")
                v-icon mdi-twitter

      ///////////////////////////////////////////////////////////////////////////////////////////////


    v-btn(fab bottom right fixed @click="sheet=true").d-lg-none
      v-icon(color="#feee77") mdi-menu
    v-bottom-sheet(v-model="sheet").d-lg-none
      v-list
        v-subheader Navigation
        v-list-item(v-for="tile in tiles" :key="tile.title" @click="sheet=false" :href="tile.href")
          v-list-item-content
            v-list-item-title {{tile.title}}

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
    opacity: 100%;
    // transform: translateY(-80%) translateX(-1rem);
    visibility: visible;
  }
  visibility: hidden;
  opacity: 0;
  height: 200%;
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
  span {
    justify-items: space-around;
  }
}

.creators {
  display: flex;
  width: 60%;
  justify-content: space-around;
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
  align-items: center;
}
.contactus-icon {
  display: flex;
  flex-flow: column;
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
      tiles: [
        {
          title: "Home",
          href: "/"
        },
        {
          title: "About",
          href: "/"
        },
        {
          title: "About",
          href: "/"
        },
        {
          title: "About",
          href: "/"
        }
      ]
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
  }
};
</script>
