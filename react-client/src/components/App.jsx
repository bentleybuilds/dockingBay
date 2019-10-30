import React from 'react';
import ReactDOM from 'react-dom';
import Factions from './Factions.jsx';
import Ships from './Ships.jsx';
import Pilots from './Pilots.jsx';
import List from './List.jsx';
const ShipData = require('../../../data/allPilots.json');
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
  
    // componentDidMount(){
  
    // }
  
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
    handlePilotClick(config) {
      this.setState({
        list: this.state.list.concat(config),
        total: this.state.total + config.cost,
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
        <div key='app'>
          <div key = 'list'>
            <List list={this.state.list} total={this.state.total}/>
          </div>
          <div key = 'view'>
            {this.renderView()}
          </div>
        </div>
      )
      
      
    }
  }

  export default App;