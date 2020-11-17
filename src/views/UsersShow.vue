<template>
  <div class="users-show">
    <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text">My Profile</h3>
      </div>
    </section>
    <!--page-tree end here-->
    <div class="space-70"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="blog-post-section">
            <div class="blog-post-header">
              <h1>{{ user.name }}</h1>
              <div class="sidebar-box">
                <h4>Your Tasting Notes</h4>
                <ul v-for="tastingNote in user.tasting_notes" class="cat-list">
                  <li>
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
              </div>
            </div>
          </div>
        </div>
        <!--blog content-->
        <div class="col-lg-3">
          <div class="widget-search">
            <form class="search-form"></form>
          </div>
        </div>
        <!--sidebar-box-->
        <hr />
        <div class="sidebar-box">
          <h4>Your Tasting Notes</h4>
          <ul class="cat-list">
            <li>
              <a
                data-toggle="tooltip"
                data-placement="right"
                title=""
                data-original-title="10"
                class="hover-color"
                >Sports</a
              >
            </li>
          </ul>
        </div>
        <hr />
        <div class="sidebar-box">
          <h4>Your Details</h4>
          <p>
            Name
            <strong> - {{ user.name }}</strong
            ><br />
            Email <strong> - {{ user.email }} </strong>
            <br />
            Location
            <strong> - {{ user.location }}</strong
            ><br />
            Name
            <strong> - {{ user.name }}</strong
            ><br />
          </p>
        </div>
        <hr />
        <div class="sidebar-box">
          <h4>MOST RECENT BEER UPVOTES</h4>
          <div v-for="upvotedBeer in user.upvoted_beers" class="recent">
            <span>
              <img v-bind:src="upvotedBeer.image" class="img-fluid" alt="" />
            </span>
            {{ upvotedBeer.name }}
          </div>
        </div>
        <div class="clearfix"></div>
        <hr />
        <div class="sidebar-box"></div>
        <hr />
      </div>
    </div>
  </div>
  <!-- <div class="users-show">
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
  </div> -->
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
