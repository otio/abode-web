<template>
    <div :class="wrapperPicker">
      <p :class="fontStyle" class="font-light tracking-wider">
        <slot></slot>
      </p>
    </div>
</template>

<script>
    export default {
        props: {
            chaserType: {
                type: String,
                default: 'chase'
            },
        },
        computed: {
            fontStyle() {
                switch (this.chaserType) {
                    case 'float':
                        return ''
                    case 'chase':
                        return 'font-body'
                    case 'chase-light':
                        return ''
                    default:
                        return ''
                } 
            },
            wrapperPicker() {
                switch (this.chaserType) {
                    case 'float':
                        return 'text-2xl mb-12 xs:(mx-2)'
                    case 'chase':
                        return 'text-3xl text-black text-center self-stretch'
                    case 'chase-light':
                        return 'text-3xl text-white text-center self-stretch'
                    default:
                        return ''
                } 
            }
        },
        
    }
</script>

<style scoped>

</style>