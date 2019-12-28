<template lang="pug">
  v-toolbar(bottom).floatingNav
    v-toolbar-items.floatingNavItems
      v-btn(text).nav-1.textDecorations  हमारे बारे में
      v-btn(text).nav-2.textDecorations कार्यकलाप
      v-btn(text).nav-3.textDecorations संसाधन
      v-btn(text).textDecorations आवश्यक लिंक्स
      v-btn(text).nav-5.textDecorations संपर्क करे

    ///////////////////////////////////////////////////////////////////////////////////////////////

    v-toolbar-items.expanded-menu
      .expanded-menu-items
        .members.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations सदस्य
        .sandesh.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations संदेश
        .rajsabha-sankalp.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations राजभाषा संकल्प
        .vichar.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations अभिभाषण /विचार

    ///////////////////////////////////////////////////////////////////////////////////////////////

    v-toolbar-items.expanded-menu2
      .expanded-menu-items2
        .hindi-karyakalap.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations हिंदी कार्यशाला
        .hindi-karyalaya-adesh.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations हिंदी कार्यालय आदेश
        .hindi-divas-karyakram.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations हिंदी दिवस कार्यक्रम

    ///////////////////////////////////////////////////////////////////////////////////////////////

    v-toolbar-items.expanded-menu3
      .expanded-menu-items3
        .hindi-leyka.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations हिंदी लेखा
        .hindi-shabdavali.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations हिंदी  शब्दावली
        .varshik-patrika.floatingNavFlex
          v-img(src="@/assets/gandhi.jpg" height="70" width="140")
          v-btn(text).textDecorations वार्षिक पत्रिका


    ///////////////////////////////////////////////////////////////////////////////////////////////

    v-toolbar-items.expanded-menu5
      .expanded-menu-items5
        .span-items.floatingNavFlex.textDecorations
          span notEmailAddress@gmail.com

          span dontKnowEmailAddress@gmail.com

    ///////////////////////////////////////////////////////////////////////////////////////////////



</template>

<style lang="scss">
.textDecorations {
  letter-spacing: initial !important;
  font-size: 18px !important;
  font-weight: 500 !important;
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
</style>

<script>
export default {
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

    menu.addEventListener("mouseleave", activeRemover);

    ///////////////////////////////////////////////////////////////////////////////////////////////

    floatingNavItem2.addEventListener("mouseover", () => {
      menu2.classList.add("active");
    });

    menu2.addEventListener("mouseleave", activeRemover);

    ///////////////////////////////////////////////////////////////////////////////////////////////

    floatingNavItem3.addEventListener("mouseover", () => {
      menu3.classList.add("active");
    });

    menu3.addEventListener("mouseleave", activeRemover);

    ///////////////////////////////////////////////////////////////////////////////////////////////

    floatingNavItem5.addEventListener("mouseover", () => {
      menu5.classList.add("active");
    });

    menu5.addEventListener("mouseleave", activeRemover);

    ///////////////////////////////////////////////////////////////////////////////////////////////
  }
};
</script>
