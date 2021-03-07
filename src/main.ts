import { app, BrowserWindow } from 'electron';

const isDev = process.argv[2] === '--dev';

const createWindow = (): void => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    win.webContents.openDevTools();
    win.loadURL('http://localhost:9000');
  } else {
    win.loadFile('index.html');
  }
};

app.on('ready', createWindow);
