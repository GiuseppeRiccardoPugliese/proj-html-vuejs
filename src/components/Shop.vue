<script>
export default {
    name: 'Shop',
    data() {
        return {
            showIcons: true,
        }
    },
    methods: {
        handleHover() {
            this.showIcons = true;
        },
        handleLeave() {
            this.showIcons = false;
        },
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- Text -->
            <div class="col-12 text-center py-3">
                <h5 class="fw-bold ms_orange-text">Trending Online Store</h5>
                <h3 class="fw-bold text-white">GOGRIN ALL <span class="ms_orange-text ms_big-font">ORGANIC</span> FOOD</h3>
            </div>
            <!-- Shop Menu -->
            <div class="col-12 text-center d-flex justify-content-center py-3">
                <ul class="list-unstyled d-flex">
                    <li class="px-2">
                        <a class="text-white text-decoration-none" href="#">All Product</a>
                    </li>
                    <li class="px-2">
                        <a class="text-white text-decoration-none" href="#">Apple</a>
                    </li>
                    <li class="px-2">
                        <a class="text-white text-decoration-none" href="#">Food</a>
                    </li>
                    <li class="px-2">
                        <a class="text-white text-decoration-none" href="#">Orange</a>
                    </li>
                    <li class="px-2">
                        <a class="text-white text-decoration-none" href="#">Vegetable</a>
                    </li>
                </ul>
            </div>
            <!-- Shop Items -->
            <div class="col-12 d-flex justify-content-center"> <!-- First row -->
                <div class="offset-2"></div>
                <div class="col-2 text-center">
                    <div class="img_container" @mouseover="handleHover" @mouseleave="handleLeave">
                        <img src="../assets/s5-150x150.jpg" alt="">
                    </div>
                    <div class="icon_container" v-show="showIcons">
                        <a href="#"><i class="fa-solid fa-heart"></i></a>
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
                    </div>
                    <h6 class="mt-2 text-white">Fress Apple</h6>
                    <span class="ms_orange-text">$18</span>
                </div>
                <div class="col-2 text-center">
                    <img src="../assets/s2-150x150.jpg" alt="">
                    <h6 class="mt-2 text-white">Fress Cobies</h6>
                    <span class="ms_orange-text text-decoration-line-through opacity-50">$18</span>
                    <span class="ms_orange-text ps-1">$17</span>
                </div>
                <div class="col-2 text-center">
                    <img src="../assets/s8-150x150.jpg" alt="">
                    <h6 class="mt-2 text-white">Fresh Waterlemon</h6>
                    <span class="ms_orange-text">$15</span>
                </div>
                <div class="col-2 text-center">
                    <img src="../assets/s1-150x150.jpg" alt="">
                    <h6 class="mt-2 text-white">Organic Juice</h6>
                    <span class="ms_orange-text text-decoration-line-through opacity-50">$20</span>
                    <span class="ms_orange-text ps-1">$15</span>
                </div>
                <div class="offset-2"></div>
            </div>
        </div>
        <div class="w-100 d-flex justify-content-center">
            <div class="my_orange-button d-flex align-items-center justify-content-center p-3 mt-4 mx-2">
                <span><a href="#">ABOUT US</a></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
    width: 100%;
    height: 800px;
    background-image: url(../assets/shop-bg-img.jpg);

    .ms_orange-text {
        color: $orange;
    }

    .ms_big-font {
        font-size: 1.75rem;
    }

    img:hover {
        cursor: pointer;
    }

    .img_container {
        position: relative;
        display: inline-block;
    }

    .icon_container {
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);

        a {
            i {
                color: black;
                background-color: burlywood;
                border-radius: 50%;
                padding: 5px;
                margin: 0 2px;
            }
        }
    }

    //Btn setup
    .my_orange-button {
        width: 140px;
        background-color: #ef9303;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        transition: background-color 0.5s linear 0s;

        span {
            font-size: 14px;

            a {
                text-decoration: none;
                color: $primary;
            }
        }
    }

    .my_orange-button:hover {
        background-color: $green;
        cursor: pointer;
    }
}
</style>
