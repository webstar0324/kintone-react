import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const CUSTOM_SPACE_ID = 'custom_space';

kintone.events.on('app.record.create.show', (event) => {
  const space = kintone.app.record.getSpaceElement(CUSTOM_SPACE_ID);
  if (space) {
    space.innerHTML = '';
    const root = createRoot(space);
    root.render(<App />);
  }
  return event;
});
