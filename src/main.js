//1
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import Vue from "vue";
import VueApollo from "vue-apollo";
import App from "./App";
import router from "./router";
import { GC_AUTH_TOKEN } from "./constants/settings";

Vue.config.productionTip = false;
//2
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "https://api.graph.cool/simple/v1/cjjq4d00e1ee40189opoksh4r"
});

//3
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem(GC_AUTH_TOKEN);
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  });

  return forward(operation);
});


const apolloClient = new ApolloClient({
  // 4
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

// 5
Vue.use(VueApollo);


//6
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading"
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // 7
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
});
