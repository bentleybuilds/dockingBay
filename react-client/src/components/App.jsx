import React from 'react';
import ReactDOM from 'react-dom';
import User from './User.jsx'
import Factions from './Factions.jsx';
import Ships from './Ships.jsx';
import Pilots from './Pilots.jsx';
import List from './List.jsx';
import axios from 'axios'
import SignIn from './SignIn.jsx';

// const ShipData = require('../../../data/allPilots.json');

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signedIn: false,
        signInScreen: false,
        user: null,
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
  
    saveList(user, name, faction, list){
      console.log('save list invoked')
      return axios.post(`http://localhost:8888/lists/${user}/${name}/${faction}/${list}`)
      .then((response)=>response.data)
    }

    async loadFactions(){
      console.log('load factions invoked')
      const response = await axios.get('http://localhost:8888/factions');
      return response.data;
    }

    setFactions(factionList){
      this.setState({
        factions:factionList
      })
    }
    
    async loadShips(faction){
      console.log('load ships invoked ', faction)
      const response = await axios.get(`http://localhost:8888/ships/${faction}`);
      return response.data;
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
      })
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
    
    handleCancelClick() {
      this.setState({
        signInScreen: false
      })
    }

    handleSignInClick(userName) {
      this.setState({
        signInScreen: !this.state.signInScreen,
        signedIn:true,
        user:userName
      })
    }
    handleLogInClick() {
      this.setState({
        signInScreen:!this.state.signInScreen
      })
    }

    handleSignOutClick() {
      this.setState({
        signedIn:false,
        user:null
      })
    }

    renderView() {
      const {view} = this.state;
  
      if (view === 'FactionView') {
        return <Factions handleClick={this.handleFactionClick.bind(this)} factionList = {this.state.factions || 'Loading'}/>;
      } if (view === 'ShipView') {
        return <Ships handleClick={this.handleShipClick.bind(this)} handleBackClick={this.handleBackClick.bind(this)} shipList={this.state.ships || 'Loading'}/>;
      } if (view === 'PilotView') {
        return <Pilots handleClick={this.handlePilotClick.bind(this)} handleBackClick={this.handleBackClick.bind(this)} ship={this.state.chosenShip && this.state.chosenShip || null} pilotList={this.state.chosenShip && this.state.chosenShip.pilots || 'Loading'}/>;
      }
    }
  
    render () {
      return ( 
        <div>
          <div>
            {this.state.signedIn && <User userName={this.state.user} handleSignOutClick={this.handleSignOutClick.bind(this)}/> || <button type='button' onClick={()=>this.handleLogInClick()}>Sign in</button>}
          </div>
          <div>
            {this.state.signInScreen && <SignIn handleSignIn={this.handleSignInClick.bind(this)} handleCancel={this.handleCancelClick.bind(this)}/>}
          </div>
          <div>
            <List list={this.state.list} total={this.state.total} handleDelete={this.removeConfig.bind(this)} handleAddList={this.saveList.bind(this)} user={this.state.user} faction={this.state.chosenFaction}/>
          </div>
          <div>
            {this.renderView()}
          </div>
        </div>
      )
      
      
    }
  }

  export default App;