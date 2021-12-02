<template>
  <div class="hero-hd">
    <img
      alt=""
      class="bg-mask"
      src="~/assets/image/san-francisco-downtown-skyline.jpg"
    />
    <div class="heading">
      <p class="heading-text">
        Abode San Francisco Real Estate
      </p>
      <p class="chaser-text">
        Competence, Exclusivity and Passion
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroHd"
};
</script>

<style lang="scss" scoped>
.hero-hd {
  background: linear-gradient(
    180deg,
    $white 0%,
    $transparent-white 73%
  );
}
.bg-mask {
  width: 1920px;
  height: 1080px;
  position: relative;
}
.heading {
  width: calc(100% - 838px);
  padding: 0 0 254px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 419px;
  top: 190px;
}
.heading-text {
  color: $fire-brick;
  align-self: stretch;
  text-align: center;
  text-shadow: 0 0 32px $transparent-black;
  @include acme-gothic-96-regular;
}
.chaser-text {
  color: $white;
  align-self: stretch;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: -36px;
  letter-spacing: 4px;
  @include acme-gothic-51-semi-bold;
}
</style>