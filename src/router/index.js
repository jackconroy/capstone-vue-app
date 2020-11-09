import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/UsersShow.vue";
import UsersEdit from "../views/UsersEdit.vue";
import BeersIndex from "../views/BeersIndex";
import BeersShow from "../views/BeersShow";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: "/users/:id", 
    name: "users-show", 
    component: UsersShow 
  },
  { 
    path: "/users/:id/edit", 
    name: "users-edit", 
    component: UsersEdit 
  },
  {
    path: '/beers',
    name: 'beers-index',
    component: BeersIndex
  },
  {
    path: '/beers/:id',
    name: 'beers-show',
    component: BeersShow
  },
  { 
    path: "/signup", 
    name: "signup", 
    component: Signup 
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
