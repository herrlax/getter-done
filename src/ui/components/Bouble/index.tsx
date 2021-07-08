import { styled } from 'goober';
import React from 'react';
import './index.css';

const Bobule = () => {
  const delay = Math.random() * 10000;
  const duration = 9000 + Math.random() * 5000;
  const offset = Math.random() * 800;
  const size = Math.round((5 * duration) / 4000);

  const Bbl = styled('span')({
    opacity: 0,
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    animation: `moveUp ${duration}ms ease-in ${delay}ms infinite`,
    marginLeft: `${offset}px`,
    zIndex: -1,
    '&::before': {
      position: 'absolute',
      top: `-${Math.round(size / 3)}px`,
      left: 0,
      content: "''",
      width: `${size}px`,
      height: `${size}px`,
      borderTop: `${Math.round(size / 3)}px solid #fff`,
      borderBottom: `${Math.round(size / 3)}px solid #fff`
    },
    '&::after': {
      position: 'absolute',
      top: 0,
      left: `-${Math.round(size / 3)}px`,
      content: "''",
      width: `${size}px`,
      height: `${size}px`,
      borderLeft: `${Math.round(size / 3)}px solid #fff`,
      borderRight: `${Math.round(size / 3)}px solid #fff`
    }
  });

  return <Bbl className="bouble" />;
};

export default Bobule;
