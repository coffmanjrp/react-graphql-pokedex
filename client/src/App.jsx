import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Header } from './components/layouts';
import { List } from './components/list';
import './assets/css/App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <List />
    </ApolloProvider>
  );
};

export default App;
