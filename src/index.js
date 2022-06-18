import React from 'react';
import ReactDOM from 'react-dom/client';
import DrumMachine from './DrumMachine';
import "./styling/index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>
);