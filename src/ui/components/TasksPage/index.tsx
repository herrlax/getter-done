import { useTasksAction, useTasksState } from '@/ui/context/tasks';
import React, { useEffect, useMemo, useState } from 'react';
import Button from '../Button';
import Progress from '../Progress';
import TaskDialog from '../TaskDialog';
import TaskList from '../TaskList';
import { PROGRESS_TEXT, PROGRESS_WRAP, TASK_WRAP, WRAP } from './styles';

const TasksPage = () => {
  const [showProgress, setShowProgress] = useState(true);
  const [taskDialogIsOpen, setTaskDialogIsOpen] = useState(false);
  const { addTask } = useTasksAction();
  const {
    data,
    addTask: { isLoading: addTaskIsLoading }
  } = useTasksState();

  useEffect(() => {
    setTimeout(() => {
      setShowProgress(false);
    }, 5000);
  }, []);

  const noCompleted = useMemo(() => data.filter((t) => t.done).length, [data]);

  return (
    <React.Fragment>
      <div css={WRAP}>
        <h1>Howdy 👋</h1>
        {data.length > 0 && showProgress && (
          <div css={PROGRESS_WRAP}>
            <Progress progress={noCompleted / data.length} />
            <span css={PROGRESS_TEXT}>
              {noCompleted === data.length ? (
                <React.Fragment>All your tasks are done. Nice job 👍</React.Fragment>
              ) : (
                <span>
                  {noCompleted} of {data.length} tasks are done. Keep it up!
                </span>
              )}
            </span>
          </div>
        )}
        {!showProgress && (
          <div css={TASK_WRAP}>
            <Button
              onClick={() => setTaskDialogIsOpen(true)}
              variant="secondary"
              disabled={addTaskIsLoading}
            >
              Add task
            </Button>
            <TaskList />
          </div>
        )}
      </div>
      {taskDialogIsOpen && (
        <TaskDialog
          onDismiss={() => setTaskDialogIsOpen(false)}
          onAddTask={(task: Task) => addTask(task)}
        />
      )}
    </React.Fragment>
  );
};

export default TasksPage;
