<template>
  <div class="home">
    <section id="slider-sec" class="slider-reg">
      <!-- Swiper -->
      <div class="swiper-container swiper-fullwidth">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="assets/img/hops2.jpg" alt="" class="img-fluid" />

            <div class="container text-center">
              <div class="row">
                <div
                  class="col-lg-10 slider-text col-md-10 col-12 mr-auto ml-auto"
                >
                  <h4 class="swiper-title">
                    Creative Minimal Business Theme
                  </h4>
                  <p>
                    Bizwrap theme built with modern and easy to use frameworks
                  </p>
                  <a href="#" class="btn btn-white btn-lg">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
          <!--slide-->
          <div class="swiper-slide">
            <img src="assets/img/hops.jpeg" alt="" class="img-fluid" />
            <div class="swiper-overlay">
              <div class="container text-center">
                <div class="row">
                  <div
                    class="col-lg-8 slider-text col-md-10 col-12 mr-auto ml-auto"
                  >
                    <h4 class="swiper-title">
                      You deserve stanning website
                    </h4>
                    <p>
                      Bizwrap theme built with modern and easy to use frameworks
                    </p>
                    <a href="#" class="btn btn-white btn-lg">Purchase Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--slide-->

          <div class="swiper-slide">
            <img src="assets/img/bg-3.jpg" alt="" class="img-fluid" />
            <div class="swiper-overlay">
              <div class="container text-center">
                <div class="row">
                  <div
                    class="col-lg-8 slider-text col-md-10 col-12 mr-auto ml-auto"
                  >
                    <h4 class="swiper-title">
                      Clean valid code for developers
                    </h4>
                    <p>
                      Bizwrap theme looks perfect into all size of devices
                    </p>
                    <a href="#" class="btn btn-white btn-lg">Purchase Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--slide-->
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </section>

    <div class="cta-bg">
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
    </div>
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
