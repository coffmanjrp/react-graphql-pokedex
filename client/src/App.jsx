import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { List } from './components/list';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Hello World!</h1>
      <List />
    </ApolloProvider>
  );
};

export default App;
