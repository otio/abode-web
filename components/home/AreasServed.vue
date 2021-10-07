<template>
  <div class="areas-served">
    <img
      alt=""
      class="divider"
      src="https://static.overlay-tech.com/assets/59af87f0-332b-49f9-982e-8eb4927faf1a.png"
    />
    <div class="areas-content">
      <p class="heading">San Francisco Neighborhoods</p>
      <div class="neighborhood-hood-row">
        <div class="neighborhood">
          <img
            alt=""
            class="area-image"
            src="https://static.overlay-tech.com/assets/c2b91a0a-57d8-4920-8321-025111685a2e.png"
          />
          <p class="area-label">Sunset</p>
        </div>
        <div class="neighborhood">
          <img
            alt=""
            class="area-image"
            src="https://static.overlay-tech.com/assets/effef6d8-b4bb-4435-bf01-938a1bf65976.png"
          />
          <p class="area-label">Sunset</p>
        </div>
        <div class="neighborhood">
          <img
            alt=""
            class="area-image"
            src="https://static.overlay-tech.com/assets/451f768e-2d96-4e62-a053-d0e669488519.png"
          />
          <p class="area-label">Sunset</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreasServed"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.areas-served {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.divider {
  width: 56.77%;
  margin-bottom: 99px;
}
.areas-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.heading {
  color: $black-1;
  align-self: stretch;
  text-align: center;
  margin-bottom: 99px;
  letter-spacing: 0.75px;
  @include hanuman-60-regular;
}
.neighborhood-hood-row {
  display: flex;
  align-items: flex-start;
}
.neighborhood {
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-of-type) {
    margin-right: 112px;
  }
}
.area-image {
  width: 477px;
  height: 371px;
  margin-bottom: 34px;
}
.area-label {
  height: 64px;
  width: 187px;
  color: $black-1;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  @include hanuman-55-bold;
}
</style>