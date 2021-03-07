import { useQuery } from '@apollo/client';
import { ListItem } from './';
import { pokemonListQuery } from '../../utils/queries';

const List = () => {
  const { data, error, loading } = useQuery(pokemonListQuery);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="list-container">
        {data.pokemons.map((pokemon) => (
          <ListItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default List;
