import React from 'react';
import { CustomCheckbox } from '@reach/checkbox';
import './index.css';

type Props = {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  name: string;
};

const Checkbox: React.FC<Props> = ({ checked, onChange, name }) => {
  return (
    <CustomCheckbox
      value={name}
      name={name}
      checked={checked}
      onChange={(event) => {
        onChange(event.target.checked);
      }}
    >
      <span />
    </CustomCheckbox>
  );
};

export default Checkbox;
