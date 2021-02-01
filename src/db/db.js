import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: "https://y3db9uqb67.execute-api.sa-east-1.amazonaws.com/dev/graphql"
  });