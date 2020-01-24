<template lang="pug">
  v-snackbar(v-model="snackbar" top color="#424242" :timeout="10000")
    router-link(to="/workshop" style="color:#feee77;text-decoration= none;").text-yellow {{text}}
    v-btn(icon @click="snackbar=false").text-yellow
      v-icon(color="#feee77") mdi-close
</template>

<script>
export default {
  data() {
    return {
      snackbar: true,
      text:
        "जल्द ही -- अभियांत्रिकी में वैज्ञानिक और तकनीकी शब्दावली के अनुप्रयोग पर दो दिनों की कार्यशाला"
    };
  }
};
</script>
