import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import TaskDialog from '.';

describe('<TaskDialog />', function () {
  it('renders TaskDialog', () => {
    render(<TaskDialog isOpen onDismiss={() => {}} onAddTask={() => {}} />);
  });

  it('runs onDismiss when clicking Close button', async () => {
    const spy = jest.fn();
    const { getByLabelText } = render(
      <TaskDialog isOpen onDismiss={spy} onAddTask={() => {}} />
    );

    fireEvent.click(getByLabelText('Close dialog'));

    await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
  });

  it('Add task button is disable when nothing is entered in field', async () => {
    const spy = jest.fn();

    const { getByText } = render(
      <TaskDialog isOpen onDismiss={() => {}} onAddTask={spy} />
    );

    await waitFor(() => expect(getByText('Add task')).toHaveAttribute('disabled'));

    fireEvent.click(getByText('Add task'));

    await waitFor(() => expect(spy).toHaveBeenCalledTimes(0));
  });

  it('Runs onAddTask when clicking Add task button', async () => {
    const spy = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TaskDialog isOpen onDismiss={() => {}} onAddTask={spy} />
    );

    fireEvent.change(getByPlaceholderText('Need to get ’er done'), {
      target: { value: 'test' }
    });

    fireEvent.click(getByText('Add task'));

    await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
  });
});
