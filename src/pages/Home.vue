<script>
//Importo Farm
import Farm from '../components/Farm.vue'
//Importo lo Shop
import Shop from '../components/Shop.vue'
//importo il testimonial
import Testimonial from '../components/Testimonial.vue'
//importo le stats
import Stats from '../components/Stats.vue'
// importo Discount
import Discount from '../components/Discount.vue'
//importo Food Discount
import TopHomeFood from '../components/TopHomeFood.vue'

// import organic food
import OrganicFoodDiscount from '../components/OrganicFoodDiscount.vue'

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  name: 'Home',

  components: {
    Swiper,
    SwiperSlide,
    Farm,
    Shop,
    Testimonial,
    Stats,
    Discount,
    OrganicFoodDiscount,
    TopHomeFood
  },
  data() {
    return {
      isHovered: false,
    }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>

<template>
  <!-- Slider after header -->
  <section>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="../assets/H3-slider3.jpg" class="d-block w-100" alt="first_img" />
          <div class="carousel-caption d-none d-md-block top-50 start-50 end-0 bottom-0 left-0 translate-middle p-0">
            <h4 class="fw-bold">Gogrin ogranic food store</h4>
            <h1 class="fw-bolder ms_big-title">
              Eating naturally & organic is always be healthy.
            </h1>
            <div class="d-flex justify-content-center">
              <div class="my_orange-button d-flex align-items-center justify-content-center p-3 mt-4 mx-2">
                <span><a href="#">ABOUT US</a></span>
              </div>
              <div class="my_green-button d-flex align-items-center justify-content-center p-3 mt-4 mx-2">
                <span><a href="#">OUR HISTORY</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="../assets/slider.jpg" class="d-block w-100" alt="second_img" />
          <div class="carousel-caption d-none d-md-block top-50 start-50 end-0 bottom-0 left-0 translate-middle p-0">
            <h4 class="fw-bold">Gogrin ogranic food store</h4>
            <h1 class="fw-bolder ms_big-title">
              Eating naturally & organic is always be healthy.
            </h1>
            <div class="d-flex justify-content-center">
              <div class="my_orange-button d-flex align-items-center justify-content-center p-3 mt-4 mx-2">
                <span><a href="#">ABOUT US</a></span>
              </div>
              <div class="my_green-button d-flex align-items-center justify-content-center p-3 mt-4 mx-2">
                <span><a href="#">OUR HISTORY</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <!-- Organic Food -->
  <section class="container">
    <div class="row mx-0 my-5">
      <div class="col-6">
        <h1 class="ms_green_text fw-bold m-0">
          <span class="ms_orange_text">Look what</span> consumer power has done
          with <span class="ms_orange_text">organic food;</span> we can do the
          same with clothes.
        </h1>
      </div>
      <div class="col-6 position-relative">
        <p class="m-0">
          I have a need to make these sorts of connections literal sometimes,
          and a vehicle often helps to do that. I have a relationship to hosting
          culture.<span class="ms_orange_text">
            It isn't really about it helps to do that. I have a relationship to
            hosting culture.</span>
          <br />
          <br />
          Need to make these sorts of connections literal sometimes, and a
          vehicle often helps to do that. I have a relationship to hosting
          culture.
        </p>
        <div class="col-12 position-absolute text-end" id="oscillating-image">
          <img src="../assets/fe-shap1-1.png" alt="" />
        </div>
      </div>
      <!-- Carousel -->
      <div class="col-12 my-4">
        <swiper @mouseover="isHovered = true" @mouseleave="isHovered = false" :navigation="isHovered ? true : false"
          :style="{
            '--swiper-navigation-color': 'orange'
          }" :loop="true" :autoplay="{
  delay: 2500,
  disableOnInteraction: false
}" :modules="modules" :breakpoints="{
  '300': {
    slidesPerView: 1,
    spaceBetween: 0
  },
  '800': {
    slidesPerView: 3,
    spaceBetween: 10
  },
  '1200': {
    slidesPerView: 4,
    spaceBetween: 0
  }
}" class="mySwiper">
          <swiper-slide class="d-flex justify-content-center align-items-center">
            <img src="../../public/fe1.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="d-flex justify-content-center align-items-center">
            <img src="../../public/fe2.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="d-flex justify-content-center align-items-center">
            <img src="../../public/fe3.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="d-flex justify-content-center align-items-center">
            <img src="../../public/fe1.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="d-flex justify-content-center align-items-center">
            <img src="../../public/fe2.jpg" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <!-- Shop -->
  <section>
    <Shop />
  </section>

  <!-- Testimonial -->
  <section>
    <Testimonial />
  </section>

  <!-- Discount -->
  <section>
    <Discount />
  </section>

  <!-- Statistiche -->
  <section class="container bgImgGreen">
    <Stats />
  </section>

  <!-- Top Home Food -->
  <section>
    <TopHomeFood />
  </section>

  <!-- Food Discount -->
  <section class="container">
    <OrganicFoodDiscount />
  </section>

  <!-- GOGRIN LATEST NEWS FEED -->
  <section>
    <div class="container my-5">
      <div class="title d-flex flex-column justify-content-center text-center">
        <div class="orange"><strong>The news whatwe have</strong></div>
        <h2>
          <strong>GOGRIN LATEST</strong>
          <div class="orange d-inline"><strong> NEWS </strong></div>
          <strong>FEED</strong>
        </h2>
      </div>
      <div id="row" class="d-flex flex-wrap">
        <div class="col-12 col-md-6 col-lg-4 px-3 mt-2">
          <div>
            <img src="../assets/blo1-390x250.jpg" alt="" style="width: 100%" />
          </div>
          <div class="my-3">
            <span>
              <i class="fa-solid fa-user orange"></i>
            </span>
            <span class="span_light mx-2">Gogrin</span>
            <span>
              <i class="fa-regular fa-clock orange"></i>
            </span>
            <span class="span_light mx-2">17 Dec 2022</span>
          </div>
          <div>
            <h6 class="fw-bold ms_green_text transition_text">
              Where I live, I am surrounded by fresh, organic food, so I eat
              really well.
            </h6>
            <p class="span_light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              sint asperiores blanditiis corrupti similique eaque ex quo
            </p>
          </div>
          <a href="#" class="ms_green_text text-decoration-none transition_text">READ MORE...</a>
        </div>
        <div class="col-12 col-md-6 col-lg-4 px-3 mt-2">
          <div>
            <img src="../assets/blo2-390x250.jpg" alt="" style="width: 100%" />
          </div>
          <div class="my-3">
            <span>
              <i class="fa-solid fa-user orange"></i>
            </span>
            <span class="span_light mx-2">Gogrin</span>
            <span>
              <i class="fa-regular fa-clock orange"></i>
            </span>
            <span class="span_light mx-2">16 Dec 2022</span>
          </div>
          <div>
            <h6 class="fw-bold ms_green_text transition_text">
              What we get at home is 100% organic food. We are also 90%
              vegetarian.
            </h6>
            <p class="span_light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              sint asperiores blanditiis corrupti similique eaque ex quo
            </p>
          </div>
          <a href="#" class="ms_green_text text-decoration-none transition_text">READ MORE...</a>
        </div>
        <div class="col-12 col-md-6 col-lg-4 px-3 mt-2">
          <div>
            <img src="../assets/blo3-390x250.jpg" alt="" style="width: 100%" />
          </div>
          <div class="my-3">
            <span>
              <i class="fa-solid fa-user orange"></i>
            </span>
            <span class="span_light mx-2">Gogrin</span>
            <span>
              <i class="fa-regular fa-clock orange"></i>
            </span>
            <span class="span_light mx-2">15 Dec 2022</span>
          </div>
          <div>
            <h6 class="fw-bold ms_green_text transition_text">
              If we as a society are willing to have a preference for organic
              food farmer
            </h6>
            <p class="span_light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              sint asperiores blanditiis corrupti similique eaque ex quo
            </p>
          </div>
          <a href="#" class="ms_green_text text-decoration-none transition_text">READ MORE...</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Farm Slider -->
  <section>
    <Farm />
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

//Logo che oscilla
#oscillating-image {
  bottom: 20%;
  left: 35%;
  display: inline-block;
  animation: oscillate 2s infinite alternate;

  @keyframes oscillate {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-15px);
    }
  }
}

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

.my_green-button {
  width: 140px;
  background-color: $green;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  transition: background-color 0.5s linear 0s;

  a {
    text-decoration: none;
    color: $primary;
  }

  span {
    font-size: 14px;
  }
}

.my_green-button:hover {
  background-color: $orange;
  cursor: pointer;
}

.ms_big-title {
  font-size: 70px;
}

.ms_orange_text {
  color: $orange;
}

.ms_green_text {
  color: $green;
}

.bgImgGreen {
  background-image: url(../assets/counter-bg.jpg);
}

.title {
  background-image: url(../assets/title-shap.png);
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
}

.orange {
  color: #ef9e05;
}

.span_light {
  color: #00000090;
}

.transition_text {
  transition: color 0.2s linear 0s;
}

.transition_text:hover {
  color: #ef9303;
  cursor: pointer;
}
</style>
