<script>
//Importo l'I-Frame
import MapiFrame from '../components/MapiFrame.vue'
export default {
  name: 'Contact',
  components: {
    MapiFrame,
  }
}
</script>

<template>
  <!-- Topside with Breadcrumb -->
  <section>
    <div class="jumbo d-flex justify-content-center align-items-center flex-column">
      <div>
        <h2>About</h2>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">You here!</li>
          <li class="breadcrumb-item">> <a href="/">Home</a></li>
          <li class="breadcrumb-item">> Contact</li>
        </ol>
      </nav>
    </div>
  </section>

  <!-- I-FRAME -->
  <section>
    <MapiFrame />
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.jumbo {
  height: 220px;
  background-image: url(../assets/breckum-img.jpg);
  background-size: cover;
  color: $primary;

  a {
    text-decoration: none;
    color: $primary;
    transition: color 0.3s linear 0s;
  }

  a:hover {
    color: #ef9303;
  }
}
</style>
