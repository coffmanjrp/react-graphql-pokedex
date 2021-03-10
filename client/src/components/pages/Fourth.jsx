import { useContext, useEffect } from 'react';
import { List } from '../list';
import { PokemonContext } from '../../context/pokemon';

const Third = () => {
  const pokemonContext = useContext(PokemonContext);
  const { setGeneration } = pokemonContext;

  useEffect(() => {
    setGeneration(3);

    return () => setGeneration(0);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <List />
    </>
  );
};

export default Third;
