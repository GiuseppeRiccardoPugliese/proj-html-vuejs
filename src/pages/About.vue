<script>
export default {
  name: 'About',
  data() {
    return {
      fruits: [
        {
          name: 'Natural Cabbage',
          imgPath:
            'https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H3-fe1.png'
        },
        {
          name: 'Fresh Tomato',
          imgPath:
            'https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H3-fe2.png'
        },
        {
          name: 'Organic Spinach',
          imgPath:
            'https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H3-fe3.png'
        },
        {
          name: 'Natural Carrots',
          imgPath:
            'https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H3-fe4.png'
        },
        {
          name: 'Organic Grapes',
          imgPath:
            'https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H3-fe5.png'
        },
        {
          name: 'Fresh Apple',
          imgPath:
            'https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H3-fe6.png'
        },
        {
          name: 'Natural Farming',
          imgPath:
            'https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H2-fe4.png'
        },
        {
          name: 'Organic Eggplant',
          imgPath:
            'https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H2-fe1.png'
        }
      ]
    }
  }
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
        <li class="breadcrumb-item">> <a href="/">Home</a></li>
        <li class="breadcrumb-item">> About</li>
      </ol>
    </nav>
  </div>
  <main>
    <section class="my-5 d-flex align-items-center justify-content-center">
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
            <div class="w-parag me-2">
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
          <div
            class="my_button d-flex align-items-center justify-content-center p-3"
          >
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
    </section>

    <div class="my-5 container shop"></div>

    <section class="d-flex justify-content-center align-items-center">
      <div class="container row my-5">
        <div class="col-12 col-md-4">
          <h1>
            Our organic <span class="s_orange">fruits</span> &
            <span class="s_orange">vegetable</span>
          </h1>
          <p class="p_grey">
            Organic is loaded with a sense of rightness, with a set of rules. I
            would much rather someone bought food that was local and sustainable
            but not organic than bought organic food
          </p>
          <div
            class="my_button d-flex align-items-center justify-content-center p-3 mt-4"
          >
            <span><a href="#">ABOUT US</a></span>
          </div>
        </div>
        <div class="col-12 col-md-8 d-flex flex-wrap">
          <div
            class="card_fruits_org d-flex align-items-center flex-column mt-3"
            v-for="item in fruits"
          >
            <img :src="item.imgPath" alt="" />
            <span class="h_fruit">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="d-flex justify-content-center align-items-center">
      <div class="container row my-5">
        <div class="col-12 col-xl-6">
          <img
            src="https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H3-about.png"
            alt=""
          />
        </div>

        <div class="col-12 col-xl-6">
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
            <div class="w-parag me-2">
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
          <div
            class="my_button d-flex align-items-center justify-content-center p-3 mt-4"
          >
            <span><a href="#">ABOUT US</a></span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container backColor d-flex flex-wrap">
        <div class="benefits d-flex align-items-center">
          <img
            src="https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H2-fe1.png"
            alt=""
          />
          <div>
            <h5>Natural Farming</h5>
            <span>we have a need to make these the of connections literal</span>
          </div>
        </div>
        <div class="benefits d-flex align-items-center">
          <img
            src="https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H2-fe1.png"
            alt=""
          />
          <div>
            <h5>Natural Farming</h5>
            <span>we have a need to make these the of connections literal</span>
          </div>
        </div>
        <div class="benefits d-flex align-items-center">
          <img
            src="https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H2-fe1.png"
            alt=""
          />
          <div>
            <h5>Natural Farming</h5>
            <span>we have a need to make these the of connections literal</span>
          </div>
        </div>
        <div class="benefits d-flex align-items-center">
          <img
            src="https://themexbd.com/gogrin/organic/wp-content/uploads/2022/12/H2-fe1.png"
            alt=""
          />
          <div>
            <h5>Natural Farming</h5>
            <span>we have a need to make these the of connections literal</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

*::selection {
  color: #ef9303;
  background: #00000013;
}

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

.part_up {
  img {
    width: 100%;
  }
}

.w-parag {
  width: 50%;
}
.my_button {
  width: 140px;
  background-color: #ef9303;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  transition: background-color 0.5s linear 0s;

  span {
    font-size: 14px;

    a {
      text-decoration: none;
      color: $primary;
    }
  }
}

.my_button:hover {
  background-color: $green;
  cursor: pointer;
}

.s_orange {
  color: #ef9303;
}

.p_grey {
  color: $bg-light_black;
}

h1 {
  font-weight: bold;
}
h3 {
  font-weight: bold;
}

.shop {
  background-image: url(../assets/shop-bg-img.jpg);

  //debug
  height: 500px;
}

.card_fruits_org {
  width: 25%;

  .h_fruit {
    font-weight: 500;
    margin-top: 10px;
    transition: color 0.3s linear 0s;
  }

  .h_fruit:hover {
    color: #ef9303;
    cursor: pointer;
  }
}

.backColor {
  background-color: #fbf4e6;

  .benefits {
    width: 25%;
    padding: 20px;
    margin: 50px 0;

    img {
      width: 70px;
      height: 70px;
      margin-right: 15px;
    }
  }
}

@media screen and (max-width: 768px) {
  .card_fruits_org {
    width: 50%;
  }

  .backColor .benefits {
    width: 50%;
  }
}

@media screen and (max-width: 576px) {
  .card_fruits_org {
    width: 100%;
  }

  .backColor .benefits {
    width: 100%;
  }
}
</style>
