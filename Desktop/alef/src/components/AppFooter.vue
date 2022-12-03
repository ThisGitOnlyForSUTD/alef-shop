<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer__links">
        <ul class="footer-customers">
        <h3 class="footer__title">покупателям</h3>
        <li class="footer__item">
          <a href="#" class="footer__link">Каталог</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Акции</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Бренды</a>
        </li>
      </ul>

      <ul class="footer-about">
        <li class="footer__item">
          <h3 class="footer__title">о нас</h3>
        </li>
        <li class="footer__item">
          <a href="" class="footer__link">Бренды</a>
        </li>
        <li class="footer__item">
          <a href="" class="footer__link">Новости</a>
        </li>
        <li class="footer__item">
          <a href="" class="footer__link">Команда</a>
        </li>
      </ul>
        </div>
      <form @submit.prevent action="" class="footer-newsletter" >
          <h3 class="footer__title">Узнайте первыми о новинках и акциях</h3>
        <div class="footer-input">
          <input type="email" placeholder="Адрес электронной почты" v-model="userEmail" class="footer-input__input">
          <img @click="userEmail = ''" src="@/assets/img/del.svg" alt="del" class="footer-input__ico">
        </div>
        <button class="footer-input__btn" @click="userEmail">Подписаться</button>
      </form>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
data () {
  return {
    userEmail: ''
  }
}
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-bottom: 194px;

  &__links {
    display: flex;
    width: 100%;
    max-width: 600px;
    justify-content: space-between;

    @media  (max-width: 810px) {
      justify-content: space-around;
    }
  }

  &-input {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #C4C4C4;
    padding: 12px 16px;
    margin-bottom: 35px;
    width: 100%;

    &__input {
      border: none;
      width: 100%;
    }

    &__ico {
      margin-left: 5px;
      cursor: pointer;

      &:hover {
        transform: rotate(15deg);
      }
    }

    &__btn {
      border: #333333 1px solid;
      width: 150px;
      height: 36px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.04em;
      color: #333333;
      position: absolute;
      right: 0;

      &:hover {
        background: #333333;
        color: #fff;
      }
    }
  }

  &__title {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 16px;
    color: #333333;

    @media  (max-width: 681px) {
      max-width: 262px;
    }
  }

  &__item {
    margin-bottom: 8px;
  }

  &__link {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: #333333;

    &:hover {
      text-decoration: underline;
    }
  }

  &-inner {
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media  (max-width: 681px) {
      display: block;
      padding: 0 20px;
    }
  }

  &-newsletter {
    width: 100%;
    max-width: 452px;
    margin-left: 100px;
    position: relative;

    @media  (max-width: 681px) {
      margin: 0 auto;
      margin-top: 100px;
    }
  }
}
</style>