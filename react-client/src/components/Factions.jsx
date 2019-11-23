import React from 'react';
import FactionItem from './FactionItem.jsx';
// const factionList = require('../../../data/factions/factions.json')

const Factions = (props) => {
if(props.factionList != 'Loading'){
    return(
      <div>
        <h1>Choose Your Faction</h1>
        <ul>
          {props.factionList.map((faction)=>(<FactionItem key={faction._id} factionName={faction.name} factionIcon={faction.icon} handleClick={props.handleClick}/>))}
        </ul>
    </div>  
    )
    } else {
      return null
    }
}


export default Factions;