<template>
  <div class="content container">
      <div class="content-gallery">
        <img class="content-gallery__selected" :src="require('@/assets/img/'+MainPhoto+'.jpg')" alt="">
        <div class="content-gallery__navbar">
         <img
          class="content-gallery__photo" 
          v-for="item in sliderItems"
          :key="item + item.id"
          @click="MainPhoto = item.name"
          :src="require('@/assets/img/'+item.name+'.jpg')" 
          >
        </div>
      </div>
      <div class="content-description">
        <h2 class="content__title">
          Пижама для девочек
        </h2>
        <span class="content__article">
          Арт. 02765/46
        </span>
        <div class="content-comments">
          <h4 class="content-comments__title">
            Отзывы
          </h4>
          <star-rating
          :rating="4"
          />
          <a href="#" class="content-comments__link">14 отзывов <img src="@/assets/img/arrow.svg" alt="awrrow" class="content-arrow"></a>
        </div>
        <div class="content-price">
          <div class="content-price__price">
            800р
          </div>
          <div class="content-price__price_old">
            1 500р
          </div>
          <a href="#" class="content-arrow__link">
          <img src="@/assets/img/arrow.svg" alt="awrrow" class="content-arrow">
          </a>
        </div>
        <div class="content-sales">
          <button class="content-sales__sale">
            скидка -36%
          </button>
          <button class="content-sales__sale">
            акция -20%
          </button>
        </div>
        <div class="content-select">
          <select class="content-select__select" v-model="selectedSize">
            <option :value="selectedSize" selected>{{selectedSize}}</option>
            <option :value="size.size" v-for="size in sizes" :key="size.size+1">
              {{size.size}}
            </option>
          </select>
          <img src="@/assets/img/arrow.svg" alt="" class="content-select__ico">
        </div>
        <a href="#" class="content-sizeFQA">
          Определить размер
        </a>
        <div class="content-counter">
          <div class="content-counter__count">
            <button class="content-counter__btn" @click="increment">+</button>
            <span class="content-counter__numb">{{ count }}</span>
            <button class="content-counter__btn" @click="decrement">-</button>
          </div>
          <div class="content-btns">
            <button class="content__btn" @click="addToCart">
            Добавить в корзину
          </button>
          <button class="content__btn" @click="addToFavorite">
            <svg :class="[favoriteSelected ? 'fill-favorite': '']" class = "content__btn_ico" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 7.0948C10.6998 1.47892 1.40881 5.90389 5.76037 11.6018C10.1119 17.2996 12.4 19.4908 12.4 19.4908" stroke="#FFFFFF"/>
              <path d="M11.8941 7.0948C13.0944 1.47892 22.7304 5.90389 18.3789 11.6018C14.0273 17.2996 11.7 19.5 11.7 19.5" stroke="#FFFFFF"/>
              <path d="M11.391 6.70752L12.4043 6.70757L12.3834 7.24079H11.391V6.70752Z" fill="#FFFFFF"/>
            </svg>
          </button>
          </div>
        </div>
        <a href="#" class="content-buy">Купить в 1 клик</a>
        <div class="content-links">
        <a href="#" class="content-links__link">
          <img src="@/assets/img/Closes.svg" alt="t-short" class="content-links__ico">
          Описание товара
        </a>
        <a href="#" class="content-links__link">
          <img src="@/assets/img/clock.svg" alt="t-short" class="content-links__ico">
          Доставка и возврат
        </a>
        <a href="#" class="content-links__link">
          <img src="@/assets/img/pay.svg" alt="t-short" class="content-links__ico">
          Способы оплаты
        </a>
      </div>
      </div>
      <!-- <span class="tiket"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ut?</span> -->
  </div>
</template>

<script>
import StarRating from './ui/StarRating.vue'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      selectedSize: 'выберите свой размер',
      favoriteSelected: false,
      size: null,
      MainPhoto: 'slide1',
      count: 1,
      sizes: [{size:'XS'}, {size:'S'}, {size:'M'}, {size:'L'}, {size:'XL'},],
      sliderItems: [
        {id: 1, name: 'slide1',},
        {id: 2, name: 'slide2',},
        {id: 3, name: 'slide3',},
        {id: 4, name: 'slide4',},
        {id: 5, name: 'slide5',}
      ],
    }
  },

  components: {
    StarRating,

  },
  methods: {
    ...mapActions([
      'TOGGLE_CART',
      'TOGGLE_FAVORITE'
    ]),
		decrement () {
			if (this.count) {
				this.count -= 1;
			}
		},
		increment () {
			this.count += 1;
		},
    addToCart () {
         this.TOGGLE_CART()
    },
    addToFavorite () {
      this.favoriteSelected = !this.favoriteSelected
    }
	}
}
</script>

