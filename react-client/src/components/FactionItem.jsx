import React from 'react';

const FactionItem = (props) => (
  <li >
    <button type="button" onClick={()=>props.handleClick(props.faction)}>{ props.faction } </button>
  </li>
)

export default FactionItem;