<template>
  <div class="house-style-feature">
    <p class="housing-style-type">
      Condo/<br />
      Townhouse
    </p>
  </div>
</template>

<script>
export default {
  name: "HouseStyleFeature"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.house-style-feature {
  background-color: $lavender-blush;
  padding: 45px 17px 45px 15px;
  display: flex;
  align-items: center;
}
.housing-style-type {
  color: $black;
  flex: 1;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0.75px;
  @include hanuman-24-bold-line32;
}
</style>