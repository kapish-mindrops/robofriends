import React from 'react';

export default function Card({ name, email, id }) {
  return (
    <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img
        src={`https://robohash.org/${id}?200x200' alt='robot`}
        alt='robots'
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
