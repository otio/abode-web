<template>
  <div class="hero-hd">
 <img
      alt=""
      class="bg-mask"
      src="~/assets/image/san-francisco-downtown-skyline.jpg"
    />
  <div class="gradient"></div>
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

<style  scoped>

.hero-hd {
  position: relative;
}
.bg-mask {
  width: 1920px;
  height: 1080px;
  position: relative;
}
.gradient {
  width: 1920px;
  height: 1080px;
  background: linear-gradient(
    180deg,
    var(--white) 0%,
    var(--transparent-white) 73%
  );
  position: absolute;
  right: -1px;
  top: 0;
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
  color: var(--fire-brick);
  align-self: stretch;
  text-align: center;
  text-shadow: 0 0 32px var(--transparent-black);
  font-family: var(--acme-gothic-96-regular-family);
  font-size: var(--acme-gothic-96-regular-size);
  font-weight: var(--acme-gothic-96-regular-weight);
  line-height: var(--acme-gothic-96-regular-line-height);
}
.chaser-text {
  color: var(--white);
  align-self: stretch;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: -36px;
  letter-spacing: 4px;
  font-family: var(--acme-gothic-36-semi-bold-family);
  font-size: var(--acme-gothic-36-semi-bold-size);
  font-weight: var(--acme-gothic-36-semi-bold-weight);
  line-height: var(--acme-gothic-36-semi-bold-line-height);
}
</style>