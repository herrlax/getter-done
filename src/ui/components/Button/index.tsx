import { styled } from 'goober';
import React, { MouseEventHandler } from 'react';
import Colors from '../Colors';

type ButtonKind = 'primary' | 'secondary';

type Props = {
  kind?: ButtonKind;
  onClick: (e: any) => void;
};

const colorMap = {
  primary: {
    idle: {
      background: Colors.primary
    },
    focus: {
      background: Colors.primaryFocus
    },
    hover: {
      background: Colors.primaryFocus
    },
    active: {
      background: Colors.primaryActive
    }
  },
  secondary: {
    idle: {
      background: Colors.secondary
    },
    focus: {
      background: Colors.secondaryFocus
    },
    hover: {
      background: Colors.secondaryFocus
    },
    active: {
      background: Colors.secondaryActive
    }
  }
};

const BaseButton = styled('button')([
  {
    border: '1px solid transparent',
    borderRadius: '2px',
    boxSizing: 'border-box',
    padding: '2px 12px',
    color: '#f5f6f7',
    fontSize: '12px',
    fontFamily: 'Quicksand',
    fontWeight: 900,
    transition: 'background-color 100ms ease-in'
  },
  (({ kind }: { kind: ButtonKind }) => ({
    backgroundColor: colorMap[kind].idle.background,
    '&:focus': {
      cursor: 'pointer',
      border: `1px solid ${Colors.white}`,
      backgroundColor: colorMap[kind].focus.background,
      outline: 'none'
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: colorMap[kind].hover.background,
      outline: 'none'
    },
    '&:active': {
      backgroundColor: colorMap[kind].active.background,
      boxShadow: 'none'
    }
  })) as any
]) as any;

const Button: React.FC<Props> = ({ kind = 'secondary', onClick, children }) => {
  console.log('kind', kind);

  return (
    <BaseButton onClick={onClick} type="button" kind={kind}>
      {children}
    </BaseButton>
  );
};

export default Button;
