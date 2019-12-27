<template lang="pug">
  v-toolbar(flat color="transparent")
    v-toolbar-title 
      .logo
        v-img(src="@/assets/nitlogo.png" height="24" width="24" )   
        span राष्ट्रीय प्रौद्योगिकी संस्थान गोवा
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo {
  span {
    padding-left: 0.5rem;
  }
  display: flex;
  align-items: center;
}
</style> 