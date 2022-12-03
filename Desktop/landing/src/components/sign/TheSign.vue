<template>
  <div class="sign">
    <div class="container">
      <div class="sign__container">
        <div class="sign__item">
          <div class="sign__in">
              <h3 class="sign__title">Lorem, ipsum.</h3>
              <a href="#" class="sign__link">Подробнее
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDQ5OTggNy4zNjAwN0wyLjM5Mzk4IDEzLjAxODFMMC45Nzk5OCAxMS42MDMxTDYuNjM2OTggNS45NDcwN0wxLjY4Njk4IDAuOTk3MDdIMTNWMTIuMzEwMUw4LjA0OTk4IDcuMzYwMDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="" class="sign__icon">
              </a>
          </div>
        </div>
        <div class="sign__item">
          <div class="sign__in">
            <h3 class="sign__title">Lorem, ipsum.</h3>
              <a href="#" class="sign__link">Подробнее
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDQ5OTggNy4zNjAwN0wyLjM5Mzk4IDEzLjAxODFMMC45Nzk5OCAxMS42MDMxTDYuNjM2OTggNS45NDcwN0wxLjY4Njk4IDAuOTk3MDdIMTNWMTIuMzEwMUw4LjA0OTk4IDcuMzYwMDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="" class="sign__icon">
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .sign {
    padding: 53px 0 50px;

    &__container {
      display: flex;
      margin: 0 -10px;
      justify-content: center;
    }

    &__item {
      width: 100%;
      max-width: 310px;
      max-height: 160px;
      height: 100%;
      width: 33.33%;
      padding: 0 10px;
    }

    &__in {
      padding: 30px 35px;
      background: #2db37b 100% no-repeat;
      -webkit-box-shadow: 0 10px 30px -10px rgba(10,24,51,.1);
      box-shadow: 0 10px 30px -10px rgba(10,24,51,.1);
    }

    &__title {
      color: #fff;
      margin-bottom: 25px;
    }

    &__link {
      max-width: 221px;
      padding: 15px 20px 15px 15px;
      background: #1d9d68;
      display: -moz-box;
      display: flex;
      -moz-box-pack: justify;
      justify-content: space-between;
      color: #fff;
      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      transition: all .3s ease;
      cursor: pointer;
    }
  }
</style>
