<template>
  <div class="beers-show">
    <h2>{{ beer.name }}</h2>
    <!-- <div v-if="isLoggedIn()"> -->
    <h3>Your Vote = {{ beer.my_vote }}</h3>

    <button v-if="beer.my_vote !== 1" v-on:click="upvote()">Upvote!</button>
    <button v-if="beer.my_vote !== -1" v-on:click="downvote()">
      Downvote
    </button>
    <!-- </div> -->
    <h3>{{ beer.brewery }}</h3>
    <img v-bind:src="beer.image" v-bind:alt="beer.name" /><br />
    <p>Style: {{ beer.style }}</p>
    <p>ABV: {{ beer.abv }}</p>
    <p>Total Score: {{ beer.upvotes }}</p>
    <p>
      Tasting Notes:
    </p>
    <p v-for="tastingNote in beer.tasting_notes">{{ tastingNote.keyword }}</p>
    <br />
    <router-link to="/beers">Back to all beers</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      beer: {},
      tastingNotes: [],
    };
  },
  created: function() {
    axios.get("/api/beers/" + this.$route.params.id).then((response) => {
      console.log("beers show", response.data);
      this.beer = response.data;
    });
  },
  methods: {
    isLoggedIn() {
      this.$parent.isLoggedIn();
    },
    vote(voteValue) {
      var params = {
        beer_id: this.beer.id,
        vote_value: voteValue,
      };
      if (this.beer.my_vote === 0) {
        axios.post("/api/votes", params).then((response) => {
          console.log("votes create", response.data);
          this.beer.my_vote = voteValue;
          this.beer.upvotes += voteValue;
        });
      } else {
        axios.patch("/api/votes/" + this.beer.id, params).then((response) => {
          console.log("update vote", response.data);
          this.beer.my_vote = voteValue;
          this.beer.upvotes += voteValue + voteValue;
          //This is to account for the double point value change, due to upvotes/downvotes
        });
      }
    },
    upvote() {
      this.vote(1);
    },
    downvote() {
      this.vote(-1);
    },
  },
};
</script>
