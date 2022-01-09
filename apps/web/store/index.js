import { groq } from '@nuxtjs/sanity'

export const state = () => ({
  nav: [],
})

export const mutations = {
  initialize(state, payload) {
    payload.forEach((route) => {
      state.nav.push(route)
    })
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const navPages = groq`*[_type == "page"]{
      // ...,
      _id,
      title,
      "slug": slug.current
    }`
    const nav = await $sanity.fetch(navPages)

    commit('initialize', nav)
    // if (req.session.user) {
    //   commit('user', req.session.user)
    // }
  },
}
