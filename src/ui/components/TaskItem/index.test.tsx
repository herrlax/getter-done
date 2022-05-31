import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import TaskItem from '.';

const mockTask = {
  id: '',
  date: new Date(),
  title: '',
  comments: [],
  done: false
};

describe('<TaskItem />', function () {
  jest.useFakeTimers();

  it('renders TaskItem', () => {
    render(<TaskItem task={mockTask} onChange={() => {}} />);
  });

  it('runs onChange when clicking checkbox', async () => {
    const spy = jest.fn();
    const { container } = render(<TaskItem task={mockTask} onChange={spy} />);

    const check = container.querySelector('input');

    if (check) {
      fireEvent.click(check);
    }

    jest.runAllTimers();

    await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
  });
});
