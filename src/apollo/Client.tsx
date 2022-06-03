import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import {AuthOptions, AUTH_TYPE, createAuthLink} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';
import config from '../aws-exports';

interface IClient {
  children: React.ReactNode;
}

const url = config.aws_appsync_graphqlEndpoint;
const region = config.aws_appsync_region;
const auth: AuthOptions = {
  type: config.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
  apiKey: config.aws_appsync_apiKey,
};

const HttpLink = createHttpLink({uri: url});

const link = ApolloLink.from([
  createAuthLink({
    url,
    region,
    auth,
  }),
  createSubscriptionHandshakeLink({url, region, auth}, HttpLink),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const Client = ({children}: IClient) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
