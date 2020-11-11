<template>
  <div class="users-show">
    <h2>{{ user.name }}</h2>
    <p>{{ user.location }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.upvoted_beers }}</p>
    <p>{{ user.tasting_notes }}</p>
    <router-link v-bind:to="`/users/${user.id}/edit`">Edit user</router-link
    ><br />
    <router-link to="/">Back to the homepage!</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response.data);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>
