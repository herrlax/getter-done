import { styled, css } from 'goober';
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
  (({ progress }: { progress: number }) => ({
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
  })) as any
]) as any;

const CirlceSVG = styled('svg')({
  position: 'absolute',
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
  animation: '1200ms dash 1500ms ease both',
  transform: 'rotate(-45deg)'
});

const Percentage = styled('span')({
  fontSize: '7px',
  fontWeight: 'bold',
  animation: '1000ms fadeIn 1500ms ease both'
});

type Props = {
  progress: number;
};

const Progress: React.FC<Props> = ({ progress }) => {
  return (
    <Wrap progress={progress}>
      <CirlceSVG viewBox="-5 -25 10 50" xmlns="http://www.w3.org/2000/svg">
        <Circle
          cx="0" // start x
          cy="0" // start y
          r="15" // radius
          fill="none"
          strokeWidth="3"
        />
      </CirlceSVG>
      {progress === 1 && (
        <CheckSVG
          width="16px"
          height="8px"
          viewBox="0 -8 14 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Polyline points="1 0 1 5 13 5" strokeWidth="2" fill="none" />
        </CheckSVG>
      )}
      {progress !== 1 && <Percentage>{Math.round(progress * 100)}</Percentage>}
    </Wrap>
  );
};

export default Progress;
