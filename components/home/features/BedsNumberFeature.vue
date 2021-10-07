<template>
  <div class="beds-number-feature">
    <p class="beds-number">1</p>
    <p class="beds-label">Beds</p>
  </div>
</template>

<script>
export default {
  name: "BedsNumberFeature"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.beds-number-feature {
  background-color: $lavender-blush;
  padding: 45px 54px 17px 51px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.beds-number {
  width: 49.09%;
  height: 34.78%;
  color: $secondary-darkmode;
  text-align: center;
  margin-bottom: 28px;
  margin-left: 14px;
  letter-spacing: 0.75px;
  @include hanuman-48-bold;
}
.beds-label {
  height: 34.78%;
  color: $black;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0.75px;
  @include hanuman-24-bold-line32;
}
</style>