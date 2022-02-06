import { useTasksAction, useTasksState } from '@/ui/context/tasks';
import { styled } from 'goober';
import React, { useEffect, useMemo, useState } from 'react';
import Button from '../Button';
import Progress from '../Progress';
import TaskDialog from '../TaskDialog';
import TaskList from '../TaskList';
import Title from '../Title';

const Wrap = styled('div')({
  padding: '8px'
});

const ProgressWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4px',
  animation: '1000ms fadeOut 3500ms ease both',
  position: 'absolute'
});

const ProgressText = styled('span')({
  animation: '1000ms fadeIn 0ms ease both'
});

const TasksWrap = styled('div')({
  animation: '1000ms fadeIn 0ms ease both'
});

const TasksPage = () => {
  const [showProgress, setShowProgress] = useState(true);
  const [taskDialogIsOpen, setTaskDialogIsOpen] = useState(false);
  const { addTask } = useTasksAction();
  const { data } = useTasksState();

  useEffect(() => {
    setTimeout(() => {
      setShowProgress(false);
    }, 4500);
  }, []);

  const noCompleted = useMemo(() => data.filter((t) => t.done).length, [data]);

  return (
    <React.Fragment>
      <Wrap>
        <Title>Howdy 👋</Title>
        {data.length > 0 && showProgress && (
          <ProgressWrap>
            <Progress progress={noCompleted / data.length} />
            <ProgressText>
              {noCompleted === data.length ? (
                <React.Fragment>All your tasks are done. Nice job 👍</React.Fragment>
              ) : (
                <span>
                  {noCompleted} of {data.length} tasks are done. Keep it up!
                </span>
              )}
            </ProgressText>
          </ProgressWrap>
        )}
        {!showProgress && (
          <TasksWrap>
            <Button onClick={() => setTaskDialogIsOpen(true)} kind="secondary">
              Add task
            </Button>
            <TaskList />
          </TasksWrap>
        )}
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
