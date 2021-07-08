import { styled } from 'goober';
import React from 'react';
import colors from '../Colors';

type ButtonKind = 'primary' | 'secondary';

type Props = {
  kind?: ButtonKind;
  onClick: (e: any) => void;
  disable?: boolean;
};

const colorMap = {
  primary: {
    idle: {
      background: colors.primary
    },
    focus: {
      background: colors.primaryFocus
    },
    hover: {
      background: colors.primaryFocus
    },
    active: {
      background: colors.primaryActive
    }
  },
  secondary: {
    idle: {
      background: colors.secondary
    },
    focus: {
      background: colors.secondaryFocus
    },
    hover: {
      background: colors.secondaryFocus
    },
    active: {
      background: colors.secondaryActive
    }
  }
};

const BaseButton = styled('button')([
  {
    width: 'fit-content',
    border: '1px solid transparent',
    borderRadius: '2px',
    boxSizing: 'border-box',
    padding: '2px 12px',
    color: colors.offWhite,
    fontSize: '12px',
    fontFamily: 'Nunito Sans Bold',
    transition: 'background-color 100ms ease-in'
  },
  (({ kind, disabled }: { kind: ButtonKind; disabled?: boolean }) => ({
    backgroundColor: colorMap[kind].idle.background,
    opacity: disabled ? 0.3 : 1,
    pointerEvents: disabled ? 'none' : 'all',
    '&:focus': {
      cursor: 'pointer',
      border: `1px solid ${colors.white}`,
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

const Button: React.FC<Props> = ({ kind = 'secondary', onClick, disable, children }) => {
  return (
    <BaseButton onClick={onClick} type="button" kind={kind} disabled={disable}>
      {children}
    </BaseButton>
  );
};

export default Button;
