import React from 'react';
import { createRoot } from 'react-dom/client';
import '@reach/checkbox/styles.css';
import './index.css';
import TasksPage from './components/TasksPage';
import Providers from './components/Providers';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <Providers>
        <TasksPage />
      </Providers>
    </React.StrictMode>
  );
}
