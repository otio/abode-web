<template>
  <div id="marketing-house-email">
    <div id="marketing-section">
      <p id="market-house-cta">Marketing that sells your house</p>
      <div id="subscription-fields">
        <p id="chaser">Receive your free comparative analysis</p>
        <div id="subscription-container">
          <input id="input" placeholder="Email address" /><button id="submit">
            <p id="label">Subscribe</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.marketing-house-email {
  background-size: 100% 100%;
  background-position: center;
  background-image: url('https://static.overlay-tech.com/assets/a8f7a5fc-1e39-4b9f-97bb-d960b6d6bf24.png');
  padding: 89px 415px 88px 405px;
  display: flex;
  align-items: center;
}
.marketing-section {
  background: linear-gradient(
    107deg,
    rgba(255, 255, 255, 0.8) 1%,
    rgba(250, 243, 243, 0.8) 100%
  );
  border-radius: 3px;
  padding: 65px 83px 70px 93px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  backdrop-filter: blur(100px);
}
.market-house-cta {
  color: var(--grayscale-off-black);
  flex: 1;
  align-self: stretch;
  text-align: center;
  margin-bottom: 21px;
  letter-spacing: 1px;
  font-family: var(--acme-gothic-64-regular-family);
  font-size: var(--acme-gothic-64-regular-size);
  font-weight: var(--acme-gothic-64-regular-weight);
  line-height: var(--acme-gothic-64-regular-line-height);
}
.subscription-fields {
  width: 50.54%;
  height: 48.83%;
  margin-left: 224px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.chaser {
  color: var(--black-primary);
  align-self: stretch;
  text-align: right;
  margin-bottom: 24px;
  font-family: var(--inter-24-bold-family);
  font-size: var(--inter-24-bold-size);
  font-weight: var(--inter-24-bold-weight);
  line-height: var(--inter-24-bold-line-height);
}
.subscription-container {
  display: flex;
  align-items: flex-start;
  align-self: stretch;
}
.input {
  flex: 1;
  background-color: var(--white);
  margin-right: 8px;
  border-radius: 3px;
  padding: 14px 22px;
  border: 2px solid var(--grey-secondary);
  color: var(--grey-secondary);
  font-family: var(--inter-16-regular-family);
  font-size: var(--inter-16-regular-size);
  font-weight: var(--inter-16-regular-weight);
  line-height: var(--inter-16-regular-line-height);
}
.submit {
  background-color: var(--primary-default);
  border-radius: 3px;
  padding: 16px 32px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}
.label {
  color: var(--grayscale-off-white);
  font-family: var(--inter-16-semibold-family);
  font-size: var(--inter-16-semibold-size);
  font-weight: var(--inter-16-semibold-weight);
  line-height: var(--inter-16-semibold-line-height);
}
</style>
