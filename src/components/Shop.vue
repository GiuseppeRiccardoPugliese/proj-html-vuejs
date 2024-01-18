<script>
export default {
  name: 'Shop',
  data() {
    return {
      showIcons: true,
      fruitsShop: [
        {
          imgFruit: '../../public/s7-150x150.jpg',
          name: 'Naga pepper',
          price: '$21'
        },
        {
          imgFruit: '../../public/s4-150x150.jpg',
          name: 'Fresh Blueberries',
          priceDiscount: '$19',
          price: '$14',
          textSale: 'SALE!'
        },
        {
          imgFruit: '../../public/s5-150x150.jpg',
          name: 'Fress Apple',
          price: '$18'
        },
        {
          imgFruit: '../../public/s2-150x150.jpg',
          name: 'Fress Cobies',
          priceDiscount: '$18',
          price: '$17',
          textSale: 'SALE!'
        },
        {
          imgFruit: '../../public/s1-150x150.jpg',
          name: 'Organic Juice',
          priceDiscount: '$20',
          price: '$15',
          textSale: 'SALE!'
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
          price: '$26',
          textSale: 'SALE!'
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
  <div class="container pt-4">
    <div class="row">
      <!-- Text -->
      <div class="col-12 text-center py-3">
        <h5 class="fw-bold ms_orange-text">Trending Online Store</h5>
        <h1 class="fw-bold text-white">
          GOGRIN ALL
          <span class="ms_orange-text">ORGANIC</span> FOOD
        </h1>
      </div>
      <!-- Shop Menu -->
      <div class="col-12 text-center d-flex justify-content-center py-3">
        <ul class="list-unstyled d-flex">
          <li class="px-2">
            <a class="text-decoration-none" href="#">All Product</a>
          </li>
          <li class="px-2">
            <a class="text-decoration-none" href="#">Apple</a>
          </li>
          <li class="px-2">
            <a class="text-decoration-none" href="#">Food</a>
          </li>
          <li class="px-2">
            <a class="text-decoration-none" href="#">Orange</a>
          </li>
          <li class="px-2">
            <a class="text-decoration-none" href="#">Vegetable</a>
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
        <div class="d-flex justify-content-center">
          <div id="relative" class="position-relative" style="width: 150px">
            <img :src="item.imgFruit" alt="" />
            <div class="icons">
              <i class=" me-3 fa-solid fa-heart"></i>
              <i class=" me-3 fa-solid fa-cart-shopping"></i>
              <i class=" me-3 fa-solid fa-eye"></i>

            </div>
            <div v-if="item.textSale" class="card_sale rounded">
              <span>{{ item.textSale }}</span>
            </div>
          </div>
        </div>

        <h6 class="mt-2 text-white">{{ item.name }}</h6>
        <span class="ms_orange-text text-decoration-line-through opacity-50">{{
          item.priceDiscount
        }}</span>
        <span class="ms_orange-text ps-1">{{ item.price }}</span>
      </div>
    </div>

    <div class="w-100 d-flex justify-content-center">
      <div class="my_orange-button d-flex align-items-center justify-content-center p-3 mt-4 mx-2">
        <span><a href="#">ALL PRODUCTS</a></span>
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

  ul li a {
    color: #fff;
    transition: color 0.2s linear 0s;
  }

  ul li a:hover {
    color: #ef9303;
  }

  .ms_orange-text {
    color: $orange;
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
    width: 150px;
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

  .card_sale {
    background-color: #ef9303;
    position: absolute;
    top: 3px;
    right: 3px;
  }

  .card_sale span {
    font-size: 12px;
    margin: 10px;
    color: #fff;
    font-weight: bold;
  }

  #relative {
    position: relative;
  }

  #relative:hover .icons {
    opacity: 1;
    bottom: 10px;
  }

  .icons {
    position: absolute;
    left: calc(50% - 56px);
    width: 112px;
    font-size: 15px;
    opacity: 0;
    cursor: pointer;
    display: flex;
    transition: all 0.5s;
    bottom: 0;
    padding: 2px;


  }

  .fa-solid {
    padding: 3px;
    border-radius: 25px;
    border: 1px solid rgb(205, 201, 201);
  }

  .fa-solid:hover {
    background-color: #ef9e05;
    color: white;
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
