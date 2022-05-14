import imageUrlBuilder from '@sanity/image-url'
import { useSanity } from '@nuxtjs/sanity'
export default ((context, inject) => {
  const sanity = useSanity()
  const builder = imageUrlBuilder(sanity.config)

  function urlFor(source) {
    return builder.image(source)
  }

  return {
    provide: { urlFor }
  }
})