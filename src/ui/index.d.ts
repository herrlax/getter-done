type Task = {
  id: string;
  date: Date;
  title: string;
  comments: string[];
  done: boolean;
};

declare interface Window {
  electron: {
    writeTasks(tasks: Task[]): Promise<void>;
    getTasks(): Promise<{ [id: string]: Task }>;
  };
}
