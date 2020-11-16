<template>
  <div class="users-show">
    <h2>Name - {{ user.name }}</h2>
    <p>Email - {{ user.email }}</p>
    <p>Location - {{ user.location }}</p>
    <router-link to="/user_tasting_notes"> Taste Profile </router-link><br />
    <h3>
      Preferred Tasting Notes
    </h3>
    <div v-for="tastingNote in user.tasting_notes">
      {{ tastingNote.keyword }}
    </div>
    <br />
    <h3>Upvoted Beers</h3>
    <div v-for="upvotedBeer in user.upvoted_beers">
      {{ upvotedBeer.name }}
    </div>
    <br /><br />

    <router-link v-bind:to="`/users/${user.id}/edit`">Edit user</router-link
    ><br /><router-link to="/user_tasting_notes"> Taste Profile </router-link
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
      upvotedBeers: [],
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
