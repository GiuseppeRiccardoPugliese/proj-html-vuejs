<script>
//Importo lo store
import { store } from './store';

//Importo i componenti figli
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>
  <!-- Header -->
  <AppHeader/>

  <!-- Main -->
  <main>
    <router-view></router-view>
  </main>

  <!-- Footer -->
  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
