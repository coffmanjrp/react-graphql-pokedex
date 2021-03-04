import { gql, useQuery } from '@apollo/client';

const POKEMON_QUERY = gql`
  query PokemonQuery {
    pokemons {
      id
      name
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

const List = () => {
  const { data, error, loading } = useQuery(POKEMON_QUERY);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      {data.pokemons.map((pokemon) => (
        <div>
          <p># {pokemon.id}</p>
          <h4>{pokemon.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default List;
