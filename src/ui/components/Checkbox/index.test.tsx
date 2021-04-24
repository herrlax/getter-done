import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Checkbox from '.';

describe('<Checkbox />', function () {
  it('renders Checkbox', () => {
    render(<Checkbox onChange={() => {}} checked name="" />);
  });

  it('runs onChange when clicking Checkbox', async () => {
    const spy = jest.fn();
    const { container } = render(<Checkbox onChange={spy} name="check" />);

    const checkInput = container.querySelector('input[name="check"]');

    if (checkInput) {
      fireEvent.click(checkInput);
    }

    await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
  });
});
