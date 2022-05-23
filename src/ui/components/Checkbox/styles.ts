import { css } from '@emotion/react';

export const CHECKBOX_WRAP = (checked?: boolean) =>
  css({
    width: '16px',
    height: '16px',
    position: 'relative',
    marginRight: '4px',
    '> input': {
      opacity: 0
    },
    '> span': {
      position: 'absolute',
      left: '0',
      top: '0',
      border: `1px solid ${checked ? '#ffffff' : 'rgba(255, 255, 255, 0.2)'}`,
      borderRadius: '50%',
      backgroundColor: checked ? '#239561' : '#50545c',
      cursor: 'pointer',
      height: '14px',
      width: '14px',
      transition: 'background-color 100ms ease-in',
      ':after': {
        position: 'absolute',
        left: '3.5px',
        top: '4px',
        border: '2px solid #fff',
        borderTop: 'none',
        borderRight: 'none',
        content: '""',
        opacity: checked ? 1 : 0,
        height: '2px',
        width: '5px',
        transform: 'rotate(-45deg)',
        transition: 'opacity 100ms ease-in'
      }
    },
    ':focus': {
      outline: 'none',
      boxShadow: 'none',
      '> span': {
        backgroundColor: '#70747c',
        border: '1px solid #fff'
      }
    },
    ':hover': {
      '> span': {
        backgroundColor: checked ? '#33a571' : '#70747c'
      }
    }
  });
