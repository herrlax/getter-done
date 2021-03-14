const ipcRenderer = require('electron').ipcRenderer;
const contextBridge = require('electron').contextBridge;

contextBridge.exposeInMainWorld('electron', {
  // writeFile: async (content) => {
  //   return ipcRenderer.invoke("write-file", content);
  // },
  // readFile: async (fileName) => {
  //   return ipcRenderer.invoke("read-file", fileName);
  // },
  getTasks: async () => {
    try {
      const res = await ipcRenderer.invoke('read-file', 'tasks.json');
      const tasks = JSON.parse(res);
      return tasks.entries;
    } catch (e) {
      return [];
    }
  },
  writeTasks: async (tasks) => {
    return ipcRenderer.invoke('write-file', {
      content: tasks,
      fileName: 'tasks.json',
    });
  },
});
