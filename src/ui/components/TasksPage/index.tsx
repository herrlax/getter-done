import { useTasksAction } from '@/ui/context/tasks';
import React from 'react';
import { styled } from 'goober';
import TaskList from '../TaskList';
import Button from '../Button';

const Wrap = styled('div')`
  padding: 8px;
`;

const TasksPage = () => {
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
    <Wrap>
      <Button onClick={onAddTask} kind="secondary">
        Add task
      </Button>
      <TaskList />
    </Wrap>
  );
};

export default TasksPage;
