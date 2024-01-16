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
    <nav class="d-flex justify-content-between align-items-center container">
      <div id="dropdpwns" class="d-flex align-items-center">
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
            ABOUT
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#"> <router-link class="router" :to="{ name: 'about' }">About</router-link></a>
            <a class="dropdown-item" href="#">Team</a>
            <a class="dropdown-item" href="#"> Pricing Table</a>
            <a class="dropdown-item" href="#">Faq Page</a>
            <a class="dropdown-item" href="#">Testimonial</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            SERVICE
          </button>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            PORTFOLIO
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Portfolio-1colum</a>
            <a class="dropdown-item" href="#">Portfolio-2colum</a>
            <a class="dropdown-item" href="#">Portfolio-3colum</a>
            <a class="dropdown-item" href="#">Portfolio-4colum</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            SHOP
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Shop</a>
            <a class="dropdown-item" href="#">My account</a>
            <a class="dropdown-item" href="#">Cart</a>
            <a class="dropdown-item" href="#">Checkout</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            BLOG
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Blog Let Sidebar</a>
            <a class="dropdown-item" href="#">Blog Right Sidebat</a>
            <a class="dropdown-item" href="#">Blog Right 2Column</a>
            <a class="dropdown-item" href="#">Blog Left 2Column</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <router-link class="router" :to="{ name: 'contact' }">CONTACT</router-link>
          </button>

        </div>

      </div>
      <div id="shop" class="d-flex align-items-center justify-content-between me-3">
        <i class="fa-solid fa-magnifying-glass"></i>
        <div id="cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <div id="number">0</div>

        </div>

        <div class="my_order d-flex align-items-center justify-content-center"><span data-v-46a23cd7=""><a href="#"
              data-v-46a23cd7="">ORDER NOW</a></span></div>


      </div>
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">Toggle right offcanvas</button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          ...
        </div>
      </div>

    </nav>



  </header>

  <!-- <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
  </nav> -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

// sezione info
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

// sezine nav
nav {
  height: 100px;
}

nav .btn {
  padding: 0 10px;
  font-size: 12px;
}

.dropdown {
  color: #ef9e05;
}

.dropdown:hover .dropdown-menu {
  display: block;
  border: none;

}

nav a:hover {
  color: #ef9e05;
}

a {
  text-decoration: none;
}

// sezione shop

#shop {
  width: 20%;
}

.my_order:hover {
  background-color: #007066;
  cursor: pointer;
}

.my_order {
  width: 100px;
  font-size: 12px;
  background-color: #ef9303;
  border-top-right-radius: 11px;
  border-bottom-left-radius: 11px;
  transition: background-color 0.5s linear 0s;
  padding: 6px;
}

.my_order a {
  color: white;
}

.fa-cart-shopping {
  color: #007066;
  margin: 0 5px;
}

.fa-magnifying-glass {
  color: white;
  background-color: #ef9303;
  padding: 6px;
  border-radius: 25px;
}

#cart {
  position: relative;
}

#number {
  position: absolute;
  top: -10px;
  right: -17px;
  color: white;
  padding: 2px 7px;
  background-color: #ef9303;
  border-radius: 15px;
  font-size: 10px;
}
</style>
