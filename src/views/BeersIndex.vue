<template>
  <div class="beers-index">
    <input
      class="form-control col-7 mr-2"
      type="text"
      v-model="styleFilter"
      placeholder="Search by style"
      list="styles"
    />
    <datalist id="styles">
      <option v-for="beer in beers">{{ beer.style }}</option>
    </datalist>
    <button v-on:click="setSortAttribute('style')" class="btn btn-success mr-2">
      Sort by Style!
    </button>
    <button v-on:click="setSortAttribute('abv')" class="btn btn-success">
      Sort by ABV!
    </button>

    <h1>All Beers</h1>
    <div
      v-for="beer in orderBy(
        filterBy(beers, styleFilter, 'style'),
        sortAttribute
      )"
    >
      <h2>{{ beer.name }}</h2>
      <p>Total Score: {{ beer.upvotes }}</p>
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
      styleFilter: "",
      sortAttribute: "",
    };
  },
  created: function() {
    axios.get("/api/beers").then((response) => {
      console.log("beers index", response.data);
      this.beers = response.data;
    });
  },
  methods: {
    setSortAttribute: function(attribute) {
      this.sortAttribute = attribute;
    },
  },
};
</script>
