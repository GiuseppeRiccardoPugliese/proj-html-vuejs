<script>
//swiper
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  name: 'Testimonial',
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
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div>
        <p>
          “Dessert pudding dessert jelly beans cupcake sweet caramels
          gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets
          muffine pudding tart bear claw sugar plum croissant.”. We started as a
          small legal consultancy. We have proved our competence and had many
          satisfied clients.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide></swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>
