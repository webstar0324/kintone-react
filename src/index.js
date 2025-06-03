import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // optional: your button styles

const CUSTOM_SPACE_ID = 'custom_space';

const BUTTONS = [
  { label: '取得', type: 'blue', handler: () => alert('取得 clicked') },
  { label: 'クリア', type: 'blue', handler: () => alert('クリア clicked') }
];

function ButtonGroup() {
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

kintone.events.on('app.record.create.show', (event) => {
  const space = kintone.app.record.getSpaceElement(CUSTOM_SPACE_ID);
  if (space) {
    space.innerHTML = ''; // Clear the space
    const root = createRoot(space);
    root.render(<ButtonGroup />);
  }
  return event;
});