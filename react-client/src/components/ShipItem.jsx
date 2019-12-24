import React from 'react';

const ShipItem = (props) => (
  <li className = 'card'>
    <img src={props.ship.icon} height='75'></img><button onClick={()=>props.handleClick(props.ship)} type="button">
      { props.ship.name }
    </button>
  </li>
)

export default ShipItem;