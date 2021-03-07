import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Task, TasksProvider } from './context/tasks';

type ProviderData = {
  tasks: Task[];
};

const initialData: ProviderData = {
  tasks: [
    {
      id: '893749',
      title: 'Do the dishes',
      date: new Date('2021-02-03'),
      comments: [],
    },
    {
      id: '312371',
      title: 'Take care of laundry',
      date: new Date('2021-02-05'),
      comments: [],
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider data={initialData.tasks}>
      <App />
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
