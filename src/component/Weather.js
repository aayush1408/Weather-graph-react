import React from 'react';
import axios from 'axios';
import Chart from './Chart';
import TempDisplay from './TempDisplay';
import { API_KEY } from '../config/keys';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: [],
      humidity: [],
      pressure: [],
      name: '',
      error: false
    }
  }

  static defaultProps = {
    lat: '30',
    long: '122'
  }

  componentDidMount() {
    this.fetchDetails();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.fetchDetails();
    }
  }

  fetchDetails = async () => {
    const { lat, long } = this.props;
    const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast/?appid=${API_KEY}`;
    const url = `${ROOT_URL}&lat=${lat}&lon=${long}&cnt=5`;
    try {
      const res = await axios(url);
      const name = res.data.city.name
      const temp = res.data.list.map(item => item.main.temp);
      const pressure = res.data.list.map(item => item.main.pressure);
      const humidity = res.data.list.map(item => item.main.humidity);
      this.setState({
        name,
        temp,
        humidity,
        pressure,
        error: false
      });
    }
    catch (e) {
      console.log(e);
      this.setState({
        error: true
      })
    }
  }

  renderGraph = () => {
    const { temp, pressure, humidity } = this.state;
    return (
      <tr key={temp}>
        <td><Chart data={temp} color="orange" units="K" /></td>
        <td><Chart data={pressure} color="blue" units="hPa" /></td>
        <td><Chart data={humidity} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <>
        {this.state.error ||
          <div>
            <TempDisplay data={this.state.temp} name={this.state.name} />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th> Temperature(K) </th>
                  <th> Pressure(hPa) </th>
                  <th> Humidity(%) </th>
                </tr>
              </thead>
              <tbody>{this.renderGraph()}</tbody>
            </table>
          </div>
        }
      </>
    );
  }
}
