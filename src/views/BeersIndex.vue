<template>
  <div class="beers-index">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>BrewTender</title>
      <!--plugins-->
      <link href="/assets/css/plugins/plugins.css" rel="stylesheet" />
      <!--cube portfolio-->
      <link
        href="/assets/cubeportfolio/css/cubeportfolio.min.css"
        rel="stylesheet"
      />
      <!--Custom css-->
      <link href="/assets/css/style.css" rel="stylesheet" />
    </head>

    <!-- <datalist id="styles">
      <option v-for="beer in beers">{{ beer.style }}</option>
    </datalist> -->
    <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text"></h3>
      </div>
    </section>

    <div class="space-70"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="cbp-l-filters-work">
            <div
              class="cbp-filter-item cbp-filter-item-active"
              v-on:click="setSortAttribute('abv')"
            >
              Sort by abv
            </div>
            <div
              class="cbp-filter-item cbp-filter-item-active"
              v-on:click="setSortAttribute('style')"
            >
              Sort by style
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="sidebar-box">
            <div class="widget-search">
              <div class="search-form">
                <input
                  type="text"
                  class="form-control"
                  v-model="searchFilter"
                  placeholder="Search brewery..."
                />
                <i
                  class="icon ion-md-search"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="hit enter to search"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row product_grid">
        <div
          class="col-md-4 product_item"
          v-for="beer in orderBy(
            filterBy(beers, searchFilter, 'brewery'),
            sortAttribute
          )"
        >
          <div class="product-thumb">
            <router-link v-bind:to="`/beers/${beer.id}`">
              <img v-bind:src="beer.image" alt="" class="img-responsive"
            /></router-link>
            <div class="product-thumb-overlay">
              <p>
                <router-link v-bind:to="`/beers/${beer.id}`">
                  More details</router-link
                >
              </p>
            </div>
          </div>

          <div class="product-desc">
            <h3>
              <router-link v-bind:to="`/beers/${beer.id}`">{{
                beer.brewery
              }}</router-link>
              <br />
              Style - {{ beer.style }}
            </h3>
            <p>{{ beer.name }}</p>

            ABV: {{ beer.abv }}
          </div>
        </div>
      </div>

      <div class="space-40"></div>
      <div class="clearfix">
        <div class="float-right">
          <nav aria-label="Page navigation example"></nav>
        </div>
      </div>
    </div>
  </div>
  <!-- <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text"></h3>
      </div>
    </section>
    <div class="space-70"></div>
    <div class="container">
      <div id="js-filters-awesome-work" class="cbp-l-filters-work">
        <div data-filter="*" class="cbp-filter-item-active cbp-filter-item">
          SHOW ALL
        </div>
        <div data-filter=".identity" class="cbp-filter-item">
          {{ tastingNote }}
          <div class="cbp-filter-counter"></div>
        </div>
      </div>
    </div> -->
  <!-- <input
      class="form-control col-7 mr-2"
      type="text"
      v-model="styleFilter"
      placeholder="Search by style"
      list="styles"
    /> -->

  <!-- <datalist id="styles">
      <option v-for="beer in beers">{{ beer.style }}</option>
    </datalist>
    <button v-on:click="setSortAttribute('style')" class="btn btn-success mr-2">
      Sort by Style!
    </button>
    <button v-on:click="setSortAttribute('abv')" class="btn btn-success">
      Sort by ABV!
    </button> -->

  <!-- <div
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
    </div> -->

  <!-- <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="heading-sec">Beers</h3>
        </div>
      </div>

      <div
        v-for="beer in orderBy(
          filterBy(beers, styleFilter, 'style'),
          sortAttribute
        )"
      >
        <div class="row mb-5">
          <div class="col-md-4 col-sm-6 margin-btm-40">
            <div class="portfolio-sec">
              <div class="portfolio-thumnail">
                <router-link v-bind:to="`/beers/${beer.id}`">
                  <img v-bind:src="beer.image" class="img-fluid" alt="" />
                </router-link>
              </div>
              <div class="portfolio-desc text-center">
                <h4 class="portfolio-post-title">{{ beer.name }}</h4>
                <span class="portfolio-post-cat">{{ beer.brewery }}</span>
                <h4>
                  <router-link
                    v-bind:to="`/beers/${beer.id}`"
                    class="btn theme-btn-default btn-lg"
                    >More detail</router-link
                  >
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
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
      searchFilter: "",
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
