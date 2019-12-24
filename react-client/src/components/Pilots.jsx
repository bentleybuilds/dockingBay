import React from 'react';
import PilotItem from './PilotItem.jsx';

const Pilots = (props) => (
  <div>
    <h1>Choose Your Pilot</h1>
    <ul>
        {props.pilotList.map((pilot)=>(<PilotItem key = {pilot.name} ship = {props.ship} pilot = {pilot} handleClick={props.handleClick}/>))}
    </ul>
    <button onClick={()=>props.handleBackClick("ShipView")}>Back!</button>
  </div>
)

export default Pilots;