import { useTasksAction, useTasksState } from '@/ui/context/tasks';
import React, { useState } from 'react';
import { styled } from 'goober';
import TaskList from '../TaskList';
import Button from '../Button';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TaskDialog from '../TaskDialog';

const Wrap = styled('div')({
  padding: '8px'
});

const TasksPage = () => {
  const [taskDialogIsOpen, setTaskDialogIsOpen] = useState(false);
  const { addTask } = useTasksAction();
  const { data } = useTasksState();

  return (
    <React.Fragment>
      <Wrap>
        <Title>Howdy 👋</Title>
        <Subtitle>
          {data.length === 0 ? (
            <React.Fragment>All your tasks are done. Nice job 👍</React.Fragment>
          ) : (
            <React.Fragment>Get off your butt and getter done</React.Fragment>
          )}
        </Subtitle>
        <Button onClick={() => setTaskDialogIsOpen(true)} kind="secondary">
          Add task
        </Button>
        <TaskList />
      </Wrap>
      <TaskDialog
        isOpen={taskDialogIsOpen}
        onDismiss={() => setTaskDialogIsOpen(false)}
        onAddTask={(task: Task) => addTask(task)}
      />
    </React.Fragment>
  );
};

export default TasksPage;
