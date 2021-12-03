<template>
  <div class="hero-nav">
    <div class="nav-logo">
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
   <div>
      <button v-show="isMobile">
        <img
          alt=""
          class="mobile-menu"
          src="https://static.overlay-tech.com/assets/bb1ee59c-bf36-4e94-af1e-4922e06df1d3.svg"
      />
      </button>
      <nav class="nav-menu">
        <p class="nav-link">Buying</p>
        <p class="nav-link">Rentals</p>
        <p class="nav-link">Team</p>
        <p class="nav-link">Resources</p>
        <p class="nav-link">Selling</p>
      </nav>
   </div>
</div>
</template>

<script>
export default {
  name: "HeroNav",
  // data() {
  //   // return {
  //   //   isMobile: this.mobileCheck
  //   // }
  // },
  computed: {
    innerWidth() {
      if(process.client) {
        const width = window.innerWidth
        return width
      } else {
        return null
      }
    },
    isMobile(){
      return this.innerWidth <= 1024
    }
  }
}
</script>

<style scoped>

.hero-nav {
  background-color: var(--transparent-white-smoke);
  width: 100%;
  padding: 32.46px 117px 32.47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.nav-logo {
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
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  position: relative;
}
.nav-link {
  color: var(--black);
  text-align: center;
  letter-spacing: 1px;
  font-family: var(--hanuman-30-bold-family);
  font-size: var(--hanuman-30-bold-size);
  font-weight: var(--hanuman-30-bold-weight);
  line-height: var(--hanuman-30-bold-line-height);
}
.nav-link:not(:last-of-type) {
  margin-right: 107px;
}
</style>