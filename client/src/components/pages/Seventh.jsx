import { useContext, useEffect } from 'react';
import { List } from 'components/list';
import { PokemonContext } from 'context/pokemon';

const Fifth = () => {
  const pokemonContext = useContext(PokemonContext);
  const { setGeneration, clearState } = pokemonContext;

  useEffect(() => {
    setGeneration(6);

    return () => clearState();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <List />
    </>
  );
};

export default Fifth;
