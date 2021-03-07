import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { List } from './components/list';
import './assets/css/App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>
  );
};

export default App;
