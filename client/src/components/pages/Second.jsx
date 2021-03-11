import { useContext, useEffect } from 'react';
import { List } from '../list';
import { PokemonContext } from '../../context/pokemon';

const Second = () => {
  const pokemonContext = useContext(PokemonContext);
  const { setGeneration, clearState } = pokemonContext;

  useEffect(() => {
    setGeneration(1);

    return () => clearState();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <List />
    </>
  );
};

export default Second;
