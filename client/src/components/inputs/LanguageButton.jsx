import { useContext } from 'react';
import { ToggleButtonGroup } from './';
import { PokemonContext } from '../../context/pokemon';

const LanguageButton = () => {
  const pokemonContext = useContext(PokemonContext);
  const { setLanguage } = pokemonContext;

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <ToggleButtonGroup
        labels={['En', 'Ja']}
        onClick={(e) => handleLanguage(e)}
      />
    </>
  );
};

export default LanguageButton;
