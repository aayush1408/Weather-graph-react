import React, { Component } from 'react';
import './App.css';
import LocationSearchInput from './component/LocationSearchInput';
import Weather from './component/Weather';
import Header from './component/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: ''
    }
  }
  // getting the coordinates from the child component
  getCoordinates = (lat, long) => {
    this.setState({
      lat, long
    });
  }
  render() {
    const { lat, long } = this.state
    return (
      <div className="App">
        <Header>
          Classplus
        </Header>
        <LocationSearchInput getCoordinates={this.getCoordinates} />
        {(lat === '' && long === '') ? <Weather /> : <Weather lat={lat} long={long} />}
      </div>
    );
  }
}

export default App;
