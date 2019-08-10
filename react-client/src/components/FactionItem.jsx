import React from 'react';

const FactionItem = (props) => (
  <div onClick={()=>props.handleClick(props.faction)}>
    { props.faction }
  </div>
)

export default FactionItem;