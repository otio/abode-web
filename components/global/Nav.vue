<template>
  <div
    class="
      flex flex-row
      items-center
      justify-evenly
      absolute
      w-screen
      px-16
      py-8
      z-60
    "
  >
    <Logo />
    <div>
      <button v-show="isMobile">
        <img alt="" class="mobile-menu" src="~/static/mobile-menu.svg" />
      </button>
      <nav>
        <ul class="relative flex flex-row items-center">
          <li v-for="(link, index) in navlinks" :key="index" class="nav-link">
            <nuxt-link class="" :to="link.slug">{{ link.label }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navlinks: [
        { label: 'Selling', slug: 'selling' },
        { label: 'Buying', slug: 'buying' },
        { label: 'Rentals', slug: 'rentals' },
        { label: 'Team', slug: 'team' },
        { label: 'Resources', slug: 'resources' },
      ],
    }
  },
  computed: {
    innerWidth() {
      if (process.client) {
        const width = window.innerWidth
        return width
      } else {
        return null
      }
    },
    isMobile() {
      return this.innerWidth <= 1024
    },
    desktopMenu() {
      return {
        'flex-row': true,
        'justify-end': true,
        'items-center': true,
      }
    },
    mobileMenu() {
      return {
        'flex-col': true,
        'justify-start': true,
        'items-center': true,
      }
    },
  },
}
</script>

<style scoped>
.hero-nav {
  background-color: var(--transparent-white-smoke);
  /* display: flex; */
  /* position: relative; */
  /* flex-direction: row; */
  z-index: 100;
  /* align-items: center; */
}
/*
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  position: relative;
} 
*/
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
