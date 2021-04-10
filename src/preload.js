const ipcRenderer = require('electron').ipcRenderer;
const contextBridge = require('electron').contextBridge;

contextBridge.exposeInMainWorld('electron', {
  getTasks: async () => {
    try {
      const res = await ipcRenderer.invoke('read-file', 'tasks.json');
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
      fileName: 'tasks.json'
    });
  }
});
