<template>
  <div class="beers-index">
    <h1>All Beers</h1>
    <div v-for="beer in beers">
      <h2>{{ beer.name }}</h2>
      <p>Upvotes: {{ beer.upvotes }}</p>
      <h3>{{ beer.brewery }}</h3>
      <p>{{ beer.style }} | {{ beer.abv }}</p>
      <div v-for="tastingNote in beer.tasting_notes">
        {{ tastingNote.keyword }}
      </div>
      <br />
      <img v-bind:src="beer.image" v-bind:alt="beer.name" /><br />
      <router-link v-bind:to="`/beers/${beer.id}`"> More Info! </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      beers: [],
      tastingNotes: [],
    };
  },
  created: function() {
    axios.get("/api/beers").then((response) => {
      console.log("beers index", response.data);
      this.beers = response.data;
    });
  },
  methods: {},
};
</script>
