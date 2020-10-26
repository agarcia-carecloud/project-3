import React, { Component } from "react";
import axios from "axios";
import Loading from "../Loading";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonDetails: null,
    };
  }

  componentDidMount() {
    //check if data loaded from api right:
    console.log({ props: this.props.match.params.pkmnId });

    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pkmnId}`
      )
      .then((pokemonFromApi) => {
        //check if details populate correctly
        console.log({ pkmn: pokemonFromApi.data });

        this.setState({ pokemonDetails: pokemonFromApi.data });
      })
      .catch((err) => console.log(`error getting pokemon details: ${err}`));
  }

  displayPokemonDetails() {
    const { pokemonDetails } = this.state;

    return (
      <div className="centerContent pokemonDetails">
        <h2>{pokemonDetails.name} Details</h2>
        <br />
        <div className="centerContent row-display">
          <img
            src={`${pokemonDetails.sprites.front_default}`}
            alt={`${pokemonDetails.name} front`}
          />
          <img
            src={`${pokemonDetails.sprites.back_default}`}
            alt={`${pokemonDetails.name} back`}
          />
          <img
            src={`${pokemonDetails.sprites.front_shiny}`}
            alt={`${pokemonDetails.name} shiny front`}
          />
          <img
            src={`${pokemonDetails.sprites.back_shiny}`}
            alt={`${pokemonDetails.name} shiny back`}
          />
        </div>
        <h3>Pokedex ID: {pokemonDetails.id}</h3>
        <ul className="centerContent">
          <h3>Type</h3>
          {pokemonDetails.types.map((ele, i) => {
            return <li key={i}>{ele.type.name}</li>;
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="details-page">
        {this.state.pokemonDetails ? this.displayPokemonDetails() : <Loading />}
      </div>
    );
  }
}
