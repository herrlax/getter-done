import React from 'react';
import { CHECKBOX_WRAP } from './styles';

type Props = {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  name: string;
};

const Checkbox: React.FC<Props> = React.memo(({ checked, onChange, name }) => {
  return (
    <div css={CHECKBOX_WRAP(checked)}>
      <input
        data-reach-custom-checkbox-input
        type="checkbox"
        value={name}
        name={name}
        checked={checked}
        onChange={(event) => {
          onChange(event.target.checked);
        }}
      />
      <span />
    </div>
  );
});

export default Checkbox;
