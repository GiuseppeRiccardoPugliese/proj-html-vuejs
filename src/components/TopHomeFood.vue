<script>


export default {
    name: 'TopHomeFood',

}
</script>

<template>
    <div class="container text-center">
        <div class="title d-flex flex-column justify-content-center">
            <div class="orange"><strong>Running week top selling</strong></div>
            <h2><strong>TOP</strong>
                <div class="orange d-inline"><strong>TRENDING</strong></div><strong>ORGANIC FOOD</strong>
            </h2>

        </div>
        <div id="row" class="d-sm-flex flex-wrap justify-content-sm-between">
            <div class="card mb-4 pb-5">
                <img src="../assets/s5.jpg" alt="">
                <h4 class="relative"><strong>Fress Apple</strong>
                    <div class="icons">
                        <i class=" me-3 fa-solid fa-heart"></i>
                        <i class=" me-3 fa-solid fa-cart-shopping"></i>
                        <i class=" me-3 fa-solid fa-eye"></i>

                    </div>
                </h4>
                <div>$18</div>
            </div>
            <div class="card mb-4 pb-5">
                <img src="../assets/s2.jpg" alt="">
                <h4 class="relative"><strong>Fress Apple</strong>
                    <div class="icons">
                        <i class=" me-3 fa-solid fa-heart"></i>
                        <i class=" me-3 fa-solid fa-cart-shopping"></i>
                        <i class=" me-3 fa-solid fa-eye"></i>

                    </div>
                </h4>
                <div><s>$18 </s>$17</div>

            </div>
            <div class="card mb-4 pb-5">
                <img src="../assets/s8.jpg" alt="">
                <h4 class="relative"><strong>Fress Apple</strong>
                    <div class="icons">
                        <i class=" me-3 fa-solid fa-heart"></i>
                        <i class=" me-3 fa-solid fa-cart-shopping"></i>
                        <i class=" me-3 fa-solid fa-eye"></i>

                    </div>
                </h4>
                <div>$15</div>

            </div>
            <div class="card mb-4 pb-5">
                <img src="../assets/s1.jpg" alt="">
                <h4 class="relative"><strong>Fress Apple</strong>
                    <div class="icons">
                        <i class=" me-3 fa-solid fa-heart"></i>
                        <i class=" me-3 fa-solid fa-cart-shopping"></i>
                        <i class=" me-3 fa-solid fa-eye"></i>

                    </div>
                </h4>
                <div><s>$20 </s>$15</div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.title {
    background-image: url(../assets/title-shap.png);
    background-repeat: no-repeat;
    background-position: center;
    height: 200px;
}

.relative {
    position: relative;
}

.icons {
    display: none;
    cursor: pointer;
}

.fa-solid:hover {
    background-color: #ef9e05;
    color: white;
}

.card {
    transition: all 2s;
}

.card:hover .icons {
    display: flex;
}


.icons {
    position: absolute;
    top: -34px;
    left: calc(50% - 65px);
    width: 130px;
    font-size: 15px;

}

.orange {
    color: #ef9e05;
}

.fa-solid {
    padding: 7px;
    border-radius: 25px;
    border: 1px solid rgb(205, 201, 201);
}
</style>
