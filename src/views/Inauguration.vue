<template lang="pug">
  .inauguration
    video(autoplay muted loop)#full-video
      source(src="@/assets/Lights.mp4")

    .content
      span.display-1 We 
      span.display-1.pb-6 welcome
      span.display-2 Prof. Gopal Mugeraya
      span.display-2.pb-6 Director, NIT Goa
      span.display-1 for the Inauguration 
      span.display-1 of
      span.display-2.pt-4.mb-5 Rajbhasha Prakosth

      v-btn(color="#feee77" light x-large ripple to="/").mt-5.launch-btn Launch!🚀
</template>

<script>
export default {};
</script>

<style lang="scss">
//TODO:  Uncomment this

::-webkit-scrollbar {
  width: 0px; /* remove scrollbar space */
  background: transparent; /* optional: just make scrollbar invisible */
}

@-moz-document url-prefix() {
  html,
  body {
    overflow: hidden !important;
  }
}

.inauguration {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */

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

  span.display-1 {
    font-family: "Poppins" !important;
    color: gray;
  }
  span.display-2 {
    font-family: "Poppins" !important;
    color: lightgray;
  }

  .launch-btn {
    padding: 2rem 4rem !important;
    font-size: 1.3rem !important;
    font-weight: 600 !important;
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
