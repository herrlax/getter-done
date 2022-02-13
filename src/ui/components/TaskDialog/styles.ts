import { css } from '@emotion/react';
import { ColorTheme } from '../Colors';

export const CONTENT = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '8px'
});

export const HEADER = css({
  position: 'relative',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '8px 8px 12px 8px'
});

export const TITLE = css({ fontSize: '16px', margin: 0 });

export const CLOSE_BUTTON = (colors: ColorTheme) =>
  css({
    border: 'none',
    fontSize: '16px',
    margin: 0,
    backgroundColor: 'transparent',
    borderRadius: '25px',
    fontWeight: 900,
    transition: 'background-color 100ms ease-in',
    color: colors.offWhite,
    position: 'absolute',
    right: '4px',
    top: '4px',
    display: 'flex',
    padding: '8px',
    '&:focus': {
      cursor: 'pointer',
      backgroundColor: colors.secondary,
      outline: 'none'
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: colors.secondary,
      outline: 'none'
    },
    '&:active': {
      backgroundColor: colors.secondaryFocus,
      boxShadow: 'none'
    }
  });

export const BUTTONS_WRAP = css({
  padding: '8px',
  display: 'flex',
  justifyContent: 'flex-end',
  '> button:not(:last-child)': {
    marginRight: '4px'
  }
});
