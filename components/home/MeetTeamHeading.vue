<template>
  <div class="meet-team-heading">
    <p class="intro-words">Meet the</p>
    <div class="logo-text-combo">
      <img
        alt=""
        class="abode-minimal-logo"
        src="https://static.overlay-tech.com/assets/bb342edf-23f2-4a90-8eaa-456541aea6cb.svg"
      />
      <p class="section-heading">bode Team</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetTeamHeading"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.meet-team-heading {
  padding: 0 601.7px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.intro-words {
  height: 88.24%;
  width: 38.32%;
  color: $black-1;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 40px;
  letter-spacing: 0.75px;
  @include hanuman-60-regular;
}
.logo-text-combo {
  width: 402px;
  position: relative;
}
.abode-minimal-logo {
  width: 22%;
  height: 100%;
}
.section-heading {
  width: 323px;
  color: $black-1;
  text-align: center;
  position: absolute;
  left: 88.46px;
  top: 51.5px;
  letter-spacing: 0.75px;
  @include hanuman-60-regular;
}
</style>