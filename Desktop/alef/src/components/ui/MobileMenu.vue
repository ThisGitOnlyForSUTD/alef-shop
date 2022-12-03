<template>
<div id="sidemenu">
  <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </button>
  <transition name="translateX">
    <nav v-show="navOpen">
      <div class="sidemenu__wrapper">
        <ul class="sidemenu__list">
          <li class="sidemenu__item"><a href="">постельное белье</a></li>
          <li class="sidemenu__item"><a href="">одежда для дома</a></li>
          <li class="sidemenu__item"><a href="">Одежда для улицы</a></li>
          <li class="sidemenu__item"><a href=""></a></li>
          <li class="sidemenu__item"><a href="">ВЫход</a></li>
        </ul>
      </div>
    </nav>
  </transition>
</div>
</template>

<script>
export default {
  data () {
    return {
      navOpen: false, 
    }
  }

}
</script>

<style lang="scss" scoped>
#sidemenu {
	.sidemenu {
		&__btn {
			display: block;
			width: 30px;
			height: 30px;
			border: none;
			position: relative;
			z-index: 100;
			appearance: none;
			cursor: pointer;
			outline: none;

			span {
				display: block;
				width: 20px;
				height: 1px;
				margin: auto;
				background: #333333;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				transition: all .4s ease;

				&.top {
					transform: translateY(-8px);
				}

				&.bottom {
					transform: translateY(8px);
				}
			}
			&.active{
				.top {
					transform: rotate(-45deg);
				}
				.mid{
					transform: rotate(360deg);
					opacity: 0;
				}
				.bottom {
					transform: rotate(45deg);
				}
			}

		}

		&__wrapper {
      padding-top: 30px;
      position: absolute;
      top: 10;
      right: 0;
      background: #FFF;
      width: 100%;
    }

		&__list {
			padding-top: 50px;
      list-style:none;
      padding: 0;
      margin: 0;
      text-align: end;
		}

		&__item {
      margin-right: 15px;
      padding-bottom: 8px;
			a {
        text-decoration: none;
				display: block;
				color: #333333;
				transition: .4s ease;
        text-transform: uppercase;

				&:hover {
          text-decoration: underline
				}
			}
		}
	}
}

.translateX-enter{
	opacity: 0;
}

.translateX-enter-active,.translateX-leave-active{
	transform-origin: top left 0;
	transition:.2s ease;
}

.translateX-leave-to{
	opacity: 0;
}

</style>