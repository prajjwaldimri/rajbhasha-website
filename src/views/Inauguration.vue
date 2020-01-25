<template lang="pug">
  .inauguration
    video(autoplay muted loop)#full-video
      source(src="@/assets/Lights.mp4")

    .content
      span.display-3 We Welcome
      span.display-3 Prof. Gopal Mugeraya
      span.display-3 Director, NIT Goa
      span.display-3 For the Inauguration of
      span.display-3 Rajbhasha Prakosth

      v-btn(color="#feee77" light x-large ripple outlined) Launch!
</template>

<script>
export default {};
</script>

<style lang="scss">
.inauguration {
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";

    /* Any overlay color that you want, here I use black with 25% opacity */
    background-color: rgba(0, 0, 0, 1);
  }

  .content {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem;
    flex-direction: column;
  }

  span.display-3 {
    font-family: "Poppins" !important;
  }
}

#full-video {
  opacity: 0.6;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
