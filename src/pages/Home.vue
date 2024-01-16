<script>

export default {
  name: 'Home',
}

</script>

<template>
  <!-- Slider after header -->
  <section>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="../assets/H3-slider3.jpg" class="d-block w-100" alt="first_img">
          <div class="carousel-caption d-none d-md-block top-50 start-50 end-0 bottom-0 left-0 translate-middle p-0">
            <h4 class="fw-bold">Gogrin ogranic food store</h4>
            <h1 class="fw-bolder ms_big-title">Eating naturally & organic is always be healthy.</h1>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="../assets/slider.jpg" class="d-block w-100" alt="second_img">
          <div class="carousel-caption d-none d-md-block top-50 start-50 end-0 bottom-0 left-0 translate-middle p-0">
            <h4 class="fw-bold">Gogrin ogranic food store</h4>
            <h1 class="fw-bolder ms_big-title">Eating naturally & organic is always be healthy.</h1>
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
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.ms_big-title {
  font-size: 70px;
}

// .carousel-control-prev-icon,
// .carousel-control-next-icon {
//   background-color: transparent;
//   border: none;

//   &:hover {
//     // background-color: white;
//     background-color: aquamarine;
//     color: $orange;
//   }
// }
</style>
