<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/beers">Beers</router-link> |
      <span v-if="!isLoggedIn()">
        <router-link to="/signup">Signup</router-link> |
      </span>
      <span v-if="!isLoggedIn()">
        <router-link to="/login">Login</router-link> |
      </span>

      <router-link to="/logout">Logout</router-link>
      <span v-if="isLoggedIn()">
        |
        <router-link v-bind:to="`/users/${getUserId()}`">
          My Profile</router-link
        >
        <br /><router-link to="/user_tasting_notes"> Taste Profile </router-link
        ><br />
      </span>
    </div> -->
    <header class="header header-sticky header-light">
      <nav class="navbar navbar-expand-lg yamm">
        <div class="container">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img
              src="/assets/img/logo-dark.png"
              class="img-fluid logo-dark"
              alt=""
            />
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
              <li class="dropdown nav-item">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  >Home</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/" class="dropdown-item">Home</router-link>
                  </li>
                  <li>
                    <router-link to="/signup" class="dropdown-item"
                      >Signup</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/login" class="dropdown-item"
                      >Login</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/logout" class="dropdown-item"
                      >Logout</router-link
                    >
                  </li>
                </ul>
              </li>

              <li class="dropdown nav-item">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  >Beers!</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/beers" class="dropdown-item"
                      >All Beers!</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown nav-item">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  >Profile!</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      v-bind:to="`/users/${getUserId()}`"
                      class="dropdown-item"
                      >My Profile!</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/user_tasting_notes" class="dropdown-item"
                      >Taste Profile!</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!--nav end-->
    </header>
    <router-view />
    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 margin-btm-20">
            <div class="footer-col">
              <h3>Bizwrap</h3>
              <p>
                aliqua.adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna. aliqua.adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div class="space-20"></div>
            <div class="footer-col">
              <h3>contact info</h3>
              <p>
                <i class="icon ion-md-home"></i> pearl tower,3rd
                floor,jaipur,302012
              </p>
              <p><i class="icon ion-md-call"></i> +91 9887568614</p>
              <p><i class="icon ion-ios-mail"></i> mail@domain.com</p>
            </div>
            <div class="space-20"></div>
            <div class="footer-col">
              <h3>Follow us</h3>
              <ul class=" list-inline social-btn">
                <li class="list-inline-item">
                  <a href="#"
                    ><i
                      class="icon ion-logo-facebook"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Like On Facebook"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"
                    ><i
                      class="icon ion-logo-twitter"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Follow On twitter"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"
                    ><i
                      class="icon ion-logo-googleplus"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Follow On googleplus"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"
                    ><i
                      class="icon ion-logo-pinterest"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="pinterest"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"
                    ><i
                      class="icon ion-logo-skype"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="skype"
                    ></i
                  ></a>
                </li>
              </ul>
            </div>
            <!--footer social col-->
          </div>
          <!--col-4 end-->

          <!--latest post col end-->
        </div>
        <!--get in touch col end-->
      </div>
      <!--footer main row end-->
      <div class="space-70"></div>
      <div class="row">
        <div class="col-md-12 text-center footer-bottom">
          <a href="index.html">
            <img src="assets/img/logo-white.png" alt=""
          /></a>
          <div class="space-20"></div>
          <span>&copy;2019. All Right Reserved. Design by design_mylife</span>
        </div>
      </div>
      <!--footer copyright row end-->
    </div>
    <!--container-->
  </div>
  <!--footer main end-->
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
    };
  },
  created: function() {},
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
    getUserId: function() {
      return parseInt(localStorage.getItem("user_id"));
    },
  },
};
</script>
