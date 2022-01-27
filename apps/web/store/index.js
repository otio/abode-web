import { groq } from '@nuxtjs/sanity'

export const state = () => ({
  settings: {},
})

export const mutations = {
  INITIALIZE(state, payload) {
    state.settings = payload
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const navPages = groq`*[_type == "siteSettings"][0]{
      // ...,
      "home": homepage->{
        _id,
        "slug": slug.current
      },
      "nav": navlink[]->{
        // ...,
        title,
        _id,
        "slug": slug.current
      }
    }`
    const nav = await $sanity.fetch(navPages)
    commit('INITIALIZE', nav)
    // if (req.session.user) {
    //   commit('user', req.session.user)
    // }
  },
}
