<template>
     <div class="realscout-search simple"  data-rep="shivanidesai" data-button-color="#ff0000" data-button-font="#ffffff"  data-background-color="#ffefef" style="width: px"></div>
</template>

<script>
    export default {
        mounted(){
            this.realScoutElement()
        },
        methods: {
            realScoutElement() {
                const script = document.createElement("script");
                script.className = "rs-embedded-script";
                script.async = true;
                script.src = "https://em.realscout.com/assets/em/v3/all.js";
                const entry = document.getElementsByTagName("script")[0];
                entry.parentNode.insertBefore(script, entry);
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>