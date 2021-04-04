import { styled } from 'goober';
import React from 'react';
import colors from '../Colors';

type Props = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

const TextField = styled('input')({
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

const Field: React.FC<Props> = ({ placeholder, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Field;
