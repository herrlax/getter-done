import { Task } from '@/ui/context/tasks';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import '@reach/dialog/styles.css';
import React, { useState } from 'react';
import CloseIcon from '../../assets/icons/close.svg';
import Button from '../Button';
import { default as colors, default as Colors } from '../Colors';
import Field from '../Field';
import { BUTTONS_WRAP, CLOSE_BUTTON, CONTENT, HEADER, TITLE } from './styles';

type Props = {
  onDismiss: () => void;
  onAddTask: (task: Task) => void;
};

const TaskDialog: React.FC<Props> = ({ onDismiss, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleAddTask = () => {
    onAddTask({
      id: new Date().toISOString(),
      date: new Date(),
      title: taskTitle,
      comments: [],
      done: false
    });
    onDismiss();
  };

  return (
    <DialogOverlay
      isOpen
      onDismiss={onDismiss}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
    >
      <DialogContent
        aria-label="Add task dialog"
        style={{
          backgroundColor: Colors.background,
          padding: 0,
          borderRadius: '4px'
        }}
      >
        <div css={HEADER}>
          <h1 css={TITLE}>Add new task</h1>
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Close dialog"
            css={CLOSE_BUTTON(colors)}
          >
            <img src={CloseIcon} alt="" width="12" height="12" />
          </button>
        </div>
        <div css={CONTENT}>
          <Field
            placeholder="Need to get ’er done"
            value={taskTitle}
            onChange={setTaskTitle}
          />
        </div>
        <div css={BUTTONS_WRAP}>
          <Button onClick={handleAddTask} disabled={taskTitle === ''} variant="primary">
            Add task
          </Button>
          <Button onClick={onDismiss} variant="secondary">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};

export default TaskDialog;
