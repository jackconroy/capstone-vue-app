<template>
  <div class="beers-show">
    <h2>{{ beer.name }}</h2>
    <h3>{{ beer.brewery }}</h3>
    <img v-bind:src="beer.image" v-bind:alt="beer.name" /><br />
    <p>Style - {{ beer.style }}</p>
    <p>ABV - {{ beer.abv }}</p>
    <p>Upvotes - {{ beer.upvotes }}</p>
    <p>
      Tasting Notes - {{ beer.tasting_notes }} <br /><br />
      <router-link to="/beers">Back to all beers</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      beer: {},
      tastingNotes: [],
    };
  },
  created: function() {
    axios.get("/api/beers/" + this.$route.params.id).then((response) => {
      console.log("beers show", response);
      this.beer = response.data;
    });
  },
  methods: {},
};
</script>
