<script>


export default {
    name: 'Discount',

}
</script>

<template>
    <div id="discount" class=" d-flex flex-column align-items-center flex-xl-row justify-content-xl-between">
        <div class="img mb-4">
            <img src="../assets/offer-img01.jpg" alt="">
            <h2 class="offers">Fresh gurden tomato combo offer... $37</h2>
            <div class="shop"><strong>SHOP NOW</strong></div>
        </div>
        <div class="img mb-4">
            <img src="../assets/offer-img02.jpg" alt="">
            <h2 class="offers">Some ogranic healty fruits combo offer... $49</h2>
            <div class="shop"><strong>SHOP NOW</strong></div>
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
