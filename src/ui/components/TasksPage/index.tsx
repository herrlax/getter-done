import { useTasksAction } from '@/ui/context/tasks';
import React from 'react';
import { styled } from 'goober';
import TaskList from '../TaskList';

const Wrap = styled('div')`
  padding: 8px;
`;

const Button = styled('button')`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 6px 10px;
  color: #f5f6f7;
  font-size: 14px;
  font-family: Quicksand;
  font-weight: 800;

  &:focus,
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
    outline: none;
  }

  &:active {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.8);
    box-shadow: none;
  }
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
      <Button type="button" onClick={onAddTask}>
        Add task
      </Button>
      <TaskList />
    </Wrap>
  );
};

export default TasksPage;
