import React from 'react';
import FactionItem from './FactionItem.jsx';
// const factionList = require('../../../data/factions/factions.json')

const Factions = (props) => (
  <div>

    <h1>Choose Your Faction</h1>
    <ul>
        {props.factionList.map((faction)=>(<FactionItem key={faction} faction={faction} handleClick={props.handleClick}/>))}
    </ul>
  </div>
)

export default Factions;