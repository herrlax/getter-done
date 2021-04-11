import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Button from '.';

describe('<Button />', function () {
  it('renders Button', () => {
    render(<Button onClick={() => {}} />);
  });

  it('runs onClick when clicking button', async () => {
    const spy = jest.fn();
    const { getByText } = render(<Button onClick={spy}>Click me</Button>);

    fireEvent.click(getByText('Click me'));

    await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
  });

  it('sets disabled correctly', async () => {
    const { getByText } = render(
      <Button onClick={() => {}} disable>
        Click me
      </Button>
    );

    await waitFor(() => expect(getByText('Click me')).toHaveAttribute('disabled'));
  });
});
