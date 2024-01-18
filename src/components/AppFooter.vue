<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer>
    <div class="container">
      <div
        class="subscribe d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
        <h3><strong>SUBSCRIBE OUR NEWSLETTER</strong></h3>
        <div class="mb-3 d-flex">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your email" />
          <button>SEND</button>
        </div>
      </div>
      <ul class="row text-center row-cols-md-2 text-md-start row-cols-xl-4">
        <li class="d-flex flex-column align-items-center mb-4 align-items-md-start">
          <img src="../assets/logo.png" alt="logo" />
          <p>
            War should never be entered upon until every agency of peace has
            failed not to be good
          </p>
          <div class="d-flex">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-google-plus-g"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </li>
        <li class="mb-5">
          <h2>Emergy Link.</h2>

          <div class="mb-3"><a href="#">Organic Food Shop</a></div>
          <div class="mb-3"><a href="#">Our Term & Condition</a></div>
          <div class="mb-3"><a href="#">Gogrin Faq Section</a></div>
          <div class="mb-3"><a href="#">Our Team Member</a></div>
          <div class="mb-3"><a href="#">Our Latest News Feed</a></div>
        </li>
        <li class="d-flex flex-column align-items-center mb-5 align-items-md-start">
          <h2>Our Latest Blog.</h2>

          <div class="mb-3 d-md-flex">
            <img src="../assets/blo1-70x70.jpg" alt="" class="me-2 mb-2 object-fit-cover" />
            <div>
              <a href="#">
                Where I live, I am surrounded by fresh, organic food, so I eat
                really well. </a>
              <br />December 17, 2022
            </div>
          </div>
          <div class="mb-3 d-md-flex">
            <img src="../assets/blo2-70x70.jpg" alt="" class="me-2  object-fit-cover" />
            <div>
              <a href="#">
                Where I live, I am surrounded by fresh, organic food, so I eat
                really well. </a>
              <br />December 17, 2022
            </div>
          </div>
        </li>
        <li>
          <h2>Our Gallery.</h2>

          <div class="row row-cols-3">
            <div>
              <img src="../assets/blo2-70x70.jpg" alt="" class="mb-2" />
            </div>
            <div>
              <img src="../assets/blo9-70x70.jpg" alt="" class="mb-2" />
            </div>
            <div>
              <img src="../assets/blo8-70x70.jpg" alt="" class="mb-2" />
            </div>
            <div>
              <img src="../assets/blo7-70x70.jpg" alt="" class="mb-2" />
            </div>
            <div>
              <img src="../assets/blo4-70x70.jpg" alt="" class="mb-2" />
            </div>
            <div>
              <img src="../assets/blo3-70x70.jpg" alt="" class="mb-2" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div id="info" class="d-flex align-items-center">
      <div
        class="container d-flex align-items-center flex-column justify-content-center flex-lg-row justify-content-lg-between">
        <div>
          <div class="d-flex align-items-center me-4">
            <div>Copyright © gogrin all rights reserved.</div>
          </div>
        </div>
        <div class="d-flex">
          <ul class="d-flex">
            <li class="me-2">Service</li>
            <li class="me-2">Pricing Table</li>
            <li class="me-2">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
  padding: 150px 0 0 0;
  color: white;
  background-image: url(../assets/footer-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 100px;
}

// sezione subscribe
.subscribe {
  background-image: url(../assets/counter-bg.jpg);
  height: 100px;
  padding: 86px 44px;
  width: 1000px;
  position: absolute;
  top: -100px;
  left: calc(50% - 500px);
}

.form-control {
  border-radius: 0;
  width: 300px;
  height: 50px;
}

.subscribe button {
  width: 100px;
  border: none;
  background-color: #1c7e76;
  color: white;
}

//  sezione list
li {
  list-style-type: none;
}

li a {
  text-decoration: none;
  color: #fff;
  transition: color 0.2s linear 0s;
}

li a:hover {
  color: #ef9303;
}

.fa-brands {
  color: white;
  background-color: #1c7e76;
  font-size: 20px;
  padding: 11px 14px;
  border-radius: 5px;
  margin-right: 15px;
  transition: background-color 0.2s linear 0s;
}

.fa-brands:hover {
  background-color: #ef9303;
  cursor: pointer;
}

#info {
  background-color: #1c7e76;
  height: 80px;
}
</style>
