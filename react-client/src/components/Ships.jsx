import React from 'react';
// import Fs from 'fs';
// import Path from 'path';
import ShipItem from './ShipItem.jsx';
// const shipList = require('../../../data/pilots/first-order')

const Ships = (props) => (
  

  
  <div>
    <h1>Choose Your Ship</h1>
    <ul>
        {props.shipList.map((ship)=>(<ShipItem ship={ship} handleClick={props.handleClick}/>))}
    </ul>
    <button onClick={()=>props.handleBackClick("FactionView")}>Back!</button>
  </div>
)

export default Ships;