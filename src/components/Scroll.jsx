import React from 'react';

export default function Scroll(props) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: 'calc(100vh - 187.51px)',
        borderTop: '2px solid black',
      }}
    >
      {props.children}
    </div>
  );
}
