import React from 'react';

const BUTTONS = [
  { label: '取得', type: 'blue', handler: () => alert('取得 clicked') },
  { label: 'クリア', type: 'blue', handler: () => alert('クリア clicked') },
];

export default function App() {
  return (
    <div>
      {BUTTONS.map(({ label, type, handler }, index) => (
        <button
          key={index}
          className={`custom-btn ${type}`}
          onClick={handler}
          style={{ marginRight: '8px' }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
