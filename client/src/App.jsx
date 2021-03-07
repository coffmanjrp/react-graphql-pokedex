import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { List } from './components/list';
import './assets/css/App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Pokedex</h1>
      <List />
    </ApolloProvider>
  );
};

export default App;
