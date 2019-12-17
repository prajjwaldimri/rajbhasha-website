<template> <div></div></template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home"
};
</script>

<style lang="scss">
// Added this workaround for the Floating Nav from https://github.com/vuetifyjs/vuetify/issues/8067
.v-item-group.v-bottom-navigation .v-btn.v-size--default {
  height: inherit;
}
</style>
