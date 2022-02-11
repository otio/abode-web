<template>
  <div class="flex flex-col items-center justify-evenly p-16">
    <div class="flex flex-row justify-around w-screen px-16">
      <div id="ev-logos" class="flex flex-row justify-start">
        <div class="object-cover">
          <img alt="" src="~/static/EV-Logo-James.png" />
        </div>
        <div class="object-cover">
          <img alt="" src="~/static/EV-Logo-Shivani.png" />
        </div>
      </div>
      <!-- <CallToAction /> -->
    </div>
    <div class="flex flex-row justify-around w-screen px-16 mt-16">
      <Logo />
      <div id="contact-cards" class="flex flex-row justify-evenly">
        <SocialCard />
        <SocialCard />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.input {
  width: 25rem;
  height: 3rem;
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
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  flex: 1;
  height: 3rem;
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
