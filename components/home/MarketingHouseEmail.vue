<template>
  <div class="marketing-house-email">
    <div class="marketing-section">
      <p class="market-house-cta">
        Marketing that sells your house
      </p>
      <div class="subscription-fields">
        <p class="chaser">
          Receive your free comparative analysis
        </p>
        <div class="subscription-container">
          <input
            class="input"
            placeholder="Email address"
          /><button class="submit">
            <p class="label">Subscribe</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketingHouseEmail"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.marketing-house-email {
  background-size: 100% 100%;
  background-position: center;
  background-image: url("https://via.placeholder.com/1917x525");
  padding: 89px 414.35px 88px 404.37px;
  display: flex;
  align-items: center;
}
.marketing-section {
  width: calc(100% - 175.72px);
  background: linear-gradient(
    107deg,
    rgba(255, 255, 255, 0.8) 1%,
    rgba(250, 243, 243, 0.8) 100%
  );
  border-radius: 3px;
  padding: 65px 82.87px 70px 92.85px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  backdrop-filter: blur(100px);
}
.market-house-cta {
  color: $secondary-darkmode;
  flex: 1;
  align-self: stretch;
  text-align: center;
  margin-bottom: 21px;
  letter-spacing: 1px;
  @include hanuman-64-regular;
}
.subscription-fields {
  width: 50.54%;
  height: 48.83%;
  margin-left: 223.66px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.chaser {
  color: $black-primary;
  align-self: stretch;
  text-align: right;
  margin-bottom: 24px;
  @include inter-24-bold;
}
.subscription-container {
  display: flex;
  align-items: flex-start;
  align-self: stretch;
}
.input {
  flex: 1;
  background-color: $secondary-light;
  margin-right: 8px;
  border-radius: 3px;
  padding: 14px 22px;
  border: 2px solid $grey-secondary;
  color: $grey-secondary;
  @include inter-16-regular;
}
.submit {
  background-color: $secondary-darkmode;
  border-radius: 3px;
  padding: 16px 32px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}
.label {
  color: $grayscale-off-white;
  @include inter-16-semibold;
}
</style>