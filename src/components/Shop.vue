<script>
export default {
  name: 'Shop',
  data() {
    return {
      showIcons: true,
      fruitsShop: [
        {
          imgFruit: '../../public/s1-150x150.jpg',
          name: 'Organic Juice',
          priceDiscount: '$20',
          price: '$15'
        },
        {
          imgFruit: '../../public/s2-150x150.jpg',
          name: 'Fress Cobies',
          priceDiscount: '$18',
          price: '$17'
        },
        {
          imgFruit: '../../public/s4-150x150.jpg',
          name: 'Fresh Blueberries',
          priceDiscount: '$19',
          price: '$14'
        },
        {
          imgFruit: '../../public/s5-150x150.jpg',
          name: 'Fress Apple',
          price: '$18'
        },
        {
          imgFruit: '../../public/s7-150x150.jpg',
          name: 'Naga pepper',
          price: '$21'
        },
        {
          imgFruit: '../../public/s8-150x150.jpg',
          name: 'Fresh Waterlemon',
          price: '$15'
        },
        {
          imgFruit: '../../public/s9-150x150.jpg',
          name: 'Red Gajor',
          priceDiscount: '$29',
          price: '$26'
        },
        {
          imgFruit: '../../public/s10-150x150.jpg',
          name: 'organic letus',
          price: '$23'
        }
      ]
    }
  },
  methods: {
    handleHover() {
      this.showIcons = true
    },
    handleLeave() {
      this.showIcons = false
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- Text -->
      <div class="col-12 text-center py-3">
        <h5 class="fw-bold ms_orange-text">Trending Online Store</h5>
        <h3 class="fw-bold text-white">
          GOGRIN ALL
          <span class="ms_orange-text ms_big-font">ORGANIC</span> FOOD
        </h3>
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
    </div>

    <!-- funzione icone -->
    <!-- <div
      class="img_container"
      @mouseover="handleHover"
      @mouseleave="handleLeave"
    ></div> -->

    <!-- Shop Items -->
    <div class="d-flex justify-content-center flex-wrap" style="width: 100%">
      <div class="text-center card_fruit" v-for="item in fruitsShop">
        <img :src="item.imgFruit" alt="" />
        <h6 class="mt-2 text-white">{{ item.name }}</h6>
        <span class="ms_orange-text text-decoration-line-through opacity-50">{{
          item.priceDiscount
        }}</span>
        <span class="ms_orange-text ps-1">{{ item.price }}</span>
      </div>
    </div>

    <div class="w-100 d-flex justify-content-center">
      <div
        class="my_orange-button d-flex align-items-center justify-content-center p-3 mt-4 mx-2"
      >
        <span><a href="#">ABOUT US</a></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  width: 100%;
  padding-bottom: 40px;
  background-image: url(../assets/shop-bg-img.jpg);
  background-repeat: no-repeat;
  background-size: cover;

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

  .card_fruit {
    width: 25%;
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    .card_fruit {
      width: 50%;
    }
  }
  @media screen and (max-width: 576px) {
    .card_fruit {
      width: 100%;
    }
  }
}
</style>
