import React from 'react';
import colors from '../Colors';
import { INPUT } from './styles';

type Props = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

const Field: React.FC<Props> = ({ placeholder, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      css={INPUT(colors)}
    />
  );
};

export default Field;
