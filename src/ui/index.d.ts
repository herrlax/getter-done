type Task = {
  id: string;
  date: Date;
  title: string;
  comments: string[];
};

declare interface Window {
  electron: {
    writeTasks(tasks: Task[]): Promise<void>;
    getTasks(): Promise<Task[]>;
  };
}