<style lang="scss" scoped>

.fill-favorite {
  fill: #fff;
}
  .tiket {
    position: absolute;
    right: 2%;
    background: #000;
  }
  .content {
    padding-top: 84px;
    display: flex;

    @media (max-width: 940px) {
     display: block;
    }

    &-btns {
      display: flex;
      margin-left: 12px;
      @media (max-width: 480px) {
        margin-left: 0;
        margin-top: 15px;
      }
      
    }

    &-select {
      position: relative;
      border: 1px solid #333333;
      width: 315px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: right;
      cursor: pointer;
      &__select {
        padding-left: 13px;
        -moz-appearance: none;
        -webkit-appearance: none;
        background: none;
        appearance: none;
        width: 100%;
        height: 100%;
        border: none;
        position: absolute;
        z-index: 1;
        font-weight: 400;
        font-size: 14px;
      }
      &__ico {
        padding-top: 15px;
        transform: rotate(90deg)
      }
    }

    &-arrow {
      width: 8px;
      margin-left: 8px;
    }

    &-gallery {
      position: relative;
      width: 686px;
      min-width: 460px;

      @media (max-width: 940px) {
        width: 100%;
      }

      @media (max-width: 480px) {
          width: 100%;
          display: block;
          padding: 0;
          min-width: 0;
        }

      &__selected {
        display: block;
        width: 100%;

        @media (max-width: 480px) {
          display: block;
          min-width: 100%;
        }
      }
      &__navbar {
        position: absolute;
        width: 70px;
        height: 483px;
        z-index: 1;
        top: 26px;
        left: 24px;
      }

      &__photo {
        display: block;
        max-width: 70px;
        max-height: 91px;
        opacity: 0.7;

        @media (max-width: 480px) {
          max-width: 40px;
          max-height: 52px;
        }
        
        &:not(:last-child) {
          margin-bottom: 7px;
        }
      }
    }

    &-description {
      margin-left: 36px;
    }

    &__title {
      margin: 24px 0 8px 0;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #333333;
    }

    &__article {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.04em;
      color: #828282;
    }

    &-comments {
      margin: 18px 0 46px 0;
      display: flex;
      align-items: center;
      max-width: 250px;
      justify-content: space-between;
      flex-wrap: nowrap;

      &__link {
        color: #333333;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    &-price {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &__price {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #333333;
        margin-right: 12px;
      
        &_old {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.04em;
          text-decoration-line: line-through;
          color: #828282;
          margin-right: 12px;
        }
      }
    }

    &-sales {
      display: flex;
      margin-bottom: 30px;

      &__sale {
        border: solid 1px #000;
        padding: 3px 8px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.04em;
        color: #333333;

        &:hover {
          background: #333333;
          color: #fff;
        }

        &:not(:last-child) {
          margin-right: 9px;
        }
      }
    }

    &-sizeFQA {
      display: block;
      margin: 15px 0 40px 0;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.04em;
      text-decoration-line: underline;
      color: #333333;
    }

    &-counter {
      margin-bottom: 12px;
      display: flex;
      align-items: center;

      @media (max-width: 480px) {
        display: block;
      }

      &__count {
        width: 145px;
        height: 44px;
        background: #F2F2F2;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__btn {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.04em;
        color: #333333;
        width: 100%;
        height: 100%;

        &:hover {
          background: #dadada;
        }
      }

      &__numb {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.04em;
        margin: 0 40px;
      }
    }

    &__btn {
        width: 203px;
        height: 44px;
        background: #333333;
        border: 1px solid #333333;
        margin-right: 12px;
        color: #fff;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          min-width: 25px;
          min-height: 25px;

          &:hover {
            fill: #fff;
          }
        }

        &:last-child {
          width: 44px;
          height: 44px;
          padding: 14px;
          color: #fff;
        }
      }

    &-buy {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.04em;
      text-decoration-line: underline;
      color: #333333;
      padding-bottom: 29px;
    }

    &-links {
      padding-top: 24px;
      border-top: 0.5px solid #C4C4C4;
      width: 686px;
      margin-top: 30px;

      &__link {
        display: flex;
        align-items: center;
        align-content: center;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.04em;
        text-decoration-line: underline;
        color: #333333;
        margin-right: 10px;

        &:not(:last-child) {
          margin-bottom: 12px;
        }
      }

      &__ico {
        display: block;
        margin-bottom: 3px;
      }
    }
  }
</style>