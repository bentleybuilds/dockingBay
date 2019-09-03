import React from 'react';

const ShipItem = (props) => (
  <li>
    <button onClick={()=>props.handleClick(props.ship)} type="button">
      { props.ship }
    </button>
  </li>
)

export default ShipItem;