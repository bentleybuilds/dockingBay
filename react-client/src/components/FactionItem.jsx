import React from 'react';

const FactionItem = (props) => {
  if(typeof(props.faction) !== 'string'){
    return(
      <li>
        <img src={props.factionIcon}></img> <button type="button" onClick={()=>props.handleClick(props.factionName)}>{ props.factionName } </button>
      </li>

    )
  }
}

export default FactionItem;