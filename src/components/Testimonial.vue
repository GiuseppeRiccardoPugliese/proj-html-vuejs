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
    class="mySwiper my-5 container"
  >
    <swiper-slide>
      <div class="bg_img d-flex flex-column justify-content-center align-items-center">
        <i class="fa-solid fa-quote-left quote_icon"></i>
        <p class="text-center size_p">
          “Dessert pudding dessert jelly beans cupcake sweet caramels
          gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets
          muffine pudding tart bear claw sugar plum croissant.”. We started as a
          small legal consultancy. We have proved our competence and had many
          satisfied clients.
        </p>
        <h4 class="fw-bold">Martha Alex</h4>
        <h5 class="color_orange">Manager</h5>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg_img d-flex flex-column justify-content-center align-items-center">
        <i class="fa-solid fa-quote-left quote_icon"></i>
        <p class="text-center size_p">
          “Dessert pudding dessert jelly beans cupcake sweet caramels
          gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets
          muffine pudding tart bear claw sugar plum croissant.”. We started as a
          small legal consultancy. We have proved our competence and had many
          satisfied clients.
        </p>
        <h4 class="fw-bold">Parvin Khan</h4>
        <h5 class="color_orange">Co-Of Officer</h5>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.size_p {
  font-size: 20px;
}

.quote_icon{
    font-size: 70px;
    color: $green;
}

.bg_img{
    background-image: url(../assets/testi-icon.png);
    background-repeat: no-repeat;
    background-position: right;
}

.color_orange{
  color: #ef9303;
}
</style>
