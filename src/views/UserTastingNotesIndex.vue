<template>
  <div class="user-tasting-notes-index">
    <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text"></h3>
      </div>
    </section>
    <div class="container">
      <div class="space-70"></div>
      <h3 class="heading-sec"></h3>

      <div v-for="userTastingNote in userTastingNotes">
        <h3>Beer Recommendations - {{ userTastingNote.keyword }}</h3>

        <div class="row product_grid">
          <div
            class="col-md-3 product_item"
            v-for="recommendedBeer in userTastingNote.recommended_beers"
          >
            <div class="product-thumb">
              <router-link v-bind:to="`/beers/${recommendedBeer.id}`">
                <img
                  v-bind:src="recommendedBeer.image"
                  alt=""
                  class="img-responsive"
              /></router-link>
              <div class="product-thumb-overlay">
                <p>
                  <router-link v-bind:to="`/beers/${recommendedBeer.id}`">
                    More details</router-link
                  >
                </p>
              </div>
            </div>
            <div class="product-desc">
              <h3>
                <router-link v-bind:to="`/beers/${recommendedBeer.id}`"
                  >{{ recommendedBeer.brewery }} <br />
                  Style - {{ recommendedBeer.style }}</router-link
                >
              </h3>
              <p>{{ recommendedBeer.name }}</p>
              <small>ABV: {{ recommendedBeer.abv }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="user-tasting-notes-index">
    <h1>Taste Profile {{ user.name }}</h1>
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
  </div> -->
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
