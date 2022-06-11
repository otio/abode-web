<template>
    <div
        :class="[size]"
      class="text-black self-stretch"
    >
      <p class="">
          {{ textContent }}
        <slot></slot>
      </p>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Object,
                default: () => {}
            },
        },
        computed: {
            textContent() {
                return this.options?.textLongContent ?? ''
            },
            size(){
                switch (this.options?.textLongSize) {
                    case 'lg':
                        return 'text-2xl  leading-loose sm:(leading-normal) xs:(leading-normal)'
                    case 'xl':
                        return 'text-4xl'
                
                    default:
                        return 'text-lg'
                }
            }
        },
    }
</script>

<style scoped>

</style>