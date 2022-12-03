<template>
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsa.</h1>
        <button class="intro__btn">Lorem.</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.intro {
  background-image: url('https://api.yim.uz/uploads/file-1638166072551.jpeg');
  background-size: cover;
  height: 100vh;
  display: flex;
  width: 100%;
  align-items: center;

  &__inner {
    text-align: left;
  }

  &__title {
    margin-bottom: 60px;
    color: #fff;
  }

  &__btn {
    display: inline-block;
    width: 100%;
    max-width: 237px;
    color: #003956;
    background: #fff;
    padding: 20px 10px;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    transition: all .3s ease;
    text-decoration: none;
    border: none;
  }
}

.container {
  margin: 0 auto;
  max-width: 1120px;
}
</style>
