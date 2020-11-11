<template>
  <div class="users-show">
    <h2>Name - {{ user.name }}</h2>
    <p>Location - {{ user.location }}</p>
    <p>Email - {{ user.email }}</p>
    <p>Upvoted Beers - {{ user.upvoted_beers }}</p>
    <p>
      Preferred Tasting Notes -
    </p>
    <p v-for="tastingNote in user.tasting_notes">
      {{ tastingNote.keyword }}
    </p>

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
      tastingNotes: [],
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
