import React from 'react';
import ReactDOM from 'react-dom';
import Factions from './components/Factions.jsx'
import Ships from './components/Ships.jsx'
import Pilots from './components/Pilots.jsx'
import List from './components/List.jsx'
const ShipData = require('../../data/allPilots.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipData: ShipData,
      view: 'FactionView',
      list:[],
      total:0
    }
    
  }


  handleFactionClick(option) {
    this.setState({
      view: 'ShipView',
      chosenFaction: option
    })
  }
  handleShipClick(option) {
    this.setState({
      view: 'PilotView',
      chosenShip: option
    })
  }
  handlePilotClick(pilot, cost) {
    this.setState({
      list: this.state.list.concat(pilot),
      total: this.state.total + cost,
      view: "ShipView"
    })
  }
  handleBackClick(newView) {
    this.setState({
      view: newView
    })
  }


  renderView() {
    const {view} = this.state;

    if (view === 'FactionView') {
      return <Factions handleClick={this.handleFactionClick.bind(this)} factionList = {Object.keys(this.state.shipData)}/>;
    } if (view === 'ShipView') {
      return <Ships handleClick={this.handleShipClick.bind(this)} handleBackClick={this.handleBackClick.bind(this)} shipList={Object.keys(this.state.shipData[this.state.chosenFaction])}/>;
    } if (view === 'PilotView') {
      return <Pilots handleClick={this.handlePilotClick.bind(this)} handleBackClick={this.handleBackClick.bind(this)} pilotList={this.state.shipData[this.state.chosenFaction][this.state.chosenShip].pilots}/>;
    }
    // else {
    //   return <Post selectedPost = {this.state.posts[this.state.view]}/>;
    // }
  }

  render () {
    return (
      <div>
        <div>
          <List list={this.state.list} total={this.state.total}/>
        </div>
        <div>
          {this.renderView()}
        </div>
      </div>
    )
    
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));