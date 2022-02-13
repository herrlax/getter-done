import { css } from '@emotion/react';
import { ColorTheme } from '../Colors';

export const WRAP = (progress: number) =>
  css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
    '@keyframes dash': {
      '0%': {
        opacity: 0,
        strokeDasharray: '0, 100',
        strokeDashoffset: '0'
      },
      '10%': {
        opacity: 1
      },
      '100%': {
        strokeDasharray: `${progress * 100}, 100`,
        strokeDashoffset: '0'
      }
    }
  });

export const CIRCLE_WRAP = css({
  position: 'absolute',
  width: '32px',
  height: '32px',
  transform: 'rotate(-95deg)'
});

export const CIRCLE = (colors: ColorTheme) =>
  css({
    stroke: colors.primary,
    strokeLinecap: 'round',
    animation: '1500ms dash 500ms ease-in-out both'
  });

export const CHECK_WRAP = css({
  position: 'absolute',
  top: '12px',
  left: '8px'
});

export const CHECK = (colors: ColorTheme) =>
  css({
    stroke: colors.white,
    strokeLinecap: 'square',
    animation: '1200ms dash 1500ms ease both',
    transform: 'rotate(-45deg)'
  });

export const PERCENTAGE = css({
  fontSize: '7px',
  fontWeight: 'bold',
  animation: '1000ms fadeIn 1500ms ease both'
});
