import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Footer, Header } from './components/layouts';
import {
  About,
  Home,
  NotFound,
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Seventh,
  Eighth,
} from './components/pages';
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
            <Route exact path="/" component={First} />
            <Route exact path="/about" component={About} />
            <Route exact path="/first" component={First} />
            <Route exact path="/second" component={Second} />
            <Route exact path="/third" component={Third} />
            <Route exact path="/fourth" component={Fourth} />
            <Route exact path="/fifth" component={Fifth} />
            <Route exact path="/sixth" component={Sixth} />
            <Route exact path="/seventh" component={Seventh} />
            <Route exact path="/eighth" component={Eighth} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </ApolloProvider>
    </PokemonState>
  );
};

export default App;
