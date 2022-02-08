<template>
  <div
    class="flex flex-row items-center justify-evenly absolute w-screen px-16 py-8 z-60"
  >
    <!-- TODO: Cpnditionally position Logo basedon presence of Nav links -->
    <nuxt-link to="/" class=""><Logo /></nuxt-link>
    <div>
      <button v-show="isMobile">
        <img alt="" class="mobile-menu" src="~/static/mobile-menu.svg" />
      </button>
      <nav>
        <ul class="relative flex flex-row items-center">
          <li v-for="link in cleanNavlinks" :key="link._id" class="nav-link">
            <nuxt-link
              class="font-secondary font-light text-3xl"
              :to="link.slug"
              >{{ link.title }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  // props: {
  //   navLinks: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },

  data() {
    return {
      initial: [],
    }
  },
  async fetch() {
    this.initial = await this.$store.state.settings
  },
  computed: {
    cleanNavlinks() {
      return this.initial.nav
    },
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
