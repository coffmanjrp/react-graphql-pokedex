import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Footer, Header } from './components/layouts';
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
      <Footer />
    </ApolloProvider>
  );
};

export default App;
