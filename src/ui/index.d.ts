type Task = {
  id: string;
  date: Date;
  title: string;
  comments: string[];
};

declare interface Window {
  electron: {
    // writeFile(args: { content: any; fileName: string }): Promise<void>;
    // readFile(fileName: string): Promise<any>;
    writeTasks(tasks: Task[]): Promise<void>;
    getTasks(): Promise<Task[]>;
  };
}
