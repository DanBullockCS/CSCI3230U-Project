import Vue from "vue";
import VueApollo from "vue-apollo";
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(VueApollo);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri: "http://localhost:8081/graphql",
  cache,
  resolvers: {}
});

export default new VueApollo({
  defaultClient: apolloClient,
});
