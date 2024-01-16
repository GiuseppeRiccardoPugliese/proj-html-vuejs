<script>
/* // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

import './style.css'

// import required modules
import { Pagination } from 'swiper/modules' */
export default {
  name: 'Testimonial',
  /* components: {
    Swiper,
    SwiperSlide
  }, */
  data() {
    return {
      testimonials: [
        { longText: 'Testo lungo 1', shortText: 'Breve 1' },
        { longText: 'Testo lungo 2', shortText: 'Breve 2' }
        // Aggiunte di altre diapositive se servono
      ]
    }
  },
  /* setup() {
    return {
      modules: [Pagination]
    }
  } */
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
  <!-- <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper> -->
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>
