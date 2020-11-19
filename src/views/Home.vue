<template>
  <div class="home">
    <section id="slider-sec" class="slider-reg">
      <!-- Swiper -->
      <div class="swiper-container swiper-fullwidth">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="assets/img/hops2.jpg" alt="" class="img-fluid" />
            <div class="swiper-overlay">
              <div class="container text-center">
                <div class="row">
                  <div
                    class="col-lg-8 slider-text col-md-10 col-12 mr-auto ml-auto"
                  >
                    <h4 class="swiper-title">
                      Welcome to BrewTender
                    </h4>
                    <p>
                      Our goal is to help you discover your next favorite beer
                      <br />
                    </p>
                    <router-link to="/signup" class="btn btn-white btn-lg"
                      >Signup Now</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="swiper-container swiper-fullwidth">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="assets/img/chi-beer.jpg" alt="" class="img-fluid" />
                <div class="swiper-overlay">
                  <div class="container text-center">
                    <div class="row">
                      <div
                        class="col-lg-8 slider-text col-md-10 col-12 mr-auto ml-auto"
                      >
                        <h4 class="swiper-title">
                          Welcome to BrewTender
                        </h4>
                        <p>
                          We pick your beer so you can take a load off an enjoy
                        </p>
                        <router-link to="/signup" class="btn btn-white btn-lg"
                          >Signup Now</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          <!-- </div> -->
          <!--slide-->

          <!-- <div class="swiper-slide">
            <img src="assets/img/taps.jpg" alt="" class="img-fluid" />
            <div class="swiper-overlay">
              <div class="container text-center">
                <div class="row">
                  <div
                    class="col-lg-8 slider-text col-md-10 col-12 mr-auto ml-auto"
                  >
                    <h4 class="swiper-title">
                      Welcome to BrewTender
                    </h4>
                    <p>
                      We pick your beer so you can take a load off an enjoy
                    </p>
                    <router-link to="/signup" class="btn btn-white btn-lg"
                      >Signup Now</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!--slide-->
        </div>
      </div>
    </section>

    <!-- <div class="cta-bg">
      <div class="container text-center">
        <h3>
          Hand Crafted Beer...suggestions
          <router-link
            to="/signup"
            class="btn btn-lg btn-white btn-radius my-3"
          >
            Now</router-link
          >
        </h3>
      </div>
    </div> -->
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to BrewTender!",
    };
  },
  created: function() {},
  methods: {},
};
</script>
