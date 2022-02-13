import React from 'react';
import ReactDOM from 'react-dom';
import '@reach/checkbox/styles.css';
import './index.css';
import TasksPage from './components/TasksPage';
import Providers from './components/Providers';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <TasksPage />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
