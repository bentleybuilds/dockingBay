import React from 'react';

const PilotItem = (props) => (
  <li>
      <div>
        { props.pilot }
    </div>
    <div>
      Cost : {props.cost}
    </div>
    <img src={props.card}></img>
    <div>
      <button onClick={()=>props.handleClick(props.pilot, props.cost)} type="button">Add Ship</button>
    </div>
  </li>
)

export default PilotItem;