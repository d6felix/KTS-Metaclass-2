import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { TestPage } from './TestPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <TestPage />
  </React.StrictMode>
);
