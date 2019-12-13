<template>
  <v-toolbar floating bottom absolute dark dense class="blue-grey darken-4">
    <v-toolbar-items class="toolbar-items">
      <v-btn text class=".subtitle-1">About</v-btn>
      <v-btn text class=".subtitle-1">Work</v-btn>
      <v-btn text class=".subtitle-1">News</v-btn>
      <v-btn text class=".subtitle-1">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style lang="scss">
.v-toolbar__content {
  width: 100%;
}

.toolbar-items {
  width: 100%;
  justify-content: space-around;
}
</style>
