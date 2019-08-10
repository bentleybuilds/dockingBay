import React from 'react';
import FactionItem from './FactionItem.jsx';
// const factionList = require('../../../data/factions/factions.json')

const Factions = (props) => (
  <div>

    <h1>Choose Your Faction</h1>
    <div>
        {props.factionList.map((faction)=>(<FactionItem faction = {faction} handleClick={props.handleClick}/>))}
    </div>
  </div>
)

export default Factions;