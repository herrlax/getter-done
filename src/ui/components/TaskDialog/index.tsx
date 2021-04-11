import React, { useState } from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { styled } from 'goober';
import Colors from '../Colors';
import CloseIcon from '../../assets/icons/close.svg';
import Button from '../Button';
import Field from '../Field';
import { Task } from '@/ui/context/tasks';

type Props = {
  isOpen?: boolean;
  onDismiss: () => void;
  onAddTask: (task: Task) => void;
};

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '8px'
});

const DialogHeader = styled('div')({
  position: 'relative',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '8px 8px 12px 8px'
});

const HeaderTitle = styled('h1')({
  fontSize: '16px',
  margin: 0
});

const CloseButton = styled('button')({
  border: 'none',
  fontSize: '16px',
  margin: 0,
  backgroundColor: 'transparent',
  borderRadius: '25px',
  fontWeight: 900,
  transition: 'background-color 100ms ease-in',
  color: Colors.offWhite,
  position: 'absolute',
  right: '4px',
  top: '4px',
  display: 'flex',
  padding: '8px',
  '&:focus': {
    cursor: 'pointer',
    backgroundColor: Colors.secondary,
    outline: 'none'
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: Colors.secondary,
    outline: 'none'
  },
  '&:active': {
    backgroundColor: Colors.secondaryFocus,
    boxShadow: 'none'
  }
});

const ButtonWrap = styled('div')({
  padding: '8px',
  display: 'flex',
  justifyContent: 'flex-end'
});

const TaskDialog: React.FC<Props> = ({ isOpen, onDismiss, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleAddTask = () => {
    onAddTask({
      id: new Date().toISOString(),
      date: new Date(),
      title: taskTitle,
      comments: [],
      done: false
    });
    setTaskTitle('');
    onDismiss();
  };

  return (
    <DialogOverlay
      isOpen={isOpen}
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
        <DialogHeader>
          <HeaderTitle>Add new task</HeaderTitle>
          <CloseButton type="button" onClick={onDismiss} aria-label="Close dialog">
            <img src={CloseIcon} alt="" width="12" height="12" />
          </CloseButton>
        </DialogHeader>
        <Content>
          <Field
            placeholder="Need to get ’er done"
            value={taskTitle}
            onChange={setTaskTitle}
          />
        </Content>
        <ButtonWrap>
          <Button onClick={handleAddTask} disable={taskTitle === ''}>
            Add task
          </Button>
        </ButtonWrap>
      </DialogContent>
    </DialogOverlay>
  );
};

export default TaskDialog;
