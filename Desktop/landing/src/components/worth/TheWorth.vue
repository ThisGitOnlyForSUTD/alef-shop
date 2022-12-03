<template>
  <div class="worth">
    <div class="container">
      <h2 class="worth__title">Ценности</h2>
      <div class="worth__container">
        <div class="worth__item">
          <div class="worth__number">1</div>
          <div class="worth__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus temporibus adipisci, dolor exercitationem autem.</div>
        </div>
        <div class="worth__item">
          <div class="worth__number">1</div>
          <div class="worth__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus temporibus adipisci, dolor exercitationem autem.</div>
        </div>
        <div class="worth__item">
          <div class="worth__number">1</div>
          <div class="worth__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus temporibus adipisci, dolor exercitationem autem.</div>
        </div>
        <div class="worth__item">
          <div class="worth__number">1</div>
          <div class="worth__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus temporibus adipisci, dolor exercitationem autem.</div>
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
.worth{
  width: 100%;
  padding: 100px 0 60px;
  background: -webkit-linear-gradient(322deg,#003956,#003956 71.93%);
  background: -moz-linear-gradient(322deg,#003956 0,#003956 71.93%);
  background: linear-gradient(128deg,#003956,#003956 71.93%);

  &__title {
    color: #fff;
    margin-bottom: 60px;
  }

  &__container, .container {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    -moz-box-pack: justify;
    justify-content: space-between;
    max-width: 1100px;
  }

  &__item {
    width: calc(50% - 25px);
    display: -moz-box;
    display: flex;
    margin-bottom: 42px;
    -moz-box-align: center;
    align-items: center;
  }

  &__number {
    color: #fff;
    margin-right: 20px;
  }

  &__text {
    color: rgba(255,255,255,.7);
    white-space: pre-wrap;
  }
}
</style>
