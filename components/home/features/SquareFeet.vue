<template>
  <div class="square-feet">
    <p class="space-measurement">409</p>
    <p class="space-label">Square ft</p>
  </div>
</template>

<script>
export default {
  name: "SquareFeet"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.square-feet {
  background-color: $lavender-blush;
  padding: 45px 28px 17px 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.space-measurement {
  width: 80.2%;
  height: 34.78%;
  color: $secondary-darkmode;
  text-align: center;
  margin-bottom: 28px;
  margin-left: 10px;
  letter-spacing: 0.75px;
  @include hanuman-48-bold;
}
.space-label {
  height: 34.78%;
  color: $black;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0.75px;
  @include hanuman-24-bold-line32;
}
</style>