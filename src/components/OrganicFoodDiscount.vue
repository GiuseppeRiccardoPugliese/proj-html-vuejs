<script>
export default {
  name: 'OrganicFoodDiscount'
}
</script>

<template>
  <div
    class="calltoBg d-flex justify-content align-items-center flex-column py-5 px-5"
  >
    <h6 class="py-2">HERE YOU CAN GET 100% FRESH ORGANIC FOOD</h6>
    <h1 class="fw-bold py-2">
      Best organic food up to 25% off for all product
    </h1>
    <p class="text-center">
      The most beautiful people we have known are those who have known defeat,
      known suffering, known struggle, known loss, and have found their way out
      of those depths. The most beautiful people we have known are those who
      have known defeat, known suffering
    </p>
    <div class="d-flex justify-content-center">
      <div
        class="my_orange-button rounded d-flex align-items-center justify-content-center p-3 mt-4 mx-2"
      >
        <span>
          <a href="#">
            <i class="fa-solid fa-phone"></i>
            +088123 56 906
          </a>
        </span>
      </div>
      <div
        class="my_green-button rounded d-flex align-items-center justify-content-center p-3 mt-4 mx-2"
      >
        <span><a href="#">APOINMENT</a></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.calltoBg {
  background-image: url(../assets/call-to-bg.jpg);
  background-repeat: no-repeat;
  color: #fff;
}

.my_orange-button {
  width: 160px;
  background-color: #ef9303;
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
</style>
