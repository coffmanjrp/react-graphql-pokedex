import { typeColor } from '../../utils';

const ListItem = ({ pokemon, language }) => {
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
              ? species.names[0].name
              : 'This language is not available'}
          </h3>
          <p className="species">
            {language === 'en'
              ? species.genera[7].genus
              : language === 'ja'
              ? species.genera[0].genus
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
