import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

(() => {
  kintone.events.on('app.record.index.show', (event) => {
    console.log('loaded');
    const customView = Number(5519924);
    let rootElement = document.getElementById('root');
    if (!rootElement) {
      rootElement = document.createElement('div');
      rootElement.id = 'root';
      document.body.appendChild(rootElement);
    }
    ReactDOM.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
      rootElement
    );
    return event;
  });
})();