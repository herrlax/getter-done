import { css } from '@emotion/react';
import { ColorTheme } from '../Colors';

export const INPUT = (colors: ColorTheme) =>
  css({
    border: '1px solid transparent',
    backgroundColor: colors.darkGrey,
    color: colors.offWhite,
    borderRadius: '2px',
    padding: '8px 6px',
    fontSize: '12px',
    transition: 'background-color 100ms ease-in',
    '&:hover': {
      backgroundColor: colors.darkerGrey
    },
    '&:focus': {
      border: `1px solid ${colors.white}`,
      outline: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    }
  });
