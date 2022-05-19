import React from 'react';
import Item from './Item';

export default function Navbar() {
  return (
    <div className='navbar'>
        {Array.from({length: 5}, (_, index) => <Item key={index} />)}
    </div>
  )
}
