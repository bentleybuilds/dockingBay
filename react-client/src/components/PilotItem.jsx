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
      <button onClick={()=>props.handleClick({pilotName:props.pilot.name, cost:props.pilot.cost})} type="button">Add Ship</button>
    </div>
  </li>
)

export default PilotItem;