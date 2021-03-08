import { useTasksAction } from '@/ui/context/tasks';
import React from 'react';
import TaskList from '../TaskList';

const App = () => {
  const { addTask } = useTasksAction();

  return (
    <div className="app">
      <h1>Hello from App.tsx</h1>
      <button
        type="button"
        onClick={() => {
          addTask({ id: '784732', date: new Date(), title: 'Blurp', comments: [] });
        }}
      >
        Add task
      </button>
      <TaskList />
    </div>
  );
};

export default App;
