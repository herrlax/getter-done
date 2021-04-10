import { useTasksState } from '@/ui/context/tasks';
import { styled } from 'goober';
import React from 'react';
import TaskItem from '../TaskItem';

const List = styled('ul')({ listStyle: 'none', margin: 0, padding: 0 });

const TaskList: React.FC = () => {
  const { data } = useTasksState();

  const handleChange = (task: Task) => {
    // todo edit task
  };

  return (
    <List>
      {data.map((task: Task) => (
        <li key={task.id}>
          <TaskItem task={task} onChange={handleChange} />
        </li>
      ))}
    </List>
  );
};

export default TaskList;
