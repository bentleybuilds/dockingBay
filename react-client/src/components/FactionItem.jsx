import React from 'react';

const FactionItem = (props) => (
  <li onClick={()=>props.handleClick(props.faction)}>
    { props.faction }
  </li>
)

export default FactionItem;