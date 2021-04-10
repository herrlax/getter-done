import React from 'react';
import { CustomCheckbox } from '@reach/checkbox';
import './index.css';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <CustomCheckbox
      value="whatever"
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
