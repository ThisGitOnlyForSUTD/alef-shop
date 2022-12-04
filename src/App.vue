<template>
  <app-navbar/>
  <app-main/>
  <app-gallery/>
  <app-footer/>
</template>

<script>
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import AppGallery from './components/AppGallery.vue'
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppMain,
    AppGallery,
    AppFooter
  }

}
</script>

<style lang="scss">
</style>
