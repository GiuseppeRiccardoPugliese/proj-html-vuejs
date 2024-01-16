<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div id="info" class="d-flex align-items-center">
      <div
        class="container d-flex align-items-center flex-column justify-content-center flex-lg-row justify-content-lg-between">
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
          <div id="social" class="d-flex justify-content-between align-items-center">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div class="d-flex align-items-center">
        <img src="../assets/logo.png" alt="">
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            HOME
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#"> <router-link class="router" :to="{ name: 'home' }">Home-1</router-link></a>
            <a class="dropdown-item" href="#">Home-2</a>
            <a class="dropdown-item" href="#">Home-3</a>
            <a class="dropdown-item" href="#">Home-Landing</a>
            <a class="dropdown-item" href="#">Home-Video</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            HOME
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Opzione 1</a>
            <a class="dropdown-item" href="#">Opzione 2</a>
            <a class="dropdown-item" href="#">Opzione 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            HOME
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Opzione 1</a>
            <a class="dropdown-item" href="#">Opzione 2</a>
            <a class="dropdown-item" href="#">Opzione 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            HOME
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Opzione 1</a>
            <a class="dropdown-item" href="#">Opzione 2</a>
            <a class="dropdown-item" href="#">Opzione 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            HOME
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Opzione 1</a>
            <a class="dropdown-item" href="#">Opzione 2</a>
            <a class="dropdown-item" href="#">Opzione 3</a>
          </div>
        </div>

      </div>

    </nav>



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

.router {
  color: black;
  text-decoration: none;
}

.dropdown {
  color: #ef9e05;
}

.dropdown:hover .dropdown-menu {
  display: block;
  border: none;

}
</style>
