import React, { useEffect, useState } from 'react';
import { Task } from '../../context/tasks';
import { styled } from 'goober';
import Checkbox from '../Checkbox';

type Props = {
  task: Task;
  onChange: (task: Task) => void;
};

const Label = styled('label')({
  display: 'flex',
  alignItems: 'center',
  margin: '4px 0'
});

const TaskItem: React.FC<Props> = ({ task, onChange }) => {
  const [checked, setChecked] = useState(task.done);

  useEffect(() => {
    // debounce this
    onChange(task);
  }, [checked]);

  return (
    <li key={task.id}>
      <Label>
        <Checkbox checked={checked} onChange={setChecked} />
        {task.title}
      </Label>
    </li>
  );
};

export default TaskItem;
