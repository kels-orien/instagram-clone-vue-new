import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Posts from "@/components/Posts";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "Posts",
      component: Posts
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
})
