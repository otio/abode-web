<template>
    <article>
        <div
            id="testimonial-text"
            class="w-550px h-550px bg-whitesmoke p-16 xs:(w-360px h-875px)"
              >
                <div class="flex flex-col items-center justify around">
                  <p class="text-3xl text-center leading-normal mb-8">
                    {{ review.testimonial }}
                  </p>
                  <p class="text-4xl text-center font-semibold">
                    {{ review.clientName }}
                  </p>
                </div>
              </div>
              <div id="testimonial-image" class="">
                <div
                  class="relative w-450px md:(hidden) sm:(hidden) xs:(hidden w-0)"
                >
                  <img
                    alt=""
                    class="absolute left-12 top-14"
                    :src="imgUrl"
                  />
                </div>
              </div>
    </article>
</template>

<script>
    export default {
        props: {
            review: {
                type: Object,
                default: () => {}
            },
        },
        computed: {
            imgUrl() {
                return this.review?.testimonialImage?.secure_url 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>