import React from 'react';

const Header = ({ children }) => {
  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>
      <h1>{children}</h1>
    </div>
  );
}

export default Header