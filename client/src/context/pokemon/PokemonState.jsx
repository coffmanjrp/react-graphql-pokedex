import { useReducer } from 'react';
import { PokemonContext, pokemonReducer } from './';
import {
  SET_POKEMON_INDEX,
  SET_GENERATION,
  SET_LANGUAGE,
  CLEAR_STATE,
} from '../types';

const PokemonState = ({ children }) => {
  const initialState = {
    pokemonIndex: [],
    generation: 0,
    language: '',
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const setPokemonIndex = (index) =>
    dispatch({ type: SET_POKEMON_INDEX, payload: index });

  const setGeneration = (generation) =>
    dispatch({ type: SET_GENERATION, payload: generation });

  const setLanguage = (language) =>
    dispatch({ type: SET_LANGUAGE, payload: language });

  const clearState = () => {
    dispatch({ type: CLEAR_STATE });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonIndex: state.pokemonIndex,
        generation: state.generation,
        language: state.language,
        setPokemonIndex,
        setGeneration,
        setLanguage,
        clearState,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
