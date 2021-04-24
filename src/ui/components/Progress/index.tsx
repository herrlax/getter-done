import { styled } from 'goober';
import React from 'react';
import colors from '../Colors';

const Wrap = styled('div')([
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px'
  },
  (({ progress, total }: { progress: number; total: number }) => ({
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
        strokeDasharray: `${(progress / total) * 100}, 100`,
        strokeDashoffset: '0'
      }
    }
  })) as any
]) as any;

const CirlceSVG = styled('svg')({
  width: '32px',
  height: '32px',
  transform: 'rotate(-95deg)'
});

const Circle = styled('circle')({
  stroke: colors.primary,
  strokeLinecap: 'round',
  animation: '1500ms dash 500ms ease-in-out both'
});

const CheckSVG = styled('svg')({
  position: 'absolute',
  top: '12px',
  left: '8px'
});

const Polyline = styled('polyline')({
  stroke: '#fff',
  strokeLinecap: 'square',
  animation: '1200ms dash 1800ms ease both',
  transform: 'rotate(-45deg)'
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
      <CirlceSVG viewBox="-5 -25 10 50" xmlns="http://www.w3.org/2000/svg">
        <Circle
          cx="0" // start x
          cy="0" // start y
          r="15" // radius
          fill="none"
          strokeWidth="3"
        />
      </CirlceSVG>
      <CheckSVG
        width="16px"
        height="8px"
        viewBox="0 -8 14 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        {progress === total && (
          <Polyline points="1 0 1 5 13 5" strokeWidth="2" fill="none" />
        )}
      </CheckSVG>
    </Wrap>
  );
};

export default Progress;
