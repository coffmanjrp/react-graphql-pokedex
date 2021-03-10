import { useContext } from 'react';
import { ToggleButtonGroup } from './';
import { PokemonContext } from '../../context/pokemon';

const LanguageButton = () => {
  const pokemonContext = useContext(PokemonContext);
  const { setLanguage } = pokemonContext;

  const handleLanguage = (e) => {
    localStorage.setItem('language', e.target.value);
    setLanguage(localStorage.getItem('language'));
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
