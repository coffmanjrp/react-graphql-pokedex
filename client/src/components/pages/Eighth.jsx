import { useContext, useEffect } from 'react';
import { List } from '../list';
import { PokemonContext } from '../../context/pokemon';

const Eighth = () => {
  const pokemonContext = useContext(PokemonContext);
  const { setGeneration } = pokemonContext;

  useEffect(() => {
    setGeneration(7);

    return () => setGeneration(0);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <List />
    </>
  );
};

export default Eighth;
