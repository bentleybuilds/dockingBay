import React from 'react';
import ReactDOM from 'react-dom';
import Factions from './Factions.jsx';
import Ships from './Ships.jsx';
import Pilots from './Pilots.jsx';
import List from './List.jsx';
import axios from 'axios'

// const ShipData = require('../../../data/allPilots.json');

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // shipData: ShipData,
        view: 'FactionView',
        list:[],
        total:0
      }
      
    }
  
    componentDidMount(){
      this.loadFactions()
      .then(
        (factions) => {
          this.setFactions(factions)
        }
      )
    }
  
    loadFactions(){
        console.log('load factions invoked')
        return axios.get('http://localhost:3000/factions')
        .then((response) => response.data);
    }

    setFactions(factionList){
      this.setState({
        factions:factionList
      })
    }
    
    loadShips(faction){
      console.log('load ships invoked ', faction)
      return axios.get(`http://localhost:3000/ships/${faction}`)
      .then((response)=>response.data)
    }

    setShips(shipList){
      this.setState({
        ships:shipList
      })
    }
    removeConfig(id,cost){
      this.setState(state => {
        const list = state.list.filter(item => item.id !== id);
        const total = state.total - cost
        return {
          list,
          total
        };
      });
    };

    handleFactionClick(option) {
      console.log('handleFactionClick invoked option ', option)
       this.setState({
        view: 'ShipView',
        chosenFaction: option
      },()=>{
      this.loadShips(this.state.chosenFaction)
      .then(
        (ships) => {
          this.setShips(ships)
        }
      )
      }
      )
    }

    handleShipClick(option) {
      this.setState({
        view: 'PilotView',
        chosenShip: option
      })
    }
    handlePilotClick(config) {
      if(this.state.list.length){
        config.id = this.state.list[this.state.list.length-1].id + 1
      } else {
        config.id = 1;
      }
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
        return <Factions handleClick={this.handleFactionClick.bind(this)} factionList = {this.state.factions || 'Loading'}/>;
      } if (view === 'ShipView') {
        return <Ships handleClick={this.handleShipClick.bind(this)} handleBackClick={this.handleBackClick.bind(this)} shipList={this.state.ships || 'Loading'}/>;
      } if (view === 'PilotView') {
        return <Pilots handleClick={this.handlePilotClick.bind(this)} handleBackClick={this.handleBackClick.bind(this)} pilotList={this.state.chosenShip && this.state.chosenShip.pilots || 'Loading'}/>;
      }
      // else {
      //   return <Post selectedPost = {this.state.posts[this.state.view]}/>;
      // }
    }
  
    render () {
      return ( 
        <div key='app'>
          <div key = 'list'>
            <List list={this.state.list} total={this.state.total} handleDelete={this.removeConfig.bind(this)}/>
          </div>
          <div key = 'view'>
            {this.renderView()}
          </div>
        </div>
      )
      
      
    }
  }

  export default App;