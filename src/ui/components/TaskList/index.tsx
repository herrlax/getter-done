import { useTasksAction, useTasksState } from '@/ui/context/tasks';
import React, { useCallback } from 'react';
import TaskItem from '../TaskItem';
import { LIST } from './styles';

const TaskList: React.FC = () => {
  const { data } = useTasksState();
  const { editTask } = useTasksAction();

  const handleChange = useCallback((task: Task) => {
    editTask(task);
  }, []);

  return (
    <ul css={LIST}>
      {data.map((task: Task) => (
        <li key={task.id}>
          <TaskItem task={task} onChange={handleChange} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
