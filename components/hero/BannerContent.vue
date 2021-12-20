<template>
  <div id="hero-content" class="">
    <div class="">
      <img
        alt=""
        class="bg-mask"
        src="https://res.cloudinary.com/mill-birdy/image/upload/c_scale,w_3840/v1638512389/Abode-Web/san-francisco-downtown-skyline_o1mzfa.jpg"
      />
    </div>
    <div class="gradient"></div>
    <div class="heading">
      <p class="heading-text">Abode San Francisco Real Estate</p>
      <p class="chaser-text">Competence, Exclusivity and Passion</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerContent',
}
</script>

<style scoped>
.hero-hd {
  position: relative;
  top: 0;
  left: 0;
}
.bg-mask {
  width: 100vw;
  height: 1080px;
  position: relative;
}
.gradient {
  width: 100vw;
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
  width: calc(100% - 827px);
  padding: 0 0 254px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 419px;
  top: 190px;
}
.heading-text {
  color: var(--primary-default);
  align-self: stretch;
  text-align: center;
  margin-bottom: 17rem;
  text-shadow: 0 0 32px var(--transparent-black);
  font-family: var(--acme-gothic-96-regular-family);
  font-size: var(--acme-gothic-96-regular-size);
  font-weight: var(--acme-gothic-96-regular-weight);
  line-height: var(--acme-gothic-96-regular-line-height);
}
.chaser-text {
  color: var(--white);
  font-family: var(--acme-gothic-36-semi-bold-family);
  font-size: var(--acme-gothic-36-semi-bold-size);
  font-weight: var(--acme-gothic-36-semi-bold-weight);
  line-height: var(--acme-gothic-36-semi-bold-line-height);
  align-self: stretch;
  text-align: center;
  letter-spacing: 4px;
}
</style>
