<template>
  <div>
    <TheHeader/>
    <TheIntro/>
    <TheSign/>
    <TheWorth/>
    <TheGallery/>
  </div>
</template>

<script>
import TheHeader from './components/navigation/TheHeader.vue'
import TheIntro from './components/intro/TheIntro.vue'
import TheSign from './components/sign/TheSign.vue'
import TheWorth from './components/worth/TheWorth.vue'
import TheGallery from './components/gallery/TheGallery.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheIntro,
    TheSign,
    TheWorth,
    TheGallery
  }
}
</script>

<style lang="scss">

</style>
