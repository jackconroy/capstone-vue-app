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
  </div>
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
