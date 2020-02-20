import React from "react";
import Pokecard from "../pokecard/pokecard.component";
import "./pokedex.styles.css";

const Pokedex = ({ pokemons, totalExp, isWinner }) => {
  return (
    <div className="pokedex">
      {isWinner ? (
        <h1 className="winner">Winner :)</h1>
      ) : (
        <h1 className="looser">Loser :(</h1>
      )}
      <h2>Total exp: {totalExp ? totalExp : 0}</h2>

      <div className="pokedex-cards">
        {pokemons.map(p => (
          <Pokecard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
