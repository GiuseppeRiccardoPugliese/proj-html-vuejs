<script>
export default {
  name: "AppHeader",
  data() {
    return {
      containerFluid: true,
    }
  },
  methods: {
    fixedNav() {
      const infoSection = document.getElementById("info");
      const navBar = document.querySelector("nav");

      if (window.scrollY > 25) {
        // Hide "info"
        infoSection.style.display = 'none';

        //Addo la transizione
        navBar.classList.add('navbar-transition');

        // Nav bar Style
        navBar.style.position = "fixed";
        navBar.style.backgroundColor = "#82639c";
        navBar.style.opacity = "0.8";
        navBar.style.width = "100%";
        navBar.style.zIndex = "1000";
        navBar.style.top = "0";

      } else {
        // Altrimenti mi ricompare la barra
        infoSection.style.display = 'block';

        // Reset Nav
        navBar.style.position = "static";
        navBar.style.backgroundColor = "transparent";
        navBar.style.opacity = "1";
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.fixedNav);
  },
  beforeDestroy() {
    // Memory leaks
    window.removeEventListener('scroll', this.fixedNav);
  },
};
</script>

<template>
  <header>
    <!-- sezione info -->

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
            <a href="#" class="text-white"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="text-white"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="text-white"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- sezione nav -->

    <nav :class="{ 'container': !containerFluid, 'container-fluid': containerFluid }"
      class="d-flex justify-content-between align-items-center">
      <div id="dropdpwns" class="d-flex align-items-center">
        <a href="/"><img src="../assets/logo.png" alt=""></a>
        <div class="d-flex d-none d-lg-flex">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              HOME
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'home' }">Home-1</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Home-2</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Home-3</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Home-Landing</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Home-Video</router-link></a>
            </div>
          </div>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              ABOUT
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'about' }">About</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Team</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router" :to="{ name: 'notfound' }">Pricing
                  Table</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router" :to="{ name: 'notfound' }">Faq
                  Page</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Testimonial</router-link></a>
            </div>
          </div>
          <div class="dropdown">
            <button class="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <router-link class="router" :to="{ name: 'notfound' }">SERVICE</router-link>
            </button>
          </div>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <router-link class="router" :to="{ name: 'notfound' }">PORTFOLIO</router-link>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Portfolio-1colum</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Portfolio-2colum</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Portfolio-3colum</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Portfolio-4colum</router-link></a>
            </div>
          </div>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <router-link class="router" :to="{ name: 'notfound' }">SHOP</router-link>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Shop</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router" :to="{ name: 'notfound' }">My
                  account</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Cart</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router"
                  :to="{ name: 'notfound' }">Checkout</router-link></a>
            </div>
          </div>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <router-link class="router" :to="{ name: 'notfound' }">BLOG</router-link>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#"> <router-link class="router" :to="{ name: 'notfound' }">Blog Let
                  Sidebar</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router" :to="{ name: 'notfound' }">Blog Right
                  Sidebat</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router" :to="{ name: 'notfound' }">Blog Right
                  2Column</router-link></a>
              <a class="dropdown-item" href="#"> <router-link class="router" :to="{ name: 'notfound' }">Blog Left
                  2Column</router-link></a>
            </div>
          </div>
          <div class="dropdown">
            <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <router-link class="router" :to="{ name: 'contact' }">CONTACT</router-link>
            </button>

          </div>

        </div>


      </div>
      <div id="shop" class=" d-none d-lg-flex align-items-lg-center me-3 justify-content-end">
        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        <div id="cart" class="ms-2 me-4">
          <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
          <div id="number">0</div>

        </div>

        <div class="my_order d-flex align-items-center justify-content-center"><span data-v-46a23cd7=""><a href="#"
              data-v-46a23cd7="">ORDER NOW</a></span></div>

        <!-- offcanvas -->

      </div>
      <button class="btn  d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"><i class="fa-solid fa-bars d-block d-lg-none"></i></button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel"></h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="img">
            <img src="../assets/logo.png" alt="">

          </div>

          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne">
                  Home
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <ul class="list-group">
                    <a class="dropdown-item" href="#"> <router-link class="router"
                        :to="{ name: 'home' }">Home-1</router-link></a>
                    <a class="dropdown-item" href="#">Home-2</a>
                    <a class="dropdown-item" href="#">Home-3</a>
                    <a class="dropdown-item" href="#">Home-Landing</a>
                    <a class="dropdown-item" href="#">Home-Video</a>
                  </ul>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo">
                  About
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <a class="dropdown-item" href="#"> <router-link class="router"
                      :to="{ name: 'about' }">About</router-link></a>
                  <a class="dropdown-item" href="#">Team</a>
                  <a class="dropdown-item" href="#"> Pricing Table</a>
                  <a class="dropdown-item" href="#">Faq Page</a>
                  <a class="dropdown-item" href="#">Testimonial</a>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header m-3" id="panelsStayOpen-headingThree">

                <a href="#">Service</a>

              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo">
                  Portfolio
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <a class="dropdown-item" href="#">Portfolio-1colum</a>
                  <a class="dropdown-item" href="#">Portfolio-2colum</a>
                  <a class="dropdown-item" href="#">Portfolio-3colum</a>
                  <a class="dropdown-item" href="#">Portfolio-4colum</a>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo">
                  Shop
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <a class="dropdown-item" href="#">Shop</a>
                  <a class="dropdown-item" href="#">My account</a>
                  <a class="dropdown-item" href="#">Cart</a>
                  <a class="dropdown-item" href="#">Checkout</a>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo">
                  Blog
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <a class="dropdown-item" href="#">Blog Let Sidebar</a>
                  <a class="dropdown-item" href="#">Blog Right Sidebat</a>
                  <a class="dropdown-item" href="#">Blog Right 2Column</a>
                  <a class="dropdown-item" href="#">Blog Left 2Column</a>

                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header m-3" id="panelsStayOpen-headingThree">

                  <div>
                    <router-link class="router" :to="{ name: 'contact' }">Contact</router-link>
                  </div>

                </div>
              </div>

            </div>





          </div>
        </div>
      </div>
    </nav>



  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

//Transizione nav
.navbar-transition {
  transition: all 0.5s ease;
}

// sezione info
#info {
  height: 50px;
  background-color: #007066;
  color: white;
}

#social {
  width: 80px;
}

#social i:hover {
  color: #ef9303;
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

.dropdown-menu {
  border-radius: 0;
  bottom: -230px;
  transition: all 0.5s;
  display: block;
  opacity: 0;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  border: none;
  bottom: -181px;

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

// stile offcanvas
.offcanvas-body .option {
  width: 300px;
  display: flex;
  justify-content: space-between;
}

li {
  list-style-type: none;
}

.none {
  display: none;
}

.active {
  display: block;
}

.img {
  display: flex;
  justify-content: center;
}

.accordion {
  --bs-accordion-btn-focus-box-shadow: 0
}

.accordion-item {
  border: none;
}

.accordion-body a {
  padding: 10px 0;
  border-bottom: 1px solid black;
}

.accordion-button:hover {
  color: #ef9303;
}

.accordion-button:not(.collapsed) {
  background-color: white;
}

a {
  color: black;
}

.fa-bars {
  font-size: 30px;
}
</style>
