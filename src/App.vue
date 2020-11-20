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
            <h1>BrewTender</h1>
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
                  >Beers</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/beers" class="dropdown-item"
                      >All Beers</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown nav-item">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  >Profile</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      v-bind:to="`/users/${getUserId()}`"
                      class="dropdown-item"
                      >My Profile</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/user_tasting_notes" class="dropdown-item"
                      >Taste Profile</router-link
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
    <footer id="footer-option">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 margin-btm-20">
            <div class="footer-col"></div>
          </div>

          <!--footer col end-->
          <div class="col-lg-3 margin-btm-20">
            <div class="footer-col margin-btm-20">
              <h3>Find us</h3>
              <ul class=" list-inline social-btn">
                <li class="list-inline-item">
                  <a
                    href="https://github.com/jackconroy/capstone-vue-app"
                    target="blank"
                    ><i
                      class="icon ion-logo-github"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Follow On github"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://github.com/jackconroy/capstone_project"
                    target="blank"
                    ><i
                      class="icon ion-logo-github"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Follow On github"
                    ></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/jack-a-conroy/"
                    target="blank"
                    ><i
                      class="icon ion-logo-linkedin"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Follow On linkedin"
                    ></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <!--footer col end-->
          <div class="col-lg-3 margin-btm-20">
            <div class="footer-col">
              <h3>contact info</h3>
              <p><i class="icon ion-md-home"></i> Chicago, IL</p>
              <p><i class="icon ion-md-call"></i> 999-900-9010</p>
              <p><i class="icon ion-ios-mail"></i> BrewTender@gmail.com</p>
            </div>
          </div>
          <!--footer col end-->
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-2 footer-logo">
              <router-link to="/">
                BrewTender
              </router-link>
            </div>
            <div class="col-md-5">
              <p>&copy; Copyright 2020.all Right Reserved</p>
            </div>
            <div class="col-md-5 ">
              <ul class="list-inline footer-nav">
                <li class="list-inline-item">
                  <router-link to="/">Home</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
