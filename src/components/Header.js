import React from 'react';

function Header({ openCart }) {
  return (
    <header style={headerStyle}>
      <h1>Medical Shop Management</h1>
      <button style={cartButtonStyle} onClick={openCart}>
        Cart
      </button>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  backgroundColor: '#333',
  color: '#fff',
};

const cartButtonStyle = {
  padding: '1rem 2rem',
  backgroundColor: '#ff9900',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Header;
