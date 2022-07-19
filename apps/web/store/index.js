import { groq } from '@nuxtjs/sanity'

export const state = () => ({
  settings: {},
})

export const mutations = {
  INITIALIZE(state, payload) {
    state.settings = payload
  },
  FORM_PAGES(state, payload){
    state.forms = payload
  }
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

    const formPages = groq`*[ _type == 'form' || _type == 'callToAction']{
      _type == 'form' => {
        _id,
        "slug": formSlug.current
      },
      _type == 'callToAction' => {
        _id,
        "slug": ctaSlug.current
      }
    }`
    // debugger
    const nav = await $sanity.fetch(navPages)
    const forms = await $sanity.fetch(formPages)
    commit('INITIALIZE', nav)
    commit('FORM_PAGES', forms)
    // if (req.session.user) {
    //   commit('user', req.session.user)
    // }
  },
}
