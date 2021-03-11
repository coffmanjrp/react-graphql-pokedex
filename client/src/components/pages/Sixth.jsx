import { useContext, useEffect } from 'react';
import { List } from '../list';
import { PokemonContext } from '../../context/pokemon';

const Sixth = () => {
  const pokemonContext = useContext(PokemonContext);
  const { setGeneration, clearState } = pokemonContext;

  useEffect(() => {
    setGeneration(5);

    return () => clearState();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <List />
    </>
  );
};

export default Sixth;
