<script>
export default {
  name: 'Stats',
  data() {
    return {
      count: 0,
      years: 0,
      client: 0,
      award: 0
    }
  },
  created() {
    this.startCount()
  },
  methods: {
    startCount() {
      const interval = setInterval(() => {
        if (this.count < 200) {
          this.count++;
        } else {
          clearInterval(interval);
        }
      }, 20);

      const intervalYears = setInterval(() => {
        if (this.years < 29) {
          this.years++;
        } else {
          clearInterval(intervalYears);
        }
      }, 200);

      const intervalClient = setInterval(() => {
        if (this.client < 20) {
          this.client++;
        } else {
          clearInterval(intervalClient);
        }
      }, 285);
      const intervalAward = setInterval(() => {
        if (this.award < 30) {
          this.award++;
        } else {
          clearInterval(intervalAward);
        }
      }, 195);
    }
  }

}
</script>

<template>
  <div
    class="statistiche container d-flex justify-content-between align-items-center row-cols-2 row-cols-lg-4 flex-wrap my-5">
    <div class="d-flex align-items-center justify-content-center">
      <div class="text-center p-3">
        <h1 class="s_orange">{{ years }}+</h1>
        <h5>Years of Experienced</h5>

      </div>
      <div>
        <img src="../assets/counter-shap1.png" alt="">
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-center">
      <div class="text-center p-3">
        <h1 class="s_orange">{{ count }}+</h1>
        <h5>Everyday Online Delivery</h5>
      </div>

      <div>
        <img src="../assets/counter-shap1.png" alt="">
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-center">
      <div class="text-center p-3">
        <h1 class="s_orange">{{ client }}K</h1>
        <h5>Client Satyisfaction</h5>
      </div>

      <div>
        <img src="../assets/counter-shap1.png" alt="">
      </div>
    </div>

    <div class="text-center">
      <h1 class="s_orange">{{ award }}+</h1>
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