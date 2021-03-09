import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Footer, Header } from './components/layouts';
import { About, Home, NotFound } from './components/pages';
import { PokemonState } from './context/pokemon';
import './assets/css/App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <PokemonState>
      <ApolloProvider client={client}>
        <Router>
          <Header title={'Pokédex'} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </ApolloProvider>
    </PokemonState>
  );
};

export default App;
