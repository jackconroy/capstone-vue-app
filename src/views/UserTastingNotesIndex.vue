<template>
  <div class="user-tasting-notes-index">
    <h1>Taste Profile</h1>
    <div v-for="userTastingNote in userTastingNotes">
      <h3>
        Beer Recommendations For Tasting Note - {{ userTastingNote.keyword }}
      </h3>
      <div v-for="recommendedBeer in userTastingNote.recommended_beers">
        <br />
        {{ recommendedBeer.name }} | {{ recommendedBeer.brewery }} |
        {{ recommendedBeer.style }} <br />
        <img v-bind:src="`${recommendedBeer.image}`" alt="NO IMAGE" /><br />
        <router-link v-bind:to="`/beers/${recommendedBeer.id}`">
          More Info!
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      userTastingNotes: [],
      recommendedBeers: [],
    };
  },
  created: function() {
    axios.get("/api/user_tasting_notes").then((response) => {
      console.log("user tasting notes index", response.data);
      this.userTastingNotes = response.data;
      this.user = response.data;
    });
  },
  methods: {
    getUserId: function() {
      return parseInt(localStorage.getItem("user_id"));
    },
  },
};
</script>
