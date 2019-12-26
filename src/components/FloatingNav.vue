<template lang="pug">
  v-toolbar(absolute bottom).floatingNav
    v-toolbar-items.floatingNavItems
      v-btn(text).nav-1 Hamare Baare main
      v-btn(text) Karyakalap
      v-btn(text) Sansaadhan
      v-btn(text) Avashyak Links
      v-btn(text) Sampark Karein

    .expanded-menu
</template>

<style lang="scss">
.floatingNav {
  bottom: 1rem !important;
  left: 2rem;
  right: 2rem;
}

.floatingNavItems {
  width: 100%;
  justify-content: space-around;
}

.expanded-menu {
  &.active {
    opacity: 100%;
  }
  opacity: 0;
  height: 200%;
  width: 100%;
  position: absolute;
  background: #424242;
  transform: translateY(-80%) translateX(-1rem);
  transition: all 300ms;
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
