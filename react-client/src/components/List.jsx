import React from 'react';

const List = (props) => (
  <div>
    <h1>Your List</h1>
    <ul>
        {props.list.map(config=>(<li key = {config.id.toString()} > {config.id} {config.pilotName} {config.cost}   <button onClick = {()=>props.handleDelete(config.id,config.cost)}>Remove</button></li>))}

    </ul>
    <h3>Total {props.total}/200</h3>
    <form>
        <label>
            Name Your List:
            <input type="text"/>
        </label>
        <input type="submit" value="Save"></input>
    </form>
  </div>
)

export default List;