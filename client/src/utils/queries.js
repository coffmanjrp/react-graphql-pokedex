import { gql } from '@apollo/client';

const pokemonListQuery = gql`
  query($offset: Int, $limit: Int) {
    pokemons(offset: $offset, limit: $limit) {
      id
      name
      species {
        names {
          name
          language {
            name
          }
        }
        genera {
          genus
          language {
            name
          }
        }
      }
      sprites {
        front_default
      }
      types {
        name
        names {
          name
          language {
            name
          }
        }
      }
    }
  }
`;

export { pokemonListQuery };
