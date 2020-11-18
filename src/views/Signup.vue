<template>
  <div class="signup">
    <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text">
          Create an account
        </h3>
      </div>
    </section>
    <!--page-tree end here-->
    <div class="space-70"></div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 ml-auto mr-auto">
          <div class="my-login-form">
            <form v-on:submit.prevent="submit()">
              <h4 class="text-uppercase">Sign up</h4>
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <hr />
              <div class="row">
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    placeholder="Name.."
                  />
                </div>
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    placeholder="Email.."
                  />
                </div>
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="location"
                    class="form-control"
                    v-model="location"
                    placeholder="Location.."
                  />
                </div>
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                    placeholder="Password."
                  />
                </div>
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="password"
                    class="form-control"
                    v-model="passwordConfirmation"
                    placeholder="Repeat password.."
                  />
                </div>
                <!-- <h3>
                  Tell us about your tastes!
                </h3>
                <br />
                <div v-for="tastingNote in tastingNotes">
                  <input
                    type="checkbox"
                    :id="tastingNote.id"
                    :value="tastingNote.id"
                    v-model="selectedTastingNoteIds"
                  />
                  <label :for="tastingNote.id">{{ tastingNote.keyword }}</label>
                </div> -->
                <h4 class="text-uppercase col-md-12 text-center ">
                  Tell us about your tastes!
                </h4>
                <br /><br />
                <hr />
                <div v-for="tastingNote in tastingNotes" class="col-md-4">
                  <ul class="list-unstyled shipping-method">
                    <li class="clearfix">
                      <input
                        type="checkbox"
                        :id="tastingNote.id"
                        :value="tastingNote.id"
                        v-model="selectedTastingNoteIds"
                      /><label :for="tastingNote.id"
                        >{{ tastingNote.keyword }}
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="col-md-12 text-center">
                  <button type="submit" class="btn theme-btn-color">
                    Sign up
                  </button>
                </div>
              </div>
              <hr />
              <div class="form-btm-link text-center">
                <router-link to="/login">Already have an account? </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="space-70"></div>
  </div>
  <!-- <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Location:</label>
        <input type="location" class="form-control" v-model="location" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input
          type="password"
          class="form-control"
          v-model="passwordConfirmation"
        />
      </div>
      Tell us about your tastes!
      <div v-for="tastingNote in tastingNotes">
        <input
          type="checkbox"
          :id="tastingNote.id"
          :value="tastingNote.id"
          v-model="selectedTastingNoteIds"
        />
        <label :for="tastingNote.id">{{ tastingNote.keyword }}</label>
      </div>
      <br /><br />

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      location: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      tastingNotes: [],
      selectedTastingNoteIds: [],
    };
  },
  created: function() {
    axios.get("/api/tasting_notes").then((response) => {
      this.tastingNotes = response.data;
      console.log(response.data);
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        location: this.location,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        tasting_note_ids: this.selectedTastingNoteIds,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
