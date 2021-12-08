<template>
    <div class="logo">
      <div class="abode-letters">
        <img
          alt=""
          class="vector"
          src="https://static.overlay-tech.com/assets/5638ad55-010d-48bf-bb38-e68acd32c489.svg"
        /><img
          alt=""
          class="bode-small"
          src="https://static.overlay-tech.com/assets/3cb49eb1-1953-4bde-8f02-12649c179a3a.svg"
        />
      </div>
      <img
        alt=""
        class="real-estate"
        src="https://static.overlay-tech.com/assets/a6fc117c-537d-4f41-9461-f07e987f3248.svg"
      />
    </div>
</template>

<script>
    export default {
        name: 'Logo'
    }
</script>

<style scoped>
.logo {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
}
.abode-letters {
  margin-bottom: 6px;
  padding: 0 0.01px 0 0;
  display: flex;
  align-items: flex-start;
}
.vector {
  width: 27.34%;
  align-self: stretch;
  margin-right: 6.48px;
  object-fit: cover;
}
.bode-small {
  width: 126.69px;
  height: 42.43px;
  margin-top: 20.74px;
}
.real-estate {
  width: 140.27px;
  height: 15.9px;
}
</style>