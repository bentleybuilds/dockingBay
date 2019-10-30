import React from 'react';

const PilotItem = (props) => (
  <li>
      <div>
        { props.pilot.name }
    </div>
    <div>
      Cost : {props.pilot.cost}
    </div>
    <img src={props.pilot.image}></img>
    <div>
      <button onClick={()=>props.handleClick(props.pilot)} type="button">Add Ship</button>
    </div>
  </li>
)

export default PilotItem;