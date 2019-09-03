import React from 'react';

const ShipItem = (props) => (
  <button type="button">
    <li onClick={()=>props.handleClick(props.ship)}>
      { props.ship }
    </li>
  </button>
)

export default ShipItem;