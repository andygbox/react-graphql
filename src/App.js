import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Courses from './Courses';
import './App.css';

const client = new ApolloClient({
  uri: "https://10m8x11rk9.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Courses />
    </div>
  </ApolloProvider>
)

export default App;
