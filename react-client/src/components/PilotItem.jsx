import React from 'react';

const PilotItem = (props) => (
  <li>
      <div className="pliotHeader">
        <span className="pilotInitiative">{props.pilot.initiative}</span> { props.pilot.name } <br></br>
        {props.pilot.ability  || null}
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