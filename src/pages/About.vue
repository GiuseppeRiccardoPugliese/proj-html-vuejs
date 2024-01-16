<script>
export default {
  name: 'About'
}
</script>

<template>
  <div
    class="jumbo d-flex justify-content-center align-items-center flex-column"
  >
    <div>
      <h2>About</h2>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">You here!</li>
        <li class="breadcrumb-item" aria-current="page">> Home</li>
        <li class="breadcrumb-item">> About</li>
      </ol>
    </nav>
  </div>
  <main>
    <div class="my-5 d-flex align-items-center justify-content-center">
      <div class="container row part_up">
        <div class="col-12 col-md-7">
          <span class="s_orange">Running week top selling</span>
          <h1>
            Health is wealth - eat <span class="s_orange">natural,</span> eat
            <span class="s_orange">organic,</span> be healthy.
          </h1>
          <p class="p_grey">
            Organic is loaded with a sense of rightness, with a set of rules. I
            would much rather someone bought food that was local and sustainable
            but not organic than bought organic food that had to be shipped
            across the world.
          </p>
          <div class="d-flex">
            <div class="w-parag">
              <h3>All are handmade</h3>
              <p class="p_grey">
                If I'm honest, the thing I am proudest of is my varieties of
                wild flowers in the hay meadow.
              </p>
            </div>
            <div class="w-parag">
              <h3>100% Fresh ogranic</h3>
              <p class="p_grey">
                If I'm honest, the thing I am proudest of is my varieties of
                wild flowers in the hay meadow.
              </p>
            </div>
          </div>
          <div>
            <h3>
              Call us for order:
              <span class="s_orange">+088012345 678 906</span>
            </h3>
            <p class="p_grey">
              Organic is loaded with a sense of rightness, with a set of rules.
              I would much rather someone bought food that was local and
              sustainable but not organic
            </p>
          </div>
          <div class="my_button d-flex align-items-center justify-content-center p-3">
            <span><a href="#">ABOUT US</a></span>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <img
            src="https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H2-about-img.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="container shop"></div>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
img {
  width: 100%;
}

.jumbo {
  height: 220px;
  background-image: url(../assets/breckum-img.jpg);
  background-size: cover;
  color: $primary;
}

.part_up {
    h1{
        font-weight: bold;
    }
    h3{
        font-weight: bold;
    }
  .s_orange {
    color: #ef9303;
  }

  .w-parag {
    width: 50%;
  }

  .p_grey {
    color: $bg-light_black;
  }

  .my_button{
    width: 140px;
    background-color: #ef9303;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    transition: background-color 0.5s linear 0s;

    span{
        font-size: 14px;

        a{
            text-decoration: none;
            color: $primary;
        }
    }

  }

  .my_button:hover{
    background-color: $green;
    cursor: pointer;
  }
}

.shop {
  background-image: url(../assets/shop-bg-img.jpg);

  //debug
  height: 500px;
}
</style>
