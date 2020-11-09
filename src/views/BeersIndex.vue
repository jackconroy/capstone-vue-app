<template>
  <div class="beers-index">
    <h1>All Beers</h1>
    <div v-for="beer in beers">
      <h2>{{ beer.name }}</h2>
      <img v-bind:src="beer.image" v-bind:alt="beer.name" /><br />
      <router-link v-bind:to="`/beers/${beer.id}`"> More Info! </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      beers: [],
    };
  },
  created: function() {
    axios.get("/api/beers").then((response) => {
      console.log("beers index", response);
      this.beers = response.data;
    });
  },
  methods: {},
};
</script>
