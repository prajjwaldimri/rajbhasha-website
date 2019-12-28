<template lang="pug">
  v-toolbar(:flat="isFlat" color="transparent")
    v-toolbar-title
      a.logo(href="http://www.nitgoa.ac.in/")
        v-img(src="@/assets/nitlogo.png" height="24" width="24" )
        span राष्ट्रीय प्रौद्योगिकी संस्थान गोवा
    v-toolbar-items
      v-btn(text) {{pageName}}
</template>

<script>
export default {
  props: {
    isFlat: Boolean,
    pageName: String
  }
};
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-items: flex-;
  span {
    padding-left: 0.5rem;
    color: white;
  }
  &:link {
    text-decoration: none;
  }
}
</style>
