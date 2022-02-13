import React from 'react';
import colors from '../Colors';
import { CHECK, CHECK_WRAP, CIRCLE, CIRCLE_WRAP, PERCENTAGE, WRAP } from './styles';

type Props = {
  progress: number;
};

const Progress: React.FC<Props> = ({ progress }) => {
  return (
    <div css={WRAP(progress)}>
      <svg viewBox="-5 -25 10 50" xmlns="http://www.w3.org/2000/svg" css={CIRCLE_WRAP}>
        <circle
          cx="0" // start x
          cy="0" // start y
          r="15" // radius
          fill="none"
          strokeWidth="3"
          css={CIRCLE(colors)}
        />
      </svg>
      {progress === 1 && (
        <svg
          width="16px"
          height="8px"
          viewBox="0 -8 14 12"
          xmlns="http://www.w3.org/2000/svg"
          css={CHECK_WRAP}
        >
          <polyline
            points="1 0 1 5 13 5"
            strokeWidth="2"
            fill="none"
            css={CHECK(colors)}
          />
        </svg>
      )}
      {progress !== 1 && <span css={PERCENTAGE}>{Math.round(progress * 100)}</span>}
    </div>
  );
};

export default Progress;
