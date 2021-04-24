import { styled } from 'goober';
import React from 'react';
import colors from '../Colors';

const Wrap = styled('div')([
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '6px',
    width: '32px',
    height: '32px'
  },
  (({ progress, total }: { progress: number; total: number }) => ({
    '@keyframes dash': {
      '0%': {
        strokeDasharray: '0, 100',
        strokeDashoffset: '0'
      },
      '100%': {
        strokeDasharray: `${(progress / total) * 100}, 100`,
        strokeDashoffset: '0'
      }
    }
  })) as any
]) as any;

const SVG = styled('svg')({
  width: '32px',
  height: '32px',
  transform: 'rotate(-94deg)'
});

const Circle = styled('circle')({
  stroke: colors.primary,
  strokeLinecap: 'round',
  animation: '1500ms dash 500ms ease-in-out both'
});

const Check = styled('span')({
  position: 'absolute',
  left: '12px',
  top: '14px',
  height: '2px',
  width: '5px',
  transform: 'rotate(-45deg)',
  '&:after': {
    position: 'absolute',
    content: "''",
    animation: '50ms fadeIn 2000ms cubic-bezier(.17,.67,.83,.67) both'
  },
  '@keyframes fadeIn': {
    '0%': {
      borderBottom: 'none',
      borderLeft: '2px solid #fff',
      height: 0,
      width: 0
    },
    '50%': {
      borderBottom: '2px solid #fff',
      borderLeft: '2px solid #fff',
      height: '2px',
      width: 0
    },
    '100%': {
      borderBottom: '2px solid #fff',
      borderLeft: '2px solid #fff',
      height: '2px',
      width: '5px'
    }
  }
});

type Props = {
  progress: number;
  total: number;
};

const Progress: React.FC<Props> = ({ progress, total }) => {
  if (total === 0) {
    return null;
  }

  return (
    <Wrap progress={progress} total={total}>
      <SVG viewBox="-5 -25 10 50">
        <Circle
          cx="0" // start x
          cy="0" // start y
          r="15" // radius
          fill="none"
          strokeWidth="3"
        ></Circle>
      </SVG>
      {progress === total && <Check />}
    </Wrap>
  );
};

export default Progress;
