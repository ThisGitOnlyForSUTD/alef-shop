<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <a href="#" class="header__logo-link">
          <img src="" alt="logo" class="header__logo">
        </a>
        <div class="header__inner">
          <ul class="nav header__nav">
            <li class="nav__item"><a href="#" class="nav__link">О нас</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Новости</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Экспресс-курсы</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Вопросы и ответы</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Документы</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Контакты</a></li>
          </ul>
        </div>
        <div class="header__lang">
          ru
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 5;

  &__container {
    padding: 0 15px;
    margin: 0 auto;
    width: 1120px;
    border-bottom: 1px solid rgb(0, 0, 0);
    display: flex;
    align-items: center;
    padding: 30px 0 20px;
  }

  &__logo-link {
    max-width: 65px;
  }

  &__inner {
    -moz-box-flex: 1;
    flex: 1 1;
    width: 100%;
    display: flex;
  }
}

.nav {
  width: 660px;
  justify-content: center;
  display: flex;
  list-style: none;
  align-items: center;

  &__item {
    font-size: 8px;
    list-style: none;
    margin-right: 50px;
  }

  &__link {
    color: #fff;
  }
}
</style>
