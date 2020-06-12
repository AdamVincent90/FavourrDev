import fetch from "node-fetch";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";

let GRAPHQL_URI;
if (typeof location !== "undefined") {
  // hack to prevent ApolloError
  // Network error: Only absolute URLs are supported
  // in browser when reloading pages 
  GRAPHQL_URI = location.protocol + "//" + location.hostname + ":" + location.port + "/graphql";
} else {
  GRAPHQL_URI = "http://localhost:4001/graphql";
}
console.log("Init ApolloClient " + GRAPHQL_URI);

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    }
  },
  link: new HttpLink({
    uri: GRAPHQL_URI,
    fetch,
    errorLink
  }),
});

export default client;
