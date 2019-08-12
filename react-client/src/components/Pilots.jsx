import React from 'react';
import PilotItem from './PilotItem.jsx';

const Pilots = (props) => (
  <div>
    <h1>Choose Your Pilot</h1>
    <ul>
        {props.pilotList.map((pilot)=>(<PilotItem pilot = {pilot.name} cost = {pilot.cost}card = {pilot.image} handleClick={props.handleClick}/>))}
    </ul>
    <button onClick={()=>props.handleBackClick("ShipView")}>Back!</button>
  </div>
)

export default Pilots;