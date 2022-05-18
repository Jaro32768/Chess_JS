import React from 'react';
import Item from './Item';

export default function Navbar(props) {
  const items = [
    'FEN',
    '?',
    '?',
    '?',
    '?',
  ];

  return (
    <div className='navbar'>
      {Array.from({ length: items.length }, (_, index) => <Item key={index} type={items[index]} getFEN={props.getFEN} />)}
    </div>
  )
}
