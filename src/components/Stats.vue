<script>
export default {
    name: 'Stats',
    
}
</script>

<template>
    <div class="statistiche container d-flex justify-content-center align-items-center my-5">
        <div class="d-flex justify-content-center align-items-center flex-column mx-4">
          <h1 class="s_orange">29 +</h1>
          <h5>Years of Experienced</h5>
        </div>
        <div>
          <img src="../assets/counter-shap1.png" alt="">
        </div>
        <div class="d-flex justify-content-center align-items-center flex-column mx-4">
          <h1 class="s_orange">200 +</h1>
          <h5>Everyday Online Delivery</h5>
        </div>
        <div>
          <img src="../assets/counter-shap1.png" alt="">
        </div>
        <div class="d-flex justify-content-center align-items-center flex-column mx-4">
          <h1 class="s_orange">20 K</h1>
          <h5>Client Satyisfaction</h5>
        </div>
        <div>
          <img src="../assets/counter-shap1.png" alt="">
        </div>
        <div class="d-flex justify-content-center align-items-center flex-column mx-4">
          <h1 class="s_orange">30 +</h1>
          <h5>Award Winning</h5>
        </div>
      </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.s_orange {
  color: #ef9303;
}

.statistiche {
  padding: 40px 0;
  h1 {
    font-size: 50px;
    font-weight: bold;
  }

  h5 {
    font-weight: bold;
  }
}
</style>