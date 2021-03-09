import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ListItem } from './';
import { Loading } from '../layouts';
import { generations } from '../../utils';
import { pokemonListQuery } from '../../utils/queries';

const List = () => {
  const [pokemonIndex, setPokemonIndex] = useState([]);
  const [language, setLanguage] = useState('en');
  const { data, error, loading } = useQuery(pokemonListQuery, {
    variables: { offset: pokemonIndex[0], limit: pokemonIndex[1] },
  });

  useEffect(() => {
    setPokemonIndex(generations[1]);
    setLanguage('ja');

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="list-container">
        {!error ? (
          data.pokemons.map((pokemon) => (
            <ListItem key={pokemon.id} pokemon={pokemon} language={language} />
          ))
        ) : (
          <h3>Error</h3>
        )}
      </div>
    </>
  );
};

export default List;
