<script>
export default {
    name: 'Discount',
    data() {
        return {
            discount: [
                {
                    src: "/public/offer-img01.jpg",
                    title: "Fresh gurden tomato combo offer... $37",
                    grosso: "SHOP NOW"
                },
                {
                    src: "/public/offer-img02.jpg",
                    title: "Some ogranic healty fruits combo offer... $49",
                    grosso: "SHOP NOW"
                },
            ]
        }
    }
}
</script>

<template>
    <div id="discount" class=" d-flex flex-column align-items-center flex-xl-row justify-content-xl-between">
        <div class="img mb-4" v-for="el in discount">
            <img :src="el.src" alt="">
            <h2 class="offers fw-semibold">{{ el.title }}</h2>
            <div class="shop"><strong>{{ el.grosso }}</strong></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#discount {
    max-width: 1170px;
    margin: 50px auto;
    color: white;
}

.img {
    position: relative;
}

.offers {
    position: absolute;
    top: 10px;
    left: 10px;
}

.shop {
    position: absolute;
    bottom: 10px;
    left: 10px;
    cursor: pointer;
}

.shop:hover {
    color: #ef9e05;
}
</style>
