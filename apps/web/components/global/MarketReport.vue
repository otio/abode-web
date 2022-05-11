<template>
    <a>
        <div>
            <h3>YEAR</h3>
            <p>San Francisco</p>
            <p>Month MARKET REPORT</p>
        </div>
        <div>
            <img :src="placeholderImg" alt="">
        </div>
    </a>
</template>

<script>
    export default {
        name: 'MarketReport',
        data() {
            return {
                placeholderImg: 'https://via.placeholder.com/700x450?text=Market+Report+Placeholder+Img'
            }
        },
    }
</script>

<style scoped>

</style>