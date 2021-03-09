import { useReducer } from 'react';
import { PokemonContext, pokemonReducer } from './';
import { SET_POKEMON_INDEX, SET_LANGUAGE } from '../types';

const PokemonState = ({ children }) => {
  const initialState = {
    pokemonIndex: [],
    language: 'en',
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const setPokemonIndex = (generation) =>
    dispatch({ type: SET_POKEMON_INDEX, payload: generation });

  const setLanguage = (language) =>
    dispatch({ type: SET_LANGUAGE, payload: language });

  return (
    <PokemonContext.Provider
      value={{
        pokemonIndex: state.pokemonIndex,
        language: state.language,
        setPokemonIndex,
        setLanguage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
