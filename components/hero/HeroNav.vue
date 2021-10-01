<template>
  <div class="hero-nav">
    <div class="nav-content">
      <a class="nav-logo"
        ><div class="abode-letters">
          <img
            alt=""
            class="vector"
            src="https://static.overlay-tech.com/assets/3545dd44-c2cb-4a02-a97d-a0b4abafc7c1.svg"
          /><img
            alt=""
            class="bode-small"
            src="https://static.overlay-tech.com/assets/26f1ba93-8ef0-4087-b0f5-d466fdd1ff86.svg"
          />
        </div>
        <img
          alt=""
          class="real-estate"
          src="https://static.overlay-tech.com/assets/5a822619-f4b1-479c-83ce-94dc666d9b0b.svg"
      /></a>
      <div class="nav-menu">
        <a class="sell">Selling</a><a class="sell">Buying</a
        ><a class="sell">Team</a><a class="sell">Resources</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroNav',
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
.hero-nav {
  background-color: $secondary-light;
  padding: 37.96px 138.71px 47.97px 117px;
  display: flex;
  align-items: flex-start;
}
.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.abode-letters {
  margin-bottom: 6px;
  padding: 0 0.01px 0 0;
  display: flex;
  align-items: flex-start;
}
.vector {
  width: 27.34%;
  align-self: stretch;
  margin-right: 6.48px;
  object-fit: cover;
}
.bode-small {
  width: 126.69px;
  height: 42.43px;
  margin-top: 20.74px;
}
.real-estate {
  width: 140.27px;
  height: 15.9px;
}
.nav-menu {
  display: flex;
  align-items: flex-start;
}
.sell {
  color: $black;
  text-align: center;
  letter-spacing: 1px;
  cursor: pointer;
  @include hanuman-24-bold;
  &:not(:last-of-type) {
    margin-right: 107px;
  }
}
</style>
