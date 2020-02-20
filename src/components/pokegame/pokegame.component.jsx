import React, { Component } from "react";
import config from "../../config.json";
import Pokedex from "../pokedex/pokedex.component";

const ALL_POKEMONS = config.pokemons;

class Pokegame extends Component {
  state = {
    deck1: [],
    deck2: []
  };

  componentDidMount() {
    this.dealHands();
  }

  dealHands() {
    let fullDeck = [...ALL_POKEMONS];
    let { deck1, deck2 } = this.state;
    for (let i = 0; i <= fullDeck.length / 2; i++) {
      let randIndex = Math.floor(Math.random() * fullDeck.length);
      let randPokemon = fullDeck.splice(randIndex, 1)[0];
      deck1.push(randPokemon);
      randIndex = Math.floor(Math.random() * fullDeck.length);
      randPokemon = fullDeck.splice(randIndex, 1)[0];
      deck2.push(randPokemon);
    }

    this.setState({ deck1, deck2 });
  }

  getTotalExp(pokemons) {
    return pokemons.length === 0
      ? 0
      : pokemons.reduce((exp, pokemon) => (exp += pokemon.base_experience), 0);
  }

  render() {
    const { deck1, deck2 } = this.state;
    const deck1Exp = this.getTotalExp(deck1);
    const deck2Exp = this.getTotalExp(deck2);
    return (
      <div>
        <Pokedex
          pokemons={deck1}
          totalExp={deck1Exp}
          isWinner={deck1Exp >= deck2Exp}
        />
        <Pokedex
          pokemons={deck2}
          totalExp={deck2Exp}
          isWinner={deck2Exp >= deck1Exp}
        />
      </div>
    );
  }
}

export default Pokegame;
