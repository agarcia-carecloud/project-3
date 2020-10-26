import React, { Component } from "react";
import axios from "axios";
import Loading from "../Loading";
import { Link } from "react-router-dom";

export default class PokeList extends Component {
  constructor() {
    super();
    this.state = {
      listOfPokemon: null,
      //   pkmnPic: null,
    };
  }

  componentDidMount() {
    this.getAllPokemon();
    // this.getPokemonSprites();
  }

  getAllPokemon() {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=251`
        //   {
        //     withCredentials: true,
        //   }
      )
      .then((pokemonFromApi) => {
        this.setState({ listOfPokemon: pokemonFromApi.data.results });
        console.log(pokemonFromApi.data.results);
      })
      .catch((err) => console.log({ err }));
  }

  //searching for method to display pokemon sprites alongside names but unable to due to API structure

  //   getPokemonSprites() {
  //     axios
  //       .get(
  //         `https://pokeapi.co/api/v2/pokemon/${Number(
  //           this.state.listOfPokemon.url.split("/")[6]
  //         )}`
  //       )
  //       .then((resultsFromApi) => {
  //         console.log(resultsFromApi.data);
  //         this.setState({ pkmnPic: resultsFromApi.data });
  //       })
  //       .catch((err) => {
  //         console.log(`error loading pokemon sprites from API: ${err}`);
  //       });
  //   }

  displayPokemonList() {
    const { listOfPokemon } = this.state;

    return listOfPokemon.map((pokemon, i) => {
      //   this.getPokemonSprites();
      return (
        <div key={i} className="list-item-box centerContent">
          {/* <div className="row-display">
            <img
              src={`${this.state.pkmnPic.sprites.front_default}`}
              alt={`${pokemon.name} front`}
            />
          </div> */}
          <Link to={`/details/${Number(pokemon.url.split("/")[6])}`}>
            {Number(pokemon.url.split("/")[6])}: {pokemon.name}
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="general-padding ">
        <h1>Pokemon List 001-251</h1>
        <hr />
        <br />
        <br />
        <div className="centerContent list-item-container">
          {this.state.listOfPokemon ? this.displayPokemonList() : <Loading />}
        </div>
      </div>
    );
  }
}
