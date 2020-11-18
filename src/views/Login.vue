<template>
  <div class="login">
    <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text">
          Login into your account
        </h3>
      </div>
    </section>
    <div class="space-70"></div>

    <div class="container">
      <div class="row">
        <div class="col-lg-6  ml-auto mr-auto">
          <div class="my-login-form">
            <form v-on:submit.prevent="submit()">
              <h4 class="text-uppercase">Login</h4>
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <hr />
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  placeholder="Email.."
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  placeholder="Password.."
                />
              </div>
              <div class=" text-right">
                <button type="submit" class="btn theme-btn-color">Login</button>
              </div>
              <hr />
              <div class="form-btm-link text-center">
                <router-link to="/signup">Create new account</router-link>
              </div>
            </form>

            <!--login form end-->
          </div>
        </div>
      </div>
    </div>
    <div class="space-70"></div>
    <!-- <div class="login">
    <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text">
          Login into your account
        </h3>
      </div>
    </section>
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push(`/users/${response.data.user_id}`);
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
    getUserId: function() {
      return parseInt(localStorage.getItem("user_id"));
    },
  },
};
</script>
