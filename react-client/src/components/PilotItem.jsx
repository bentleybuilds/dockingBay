import React from 'react';

const PilotItem = (props) => (
  <li onClick={()=>props.handleClick(props.pilot, props.cost)}>
    <button type="button">
      { props.pilot }
      Cost : {props.cost}
    </button>
    <img src={props.card}></img>
  </li>
)

export default PilotItem;