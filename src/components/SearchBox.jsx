import React from 'react';

export default function SearchBox({ searchChange }) {
  return (
    <div className='pa2'>
      <input
        className='bg-lightest-blue pa3 ba b--green'
        type='search'
        placeholder='Search Robots'
        onChange={searchChange}
      />
    </div>
  );
}
