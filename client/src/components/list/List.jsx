import { useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ListItem } from './';
import { Loading } from '../layouts';
import { generations } from '../../utils';
import { pokemonListQuery } from '../../utils/queries';
import { PokemonContext } from '../../context/pokemon';

const List = () => {
  const pokemonContext = useContext(PokemonContext);
  const {
    pokemonIndex,
    setPokemonIndex,
    language,
    setLanguage,
  } = pokemonContext;
  const { data, error, loading } = useQuery(pokemonListQuery, {
    variables: { offset: pokemonIndex[0], limit: pokemonIndex[1] },
  });

  useEffect(() => {
    setPokemonIndex(generations[1]);
    setLanguage('en');

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
