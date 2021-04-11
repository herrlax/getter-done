import React from 'react';
import { render } from '@testing-library/react';
import TasksList from '.';
import { Task, TasksProvider } from '@/ui/context/tasks';

const mockTask: Task = {
  id: '',
  date: new Date(),
  title: '',
  comments: [] as string[],
  done: false
};

describe('<TasksList />', function () {
  it('renders TasksList', () => {
    render(
      <TasksProvider data={[mockTask]}>
        <TasksList />
      </TasksProvider>
    );
  });
});
