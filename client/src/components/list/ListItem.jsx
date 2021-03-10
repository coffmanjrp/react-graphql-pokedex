import { useContext } from 'react';
import { typeColor } from '../../utils';
import { PokemonContext } from '../../context/pokemon';

const ListItem = ({ pokemon }) => {
  const pokemonContext = useContext(PokemonContext);
  const { language } = pokemonContext;
  const { id, name, species, sprites, types } = pokemon;

  return (
    <>
      <div
        className="pokemon-list-item"
        style={{ backgroundColor: typeColor[types[0].type.name] }}
      >
        <div className="img-container">
          <img src={sprites.front_default} alt={name} />
        </div>
        <div className="overview">
          <div className="number">No.{id}</div>
          <h3 className="name">
            {language === 'en'
              ? name.charAt(0).toUpperCase() + name.slice(1)
              : language === 'ja'
              ? species.names.find((name) => name.language.name === 'ja-Hrkt')
                  .name
              : 'This language is not available'}
          </h3>
          <p className="species">
            {language === 'en'
              ? species.genera.find((gen) => gen.language.name === 'en').genus
              : language === 'ja'
              ? species.genera.find((gen) => gen.language.name === 'ja-Hrkt')
                  .genus
              : 'This language is not available'}
          </p>
          <small className="type">
            {types.map((type, index) => (
              <span
                key={index}
                style={{ backgroundColor: typeColor[type.type.name] }}
              >
                {type.type.name}
              </span>
            ))}
          </small>
        </div>
      </div>
    </>
  );
};

export default ListItem;
