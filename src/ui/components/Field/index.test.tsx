import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Field from '.';

describe('<Field />', function () {
  it('renders Field', () => {
    render(<Field onChange={() => {}} value="" />);
  });

  it('runs onChange when typing in the Field', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Field onChange={spy} placeholder="input placeholders" value="" />
    );

    const fieldInput = container.querySelector('input[placeholder="input placeholders"]');

    if (fieldInput) {
      fireEvent.change(fieldInput, { target: { value: 'test test' } });
    }

    await waitFor(() => expect(spy).toHaveBeenCalledWith('test test'));
  });
});
