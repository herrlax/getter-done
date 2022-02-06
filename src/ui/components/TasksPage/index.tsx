import { useTasksAction, useTasksState } from '@/ui/context/tasks';
import React, { useMemo, useState } from 'react';
import { styled } from 'goober';
import TaskList from '../TaskList';
import Button from '../Button';
import Title from '../Title';
import Subtitle from '../Subtitle';
import TaskDialog from '../TaskDialog';
import Progress from '../Progress';

const Wrap = styled('div')({
  padding: '8px'
});

const ProgressWrap = styled('div')([
  {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4px'
  }
]);

const TasksPage = () => {
  const [taskDialogIsOpen, setTaskDialogIsOpen] = useState(false);
  const { addTask } = useTasksAction();
  const { data } = useTasksState();

  const noCompleted = useMemo(() => data.filter((t) => t.done).length, [data]);

  return (
    <React.Fragment>
      <Wrap>
        <Title>Howdy 👋</Title>
        <div>
          {data.length > 0 && (
            <ProgressWrap>
              <Progress progress={noCompleted / data.length} />
              {noCompleted === data.length ? (
                <React.Fragment>All your tasks are done. Nice job 👍</React.Fragment>
              ) : (
                <span>
                  {noCompleted} of {data.length} tasks are done. Keep it up!
                </span>
              )}
            </ProgressWrap>
          )}
        </div>
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
