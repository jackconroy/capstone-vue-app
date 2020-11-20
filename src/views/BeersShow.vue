<template>
  <!-- <div class="beers-show">
    <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text">
          {{ beer.name }}
        </h3>
      </div>
    </section>
    
    <div class="space-70"></div>
    <div class="container portfolio-details">
      <div class="row">
        <div class="col-md-8 portfolio-single-slide margin-btm-20">
          <div id="js-grid-slider-thumbnail" class="cbp ">
            <div class="cbp-item">
              <div class="cbp-caption">
                <div class="cbp-caption-defaultWrap">
                  <img v-bind:src="beer.image" v-bind:alt="beer.name" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space-20"></div>
        <div class="portfolio-single-desc">
          <h4 class="my-4">{{ beer.name }} - {{ beer.brewery }}</h4>
        </div>
        
      </div>
      <div class="col-md-4">
        <div class="portfolio-side-bar">
          <p><strong>Style:</strong> {{ beer.style }}</p>
          <p><strong>ABV:</strong> {{ beer.abv }}</p>
          <p><strong>Total Score:</strong> {{ beer.upvotes }}</p>
          <p>
            <strong>Tasting Notes:</strong>
          </p>
          <div v-for="tastingNote in beer.tasting_notes">
            {{ tastingNote.keyword }}
          </div>

          <br />
          <p>
            <button
              v-if="beer.my_vote !== 1"
              v-on:click="upvote()"
              class="btn btn-radius theme-btn-color"
            >
              Upvote!
            </button>
            <button
              v-if="beer.my_vote !== -1"
              v-on:click="downvote()"
              class="btn btn-radius theme-btn-color"
            >
              Downvote
            </button>
          </p>
        </div>
      </div>
    </div>
  </div> -->
  <div class="beers-show">
    <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text"></h3>
      </div>
    </section>
    <div class="space-70"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-5 ml-auto">
          <div id="js-grid-slider-thumbnail" class="cbp ">
            <div class="cbp-item">
              <div class="cbp-caption">
                <div class="cbp-caption-defaultWrap">
                  <img v-bind:src="beer.image" alt="" />
                  <div class="space-30"></div>
                  <div>
                    This is some text. Eventually we'd love to put a beer
                    description here! With access to third party APIs this is
                    something we'd love to see in a future version of
                    BrewTender!
                    <br /><br /><button
                      v-if="beer.my_vote !== 1"
                      v-on:click="upvote()"
                      class="btn btn-radius theme-btn-color"
                    >
                      Upvote!
                    </button>
                    <button
                      v-if="beer.my_vote !== -1"
                      v-on:click="downvote()"
                      class="btn btn-radius theme-btn-color"
                    >
                      Downvote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 mr-auto">
          <div class="product-detail">
            <h3>{{ beer.name }}</h3>
            <span class="price">{{ beer.brewery }}</span>
            <ul class="list-unstyled text-left product-extra-info">
              <li><span>Style</span> {{ beer.style }}</li>
              <li><span>ABV</span> {{ beer.abv }}</li>
              <li><span>Score</span> {{ beer.my_vote }}</li>
              <div class="space-30"></div>
              <code>Tasting Notes:</code>
              <ul class="cat-list col-md-12">
                <li v-for="tastingNote in beer.tasting_notes">
                  <a
                    data-toggle="tooltip"
                    data-placement="right"
                    title=""
                    data-original-title="10"
                    class="hover-color"
                    >{{ tastingNote.keyword }}</a
                  >
                </li>
              </ul>
            </ul>

            <div class="space-30"></div>

            <router-link to="/beers">
              Back to All Beers
            </router-link>
          </div>
        </div>
      </div>
      <hr />
      <div class="space-50"></div>
    </div>
  </div>

  <!-- <h2>{{ beer.name }}</h2> -->
  <!-- <div v-if="isLoggedIn()"> -->
  <!-- <h3>Your Vote = {{ beer.my_vote }}</h3>

    <button v-if="beer.my_vote !== 1" v-on:click="upvote()">Upvote!</button>
    <button v-if="beer.my_vote !== -1" v-on:click="downvote()">
      Downvote
    </button> -->
  <!-- </div> -->
  <!-- <h3>{{ beer.brewery }}</h3>
    <img v-bind:src="beer.image" v-bind:alt="beer.name" /><br />
    <p>Style: {{ beer.style }}</p>
    <p>ABV: {{ beer.abv }}</p>
    <p>Total Score: {{ beer.upvotes }}</p>
    <p>
      Tasting Notes:
    </p>
    <p v-for="tastingNote in beer.tasting_notes">{{ tastingNote.keyword }}</p>
    <br />
    <router-link to="/beers">Back to all beers</router-link> -->
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
