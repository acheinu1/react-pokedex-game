import React, { Component } from 'react';
import Pokedex from "./children/pokedex"

class Parent extends Component {
    render () {
        return ( <div>
            <Pokedex />
        </div> );
    }
}

export default Parent;