<template>
  <nav class="nav" :class="{ 'is-hidden': !showHeader }">
    <div class="container">
      <div class="nav-inner">
        <img src="@/assets/img/LOGO.svg" alt="logo" class="nav-logo">
        <div class="nav-btns">
          <a href="#" class="nav-btn"><img class="nav-ico" src="@/assets/img/person.svg" alt="person"></a>
          <a href="#" class="nav-btn"><img class="nav-ico" src="@/assets/img/favorite.svg" alt="favorite"></a>
          <a href="#" class="nav-btn">
            <img class="nav-ico" src="@/assets/img/bag.svg" alt="card"> 
            <span class="nav-btn__count"><p>{{ CART_STATE }}</p></span>
          </a>
          <mobile-menu v-if="(window.width < 680)"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import MobileMenu from './ui/MobileMenu.vue'

export default {
  components: { MobileMenu },
  data: () => ({
    showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 40,
    screenWwidth: 0,
    window: {
      width: 0,
      height: 0
    },
    navOpen: true
  }),
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },

  unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },

    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  computed: {
    ...mapGetters([
      'CART_STATE'
    ])
  },
}
</script>

<style lang="scss" scoped>

.is-hidden {
  transform: translateY(-80%);

  &:hover {
    transform: none;
    cursor: pointer;
  }
}
.nav {
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 0 12px 0;
  position: fixed;
  z-index: 1000;
  background: #fff;
  transition: transform 300ms linear;


  &-inner {
    display: flex;
    justify-content: space-between;

    @media (max-width: 680px) {
       padding: 0 10px;
      }
  }

  &-btns {
    display: flex;
    align-items: center;
  }

  &-btn {
    position: relative;
    &:not(:last-child) {
      margin-right: 33px;
    }

    &__count {
      position: absolute;
      top: -5px;
      right: -13px;
      font-size: 14px;
    }
  }
}
</style>
