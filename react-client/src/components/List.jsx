import React from 'react';

const List = (props) => (
  <div>
    <h1>Your List</h1>
    <ul>
        {props.list.map(pilot=>(<li>{pilot}<button>Remove</button></li>))}

    </ul>
    <h3>Total {props.total}/200</h3>
    <form>
        <label>
            Name Your List:
            <input type="text"/>
        </label>
        <submit>Save</submit>
    </form>
  </div>
)

export default List;