import React, { useEffect, useState } from 'react';
import { Task } from '../../context/tasks';
import { styled } from 'goober';
import Checkbox from '../Checkbox';
import { useDebounce } from '@/ui/utils';

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
  const debounce = useDebounce();

  const handleChange = (value: boolean) => {
    debounce(() => onChange({ ...task, done: value }), 250);
    setChecked(value);
  };

  return (
    <Label>
      <Checkbox checked={checked} onChange={handleChange} />
      {task.title}
    </Label>
  );
};

export default TaskItem;
