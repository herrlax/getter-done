import React from 'react';
import { render } from '@testing-library/react';
import TasksPage from '.';
import { Task, TasksProvider } from '@/ui/context/tasks';

const mockTask: Task = {
  id: '',
  date: new Date(),
  title: '',
  comments: [] as string[],
  done: false
};

describe('<TasksPage />', function () {
  it('renders TasksPage', () => {
    render(
      <TasksProvider data={[mockTask]}>
        <TasksPage />
      </TasksProvider>
    );
  });
});
