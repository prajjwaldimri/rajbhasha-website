<template lang="pug">
  v-snackbar(v-model="snackbar" top color="#424242" :timeout="10000")
    router-link(to="/yearlyMagazineEntry" style="color:#feee77;text-decoration= none;").text-yellow {{text}}
    v-btn(icon @click="snackbar=false").text-yellow
      v-icon(color="#feee77") mdi-close
</template>

<script>
export default {
  data() {
    return {
      snackbar: true,
      text: 'हिंदी में हमारे संस्थान NIT Goa की पत्रिका "उर्बा" के पहले संस्करण के लिए प्रविष्टियाँ आमंत्रित हैं/',
    };
  },
};
</script>
