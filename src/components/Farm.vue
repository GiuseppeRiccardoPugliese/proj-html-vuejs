<script>
//swiper
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  name: 'Farm',
  components: {
    Swiper,
    SwiperSlide
  },

  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>

<template>
  <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :modules="modules"
    class="mySwiper my-5 pb-5 responsive_slider"
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
      <img src="../assets/brand1.png" alt="" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

@media screen and (max-width: 768px) {
  
}

@media screen and (max-width: 576px) {
  
}
</style>
