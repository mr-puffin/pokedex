import React from "react";
import config from "../../config.json";
import "./pokecard.styles.css";

/**
 * Returns a Card HTML object
 * @param id {String} the id of the pokemon
 * @param name {String} name of the pokemon
 * @param imgUrl {String} url of the pokemon image displayed on the card
 * @param type {String} type of the pokemon
 * @param exp {Integer}
 */
const Pokecard = ({ id, name, type, base_experience }) => {
  return (
    <div className="pokecard">
      <h1 className="pokecard-title">{name}</h1>
      <div className="pokecard-image">
        <img src={getUrl(id)} alt={name} />
      </div>
      <div className="pokecard-data">Type: {type}</div>
      <div className="pokecard-data">EXP: {base_experience}</div>
    </div>
  );
};
function getUrl(id) {
  return `${config.apiUrl}/${id}.png`;
}
export default Pokecard;
