import { useTasksAction, useTasksState } from '@/ui/context/tasks';
import React, { useState } from 'react';
import { styled } from 'goober';
import TaskList from '../TaskList';
import Button from '../Button';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TaskDialog from '../TaskDialog';

const Wrap = styled('div')`
  padding: 8px;
`;

const TasksPage = () => {
  const [taskDialogIsOpen, setTaskDialogIsOpen] = useState(false);
  const { addTask } = useTasksAction();
  const { data } = useTasksState();

  const onAddTask = async () => {
    setTaskDialogIsOpen(true);
    // addTask({
    //   id: '893749',
    //   title: 'Do the dishes',
    //   date: new Date('2021-02-03'),
    //   comments: []
    // });
  };

  return (
    <>
      <Wrap>
        <Title>Howdy 👋</Title>
        <Subtitle>
          {data.length === 0 ? (
            <React.Fragment>All your tasks are done. Nice job 👍</React.Fragment>
          ) : (
            <React.Fragment>Get off your butt and getter done</React.Fragment>
          )}
        </Subtitle>
        <Button onClick={onAddTask} kind="secondary">
          Add task
        </Button>
        <TaskList />
      </Wrap>
      <TaskDialog
        isOpen={taskDialogIsOpen}
        onDismiss={() => setTaskDialogIsOpen(false)}
      />
    </>
  );
};

export default TasksPage;
