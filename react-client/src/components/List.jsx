import React from 'react';

const List = (props) => (
  <div>
    <h1>Your List</h1>
    <ul>
        {props.list.map(config=>(<li key = {config.id.toString()} >{config.pilotName} {config.cost}   <button onClick = {()=>props.handleDelete(config.id,config.cost)}>Remove</button></li>))}

    </ul>
    <h3>Total {props.total}/200</h3>
    {props.user &&
      <form>
        <label>
            Name Your List:
            <input id='listName' type="text"/>
        </label>
        <input type="button" value="Save" onClick={()=>props.handleAddList(props.user,document.getElementById('listName').value,props.faction,JSON.stringify(props.list))}></input>
    </form>}
  </div>
)

export default List;