import { css } from '@emotion/react';

export const WRAP = css({
  padding: '8px'
});

export const PROGRESS_WRAP = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4px',
  animation: '1000ms fadeOut 4000ms ease both',
  position: 'absolute'
});

export const PROGRESS_TEXT = css({
  animation: '1000ms fadeIn 0ms ease both'
});

export const TASK_WRAP = css({
  animation: '1000ms fadeIn 0ms ease both'
});
