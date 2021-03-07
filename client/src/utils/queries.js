import { gql } from '@apollo/client';

const pokemonListQuery = gql`
  {
    pokemons {
      id
      name
      species {
        genera {
          genus
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export { pokemonListQuery };
