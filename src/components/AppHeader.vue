<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div id="info" class="d-flex align-items-center">
      <div
        class="container d-flex align-items-center flex-column justify-content-center flex-lg-row justify-content-lg-between"
      >
        <div class="d-flex">
          <div class="d-flex align-items-center me-4">
            <i class="fa-solid fa-location-dot me-2"></i>
            <div>North baukhula, tala, USA</div>
          </div>
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-envelope me-2"></i>
            <div>demo@example.com</div>
          </div>
        </div>
        <div class="d-flex">
          <div class="d-flex align-items-center me-4">
            <i class="fa-regular fa-clock me-2"></i>
            <div>8.30AM-8.30PM</div>
          </div>
          <div
            id="social"
            class="d-flex justify-content-between align-items-center"
          >
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- <nav>
        <ul>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'about'}">About</router-link>
            </li>
            <li>
                <router-link :to="{name: 'contact'}">Contact</router-link>
            </li>
        </ul>
    </nav> -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
#info {
  height: 50px;
  background-color: #007066;
  color: white;
}

#social {
  width: 80px;
}
</style>
