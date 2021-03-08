import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ListItem } from './';
import { generations } from '../../utils';
import { pokemonListQuery } from '../../utils/queries';

const List = () => {
  const [pokemonIndex, setPokemonIndex] = useState([]);
  const { data, error, loading } = useQuery(pokemonListQuery, {
    variables: { offset: pokemonIndex[0], limit: pokemonIndex[1] },
  });

  useEffect(() => {
    setPokemonIndex(generations[0]);

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <>
      <div className="list-container">
        {!error ? (
          data.pokemons.map((pokemon) => (
            <ListItem key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <h3>Error</h3>
        )}
      </div>
    </>
  );
};

export default List;
