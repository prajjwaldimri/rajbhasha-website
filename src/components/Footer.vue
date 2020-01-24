<template lang="pug">
  v-footer.d-lg-none
    .footer-contactus
      span.title राजभाषा प्रकोष्ठ
      span.title राष्ट्रीय प्रौद्योगिकी संस्थान गोवा
      span.title फार्मागुडी, पोंडा, गोवा &nbsp;
        span(style="font-family: sans-serif; font-size: 1.1rem;")  - ४०३४०१
    .footer-contactus-icon.pt-2
      a(href = "mailto:xyz@gmail.com" target="_blank").pr-2
        v-icon(size = "1.6rem") mdi-email
      a(href = "https://www.facebook.com/nitgoa/" target="_blank").pr-2
        v-icon(size = "1.6rem") mdi-facebook-box
      a(href = "https://twitter.com/NITGoa_Official" target="_blank")
        v-icon(size = "1.6rem") mdi-twitter
    span.title.footer-title निर्माता: <br/>
      a(href="https://prajjwal.me" target="_blank") प्रज्जवल डिमरी,&nbsp;
      a(href="https://www.linkedin.com/in/subarnadhar/" target="_blank") सुबर्णा धर,&nbsp;
      a(href="https://www.linkedin.com/in/rv-kaundinya-4ba503110/" target="_blank") आर वी कौंडिन्या &nbsp;
        | और &nbsp;
      a(href="https://www.linkedin.com/in/deep-patel-71473519b/" target="_blank") दीप पटेल
</template>

<style lang="scss">
.v-footer {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;
}

span.title.footer-title {
  width: 100%;
  text-align: center;
  font-family: "Poppins", sans-serif !important;
  //letter-spacing: 0.2rem !important;
  font-weight: 300;
  a {
    color: #feee77;
  }
}
.footer-contactus {
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  flex: 1 1 0;
  width: 100%;
  span.title {
    font-family: "Poppins", sans-serif !important;
    font-weight: 300;
  }
}
.footer-contactus-icon {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  padding-bottom: 2rem !important;
}
</style>
