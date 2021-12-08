<template>
  <div class="flex flex-col items-center">
    <div class="row">
      <div class="ev-logos">
        <img
          alt=""
          class="logo-james-1"
          src="https://static.overlay-tech.com/assets/09c36b6e-636b-496c-8e43-f59207a8347b.png"
        /><img
          alt=""
          class="logo-james-1"
          src="https://static.overlay-tech.com/assets/d4e2244b-624a-4908-afc0-ea1b33fb8fb6.png"
        />
      </div>
      <div class="cta">
        <p class="form-cta">
          Subscribe to receive your market report
        </p>
        <div class="subscription-container">
          <input
            class="input"
            placeholder="Email address"
          /><button class="button">
            <p class="label">Subscribe</p>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <Logo />
      <div class="contact-info">
       
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.row {
    @apply flex flex-row content-evenly;
}
.ev-logos {
  @apply flex items-start; 
}
.logo-james-1 {
  flex: 1;
  align-self: stretch;
  object-fit: cover;
}
.logo-james-1:not(:last-of-type) {
  margin-right: 204px;
}
.cta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 467px;
}
.form-cta {
  color: var(--black-primary);
  align-self: stretch;
  text-align: right;
  margin-bottom: 24px;
  font-family: var(--inter-24-bold-family);
  font-size: var(--inter-24-bold-size);
  font-weight: var(--inter-24-bold-weight);
  line-height: var(--inter-24-bold-line-height);
}
.bottom-row {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
}
.input {
  width: 268px;
  height: 19px;
  background-color: var(--white);
  margin-right: 8px;
  border-radius: 3px;
  padding: 14px 19px 14px 22px;
  border: 2px solid var(--grey-secondary);
  color: var(--grey-secondary);
  font-family: var(--inter-16-regular-family);
  font-size: var(--inter-16-regular-size);
  font-weight: var(--inter-16-regular-weight);
  line-height: var(--inter-16-regular-line-height);
}
.button {
  background-color: var(--primary-default);
  border-radius: 3px;
  padding: 16px 34px 16px 33px;
  display: flex;
  align-items: center;
  flex: 1;
  height: 19px;
  cursor: pointer;
}
.label {
  color: var(--grayscale-off-white);
  font-family: var(--inter-16-semibold-family);
  font-size: var(--inter-16-semibold-size);
  font-weight: var(--inter-16-semibold-weight);
  line-height: var(--inter-16-semibold-line-height);
}
.abode-logo {
  padding: 0 0 0.01px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
}
.abode-letters {
  margin-bottom: 7px;
  padding: 0 133.18px 0 0;
  position: relative;
}
.vector {
  width: 100%;
  height: 100%;
}
.bode-small {
  width: 126.69px;
  height: 50.42px;
  position: absolute;
  right: 0.01px;
  bottom: -0.01px;
}
.real-estate {
  width: 140.27px;
  height: 18.89px;
}
.contact-info {
  flex: 1;
  position: relative;
}
</style>