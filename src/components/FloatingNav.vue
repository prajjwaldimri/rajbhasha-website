<template lang="pug">
  v-toolbar(absolute bottom).floatingNav
    v-toolbar-items.floatingNavItems
      v-btn(text) Hamare Baare main
      v-btn(text) Karyakalap
      v-btn(text) Sansaadhan
      v-btn(text) Avashyak Links
      v-btn(text) Sampark Karein
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
</style>
