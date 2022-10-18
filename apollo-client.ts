import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://practice.codebootcamp.co.kr/graphql",
  cache: new InMemoryCache(),
});

export default client;
