import React, { Component } from 'react';
// import Pokedex from "./children/pokedex"
import Pokegame from "./children/pokegame"

class Parent extends Component {
    render () {
        return ( <div>
            {/* <Pokedex /> */}
            <Pokegame />
        </div> );
    }
}

export default Parent;