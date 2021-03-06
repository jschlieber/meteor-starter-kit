import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import { registerGqlTag } from 'apollo-client/gql';
registerGqlTag();

import App from '/imports/ui/App';

const client = new ApolloClient(meteorClientConfig());

Meteor.startup(() => {
  render(<ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app'));
});
