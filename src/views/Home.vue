<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>
      Please signup and start rating our beers and get some personalized
      suggestions!
    </h2>
    <router-link to="/signup">Signup</router-link>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to BrewTender!",
    };
  },
  created: function() {},
  methods: {},
};
</script>
