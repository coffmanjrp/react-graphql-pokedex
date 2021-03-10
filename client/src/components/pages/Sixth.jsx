import { useContext, useEffect } from 'react';
import { List } from '../list';
import { PokemonContext } from '../../context/pokemon';

const Sixth = () => {
  const pokemonContext = useContext(PokemonContext);
  const { setGeneration } = pokemonContext;

  useEffect(() => {
    setGeneration(5);

    return () => setGeneration(0);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <List />
    </>
  );
};

export default Sixth;
