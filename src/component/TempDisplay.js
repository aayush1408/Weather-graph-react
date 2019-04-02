import React from 'react';

const TempDisplay = ({ data, name }) => {
  const tempData = data.map((item, key) => <li key={key} className="list-group-item">{item}</li>)
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h4>Next 5 days temperatures of {name} in K</h4>
      <ul style={{ padding: '20px' }} className="list-group">
        {
          tempData
        }
      </ul>
    </div>
  )
}

export default TempDisplay;