import React, { Component } from 'react';
import "../css/pokecard.css"
const pokeApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let addTwozeros = ( number ) => ( number < 1000 ? `00${number}`.slice( -3 ) : number )
// if (number < 1000){ return  (00 + number).slice(-3) else return number }

class Pokecard extends Component {
    render () {
        let imgSRC = `${pokeApi}${addTwozeros( this.props.id )}.png`;
        return (
            <div className="poke_card">
                <h2>{this.props.name}</h2>
                <img className="images" src={imgSRC} alt={this.props.name} />
                <p className="pokecard_data">TYPE:{this.props.type}</p>
                <p className="pokecard_data">EXP:{this.props.exp}</p>
            </div>
        );
    }
}

export default Pokecard;