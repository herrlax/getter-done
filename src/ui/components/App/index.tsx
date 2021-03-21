import { useTasksAction } from '@/ui/context/tasks';
import React from 'react';
import TaskList from '../TaskList';

const App = () => {
  const { addTask } = useTasksAction();

  const onAddTask = async () => {
    addTask({
      id: '893749',
      title: 'Do the dishes',
      date: new Date('2021-02-03'),
      comments: []
    });
  };

  return (
    <div className="app">
      <h1>Hello from App.tsx</h1>
      <button type="button" onClick={onAddTask}>
        Add task
      </button>
      <TaskList />
    </div>
  );
};

export default App;
