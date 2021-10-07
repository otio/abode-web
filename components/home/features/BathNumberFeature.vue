<template>
  <div class="bath-number-feature">
    <p class="baths-number">0</p>
    <p class="baths-label">Baths</p>
  </div>
</template>

<script>
export default {
  name: "BathNumberFeature"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.bath-number-feature {
  background-color: $lavender-blush;
  padding: 45px 53px 17px 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.baths-number {
  width: 42.19%;
  height: 34.78%;
  color: $secondary-darkmode;
  text-align: center;
  margin-bottom: 28px;
  margin-left: 19px;
  letter-spacing: 0.75px;
  @include hanuman-48-bold;
}
.baths-label {
  height: 34.78%;
  color: $black;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0.75px;
  @include hanuman-24-bold-line32;
}
</style>