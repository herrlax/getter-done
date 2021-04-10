import { Task, TasksProvider } from '@/ui/context/tasks';
import React, { useEffect, useState } from 'react';

type ProviderData = {
  tasks: Task[];
};

const Providers: React.FC = ({ children }) => {
  const [data, setData] = useState<ProviderData | undefined>(undefined);

  useEffect(() => {
    const update = async () => {
      try {
        const res = await window.electron.getTasks();

        setData({
          tasks: Object.values(res)
        });
      } catch (e) {
        console.error(e);
        // do nothing
      }
    };

    update();
  }, []);

  // don't render until we have data
  if (typeof data === 'undefined') {
    return null;
  }

  return <TasksProvider data={data.tasks}>{children}</TasksProvider>;
};

export default Providers;
