import React from 'react';

const ShipItem = (props) => (
  <li onClick={()=>props.handleClick(props.ship)}>
    { props.ship }
  </li>
)

export default ShipItem;