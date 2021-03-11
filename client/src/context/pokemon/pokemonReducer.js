import {
  SET_POKEMON_INDEX,
  SET_GENERATION,
  SET_LANGUAGE,
  CLEAR_STATE,
} from '../types';

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case SET_POKEMON_INDEX:
      return {
        ...state,
        pokemonIndex: action.payload,
      };
    case SET_GENERATION:
      return {
        ...state,
        generation: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case CLEAR_STATE:
      return {
        ...state,
        pokemonIndex: [],
        generation: null,
        language: '',
      };
    default:
      return state;
  }
};

export default pokemonReducer;
