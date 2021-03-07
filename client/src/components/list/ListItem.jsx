import React from 'react';

const ListItem = ({ pokemon }) => {
  const { id, name, species, sprites, types } = pokemon;

  return (
    <>
      <div className="pokemon-list-item">
        <div className="img-container">
          <img src={sprites.front_default} alt={name} />
        </div>
      </div>
      <div className="overview">
        <div className="number">No.{id}</div>
        <h3 className="name">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <p className="genus">{species.genera[7].genus}</p>
        <small className="type">
          {types.map((type, index) => (
            <span key={index}>{type.type.name}</span>
          ))}
        </small>
      </div>
    </>
  );
};

export default ListItem;
