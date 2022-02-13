import { useDebounce } from '@/ui/utils';
import React, { useState } from 'react';
import { Task } from '../../context/tasks';
import Checkbox from '../Checkbox';
import { LABEL } from './styles';

type Props = {
  task: Task;
  onChange: (task: Task) => void;
};

const TaskItem: React.FC<Props> = ({ task, onChange }) => {
  const [checked, setChecked] = useState(task.done);
  const debounce = useDebounce();

  const handleChange = (value: boolean) => {
    debounce(() => onChange({ ...task, done: value }), 250);
    setChecked(value);
  };

  return (
    <label css={LABEL}>
      <Checkbox checked={checked} onChange={handleChange} name={`${task.title} check`} />
      {task.title}
    </label>
  );
};

export default TaskItem;
