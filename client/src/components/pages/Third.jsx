import { useContext, useEffect } from 'react';
import { List } from 'components/list';
import { PokemonContext } from 'context/pokemon';

const Third = () => {
  const pokemonContext = useContext(PokemonContext);
  const { setGeneration, clearState } = pokemonContext;

  useEffect(() => {
    setGeneration(2);

    return () => clearState();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <List />
    </>
  );
};

export default Third;
