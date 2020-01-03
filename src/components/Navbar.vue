<template lang="pug">
  v-toolbar(:flat="isFlat" :color="color").top-toolbar
    .toolbar-content
      v-breadcrumbs(:items="breadcrumbs" divider="/" large).pa-0.d-none.d-lg-block
        template(v-slot:item="props")
          v-breadcrumbs-item(:href="props.item.href" :class="[props.item.disabled && 'disabled', 'not-disabled']")
            | {{ props.item.text.toUpperCase() }}
      v-toolbar-title
        a.logo(href="http://www.nitgoa.ac.in/" target="_blank")
          v-img(src="@/assets/nitlogo.png" height="24" width="24" )
          span राष्ट्रीय प्रौद्योगिकी संस्थान गोवा
</template>

<script>
export default {
  props: {
    isFlat: { type: Boolean, default: false },
    color: { type: String, default: "dark" },
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.top-toolbar {
  position: sticky;
  top: 0;
  z-index: 6;
}

.toolbar-content {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}

.not-disabled {
  a {
    color: #feee77 !important;
    font-size: 1.2rem;
  }
}

.disabled {
  a {
    color: white !important;
    font-size: 1.2rem;
  }
  pointer-events: none;
}

.logo {
  display: flex;
  align-items: center;
  span {
    padding-left: 0.5rem;
    color: white;
  }
  &:link {
    text-decoration: none;
  }
}
</style>
