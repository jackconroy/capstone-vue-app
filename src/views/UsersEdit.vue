<template>
  <div class="users-edit">
    <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text">
          Edit your information
        </h3>
      </div>
    </section>
    <!--page-tree end here-->
    <div class="space-70"></div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 ml-auto mr-auto">
          <div class="my-login-form">
            <form v-on:submit.prevent="updateUser(user)">
              <h4 class="text-uppercase text-center">Edit</h4>
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <hr />
              <div class="row">
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.name"
                    placeholder="Name.."
                  />
                </div>
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="email"
                    class="form-control"
                    v-model="user.email"
                    placeholder="Email.."
                  />
                </div>
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="location"
                    class="form-control"
                    v-model="user.location"
                    placeholder="Location.."
                  />
                </div>
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="password"
                    class="form-control"
                    v-model="user.password"
                    placeholder="Password."
                  />
                </div>
                <div class="col-md-6 margin-btm-20">
                  <input
                    type="password"
                    class="form-control"
                    v-model="user.passwordConfirmation"
                    placeholder="Repeat password.."
                  />
                </div>
                <hr />
                <h4 class="text-uppercase col-md-12 margin-btm-20">
                  Update your tastes!
                </h4>

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
                <div class="col-md-12 text-left">
                  <button type="submit" class="btn theme-btn-color">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="space-70"></div>
  </div>

  <!-- <div class="users-edit">
    <h1>Edit User</h1>
    <form v-on:submit.prevent="updateUser(user)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name: <input type="text" v-model="user.name" /><br />
      Email: <input type="text" v-model="user.email" /><br />
      Location: <input type="text" v-model="user.location" /><br />
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

      <input type="submit" value="Update" />
      <p>Or: Delete your profile! Please don't go!</p>
      <button v-on:click="destroyUser(user)">Delete Profile</button>
    </form>
  </div> -->
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
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
    axios.get("/api/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response.data);
      this.user = response.data;
      this.selectedTastingNoteIds = this.user.tasting_notes.map(
        (tastingNote) => tastingNote.id
      );
    });
  },
  methods: {
    updateUser: function(user) {
      var params = {
        name: this.user.name,
        email: this.user.email,
        location: this.user.location,
        password: this.user.password,
        passwordConfirmation: this.user.passwordConfirmation,
        tasting_note_ids: this.selectedTastingNoteIds,
      };
      axios
        .patch("/api/users/" + user.id, params)
        .then((response) => {
          console.log("users update", response.data);
          this.$router.push(`/users/${response.data.id}`);
        })
        .catch((error) => {
          console.log("users update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function(user) {
      if (confirm("Are you sure you want to delete this account?")) {
        axios.delete("/api/users/" + user.id).then((response) => {
          console.log("users destroy", response.data);
          localStorage.removeItem("jwt");
          localStorage.removeItem("user_id");
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
