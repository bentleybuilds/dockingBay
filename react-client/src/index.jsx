import React from 'react';
import ReactDOM from 'react-dom';
import Factions from './components/Factions.jsx'
import Ships from './components/Ships.jsx'
const ShipData = require('../../data/allPilots.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipData: ShipData,
      view: 'FactionView',
      list:[]
    }
    
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
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


  renderView() {
    const {view} = this.state;

    if (view === 'FactionView') {
      return <Factions handleClick={this.handleFactionClick.bind(this)} factionList = {Object.keys(this.state.shipData)}/>;
    } if (view === 'ShipView') {
      return <Ships handleClick={this.handleShipClick.bind(this)} faction={this.state.chosenFaction}/>;
    }
    // else {
    //   return <Post selectedPost = {this.state.posts[this.state.view]}/>;
    // }
  }

  render () {
    return (
      <div>
        {this.renderView()}
      </div>
    )
    
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));