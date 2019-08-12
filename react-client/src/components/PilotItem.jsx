import React from 'react';

const PilotItem = (props) => (
  <li onClick={()=>props.handleClick(props.pilot, props.cost)}>
    <div>{ props.pilot }</div>
    <div>Cost : {props.cost}</div>
    <img src={props.card}></img>
  </li>
)

export default PilotItem;