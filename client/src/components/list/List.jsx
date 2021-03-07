import { useQuery } from '@apollo/client';
import { pokemonListQuery } from '../../queries/queries';

const List = () => {
  const { data, error, loading } = useQuery(pokemonListQuery);

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
          <small>{pokemon.species.genera[7].genus}</small>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default List;
