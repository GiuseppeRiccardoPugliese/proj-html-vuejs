<script>

//swiper
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  name: 'Farm',
  components: {
    Swiper,
    SwiperSlide
  },
    
  setup() {
    return {
        modules: [Autoplay, Pagination, Navigation],
      };
  }
}
</script>

<template>
  <!-- <div>
        <div class="carousel-container">
            <div class="carousel-inner" :style="{ transform: 'translateX(' + translateValue + 'px)' }">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="carousel-slide">
                    <div class="slide-content">
                        <h2>{{ testimonial.longText }}</h2>
                        <p>{{ testimonial.shortText }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button @click="prevSlide" class="carousel-control-prev" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </button>
        <button @click="nextSlide" class="carousel-control-next" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </button>
    </div>  -->
  <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper my-5"
  >
    <swiper-slide class="d-flex justify-content-center align-items-center">
      <img src="../assets/brand1.png" alt="" />
    </swiper-slide>
    <swiper-slide class="d-flex justify-content-center align-items-center">
      <img src="../assets/brand2.png" alt="" />
    </swiper-slide>
    <swiper-slide class="d-flex justify-content-center align-items-center">
      <img src="../assets/brand3.png" alt="" />
    </swiper-slide>
    <swiper-slide class="d-flex justify-content-center align-items-center">
      <img src="../assets/brand4.png" alt="" />
    </swiper-slide>
    <swiper-slide class="d-flex justify-content-center align-items-center">
      <img src="../assets/brand4.png" alt="" />
    </swiper-slide>
    <swiper-slide class="d-flex justify-content-center align-items-center">
      <img src="../assets/brand4.png" alt="" />
    </swiper-slide>
    <swiper-slide class="d-flex justify-content-center align-items-center">
      <img src="../assets/brand4.png" alt="" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>
