<template lang="pug">
  v-toolbar(bottom).floatingNav
    v-toolbar-items.floatingNavItems
      v-btn(text).nav-1.textDecorations  हमारे बारे मे 
      v-btn(text).textDecorations कार्यकलाप 
      v-btn(text).textDecorations संसाधन 
      v-btn(text).textDecorations आवश्यक लिंक्स 
      v-btn(text).textDecorations संपर्क करे 

    .expanded-menu
</template>

<style lang="scss">
.textDecorations {
  letter-spacing: initial !important;
  font-size: 18px !important;
  font-weight: 500 !important;
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

.expanded-menu {
  z-index: 2;
  &.active {
    z-index: 2;
    opacity: 100%;
    transform: translateY(-80%) translateX(-1rem);
  }
  opacity: 0;
  height: 200%;
  width: 100%;
  position: absolute;
  background: #424242;
  transform: translateY(80%) translateX(-1rem);
  transition: all 400ms;
}
</style>

<script>
export default {
  mounted() {
    const menu = document.getElementsByClassName("expanded-menu")[0];
    const floatingNavItem = document.getElementsByClassName("nav-1")[0];

    floatingNavItem.addEventListener("mouseover", () => {
      menu.classList.add("active");
    });

    menu.addEventListener("mouseout", () => {
      menu.classList.remove("active");
    });
  }
};
</script>
