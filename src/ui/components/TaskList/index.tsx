import { useTasksState } from '@/ui/context/tasks';
import React from 'react';

const TaskList: React.FC = () => {
  const { data } = useTasksState();

  return (
    <ul>
      {data.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
