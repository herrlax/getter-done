const ipcRenderer = require('electron').ipcRenderer;
const contextBridge = require('electron').contextBridge;

const TASKS_FILE = 'tasks.json';

contextBridge.exposeInMainWorld('electron', {
  getTasks: async () => {
    try {
      const res = await ipcRenderer.invoke('read-file', TASKS_FILE);
      const tasks = JSON.parse(res);
      return tasks;
    } catch (e) {
      return [];
    }
  },
  writeTasks: async (tasks) => {
    const tasksObject = {};

    tasks.forEach((task) => {
      tasksObject[task.id] = task;
    });

    return ipcRenderer.invoke('write-file', {
      content: tasksObject,
      fileName: TASKS_FILE
    });
  },
  updateTask: async (task) => {
    const res = await ipcRenderer.invoke('read-file', TASKS_FILE);
    const tasks = JSON.parse(res);

    if (!tasks[task.id]) {
      throw new Error(`Task with id ${task.id} was not found in file ${TASKS_FILE}`);
    }

    tasks[task.id] = task;

    await ipcRenderer.invoke('write-file', {
      content: tasks,
      fileName: TASKS_FILE
    });

    return task;
  }
});
