<script>

export default {
  name: 'Home',
  data() {
    return {
      images: [
        '/public/fe1.jpg',
        '/public/fe2.jpg',
        '/public/fe3.jpg',
        '/public/fe1.jpg',
        '/public/fe2.jpg',
      ],
    }
  },
  methods: {
    loadInitialImages() {
      let contenitoreCarousel = document.getElementById("secondCarouselInner");
      this.images.forEach((element, index) => {

        let cardClass = (index === 0) ? "carousel-item active" : "carousel-item";

        //Riempio la mia pagina dinamicamente
        contenitoreCarousel.innerHTML += `
        <div class="${cardClass}">
          <img src=${element} alt="">
        </div>
          `
      });
    },
  },
  mounted() {
    this.loadInitialImages();
  },
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
  <section class="container">
    <div class="row mx-0 my-5">
      <div class="col-6">
        <h1 class="ms_green_text fw-bold m-0"><span class="ms_orange_text">Look what</span> consumer power has done with
          <span class="ms_orange_text">organic food;</span> we can
          do the same with
          clothes.
        </h1>
      </div>
      <div class="col-6">
        <p class="m-0">I have a need to make these sorts of connections literal sometimes, and a vehicle often helps to do
          that. I
          have a relationship to hosting culture.<span class="ms_orange_text"> It isn't really about it helps to do that.
            I have a relationship
            to hosting culture.</span>
          <br> <br>
          Need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. I have a
          relationship to hosting culture.
        </p>
      </div>
      <!-- Carousel -->
      <div class="col-12 my-4">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item d-flex justify-content-between" id="secondCarouselInner">
              <!-- Img dinamica -->
            </div>
          </div>
          <!-- Controlli del carosello -->
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.ms_big-title {
  font-size: 70px;
}

.ms_orange_text {
  color: $orange;
}

.ms_green_text {
  color: $green;
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
