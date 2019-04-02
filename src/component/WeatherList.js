import React from 'react';

const WeatherList = ({ temp, pressure, humidity }) => {
  return (
    <div style={{ padding: '8px' }}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th> Temperature(K) </th>
            <th> Pressure(hPa) </th>
            <th> Humidity(%) </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{temp}</td>
            <td>{pressure}</td>
            <td>{humidity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WeatherList;