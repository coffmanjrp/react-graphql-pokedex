import { gql } from '@apollo/client';

const pokemonListQuery = gql`
  query($offset: Int, $limit: Int) {
    pokemons(offset: $offset, limit: $limit) {
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
