<template>
  <div class="hero-nav">
  <img
    alt=""
    class="nav-logo"
    src="~/static/nav-logo.svg"
  />
  <div class="nav-menu">
    <p class="nav-link">Buying</p>
    <p class="nav-link">Rentals</p>
    <p class="nav-link">Team</p>
    <p class="nav-link">Resources</p>
    <p class="nav-link">Selling</p>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped>
.hero-nav {
  background-color: var(--transparent-white-smoke);
  padding: 32.46px 117px 32.47px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-logo {
  height: 85.07px;
  flex: 1;
  margin-right: 10px;
  object-fit: cover;
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
.sell-house {
  color: var(--black);
  text-align: center;
  position: absolute;
  left: -106.5px;
  top: 0;
  letter-spacing: 1px;
  font-family: var(--hanuman-30-bold-family);
  font-size: var(--hanuman-30-bold-size);
  font-weight: var(--hanuman-30-bold-weight);
  line-height: var(--hanuman-30-bold-line-height);
}

</style>