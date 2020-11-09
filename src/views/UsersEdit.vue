<template>
  <div class="users-edit">
    <h1>Edit User</h1>
    <form v-on:submit.prevent="updateUser(user)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name: <input type="text" v-model="user.name" /><br />
      Email: <input type="text" v-model="user.email" /><br />
      Location: <input type="text" v-model="user.location" /><br />
      <p>{{ user.tasting_notes }}</p>
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function(user) {
      var params = {
        name: user.name,
        email: user.email,
        location: user.location,
        url: user.url,
      };
      axios
        .patch("/api/users/" + user.id, params)
        .then((response) => {
          console.log("users update", response);
          this.$router.push("/users");
        })
        .catch((error) => {
          console.log("users update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
