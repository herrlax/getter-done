import { app, BrowserWindow, ipcMain } from 'electron';
import { promises as fs } from 'fs';

const isDev = process.argv[2] === '--dev';

const createWindow = (): void => {
  const win = new BrowserWindow({
    width: 2000,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      preload: `${__dirname}/preload.js`
    }
  });

  win.webContents.openDevTools();

  if (isDev) {
    win.loadURL('http://localhost:9000');
  } else {
    win.loadFile('index.html');
  }
};

app.on('ready', createWindow);

ipcMain.handle('write-file', async (event, args: { content: any; fileName: string }) => {
  console.info('Attempting to write file..');

  await writeFile(args.fileName, args.content);

  console.info('Successfully wrote to file ' + args.fileName);
});

ipcMain.handle('read-file', async (event, fileName: string) => {
  console.info('Attempting to read file ' + fileName);

  try {
    const content = await readFile(fileName);
    console.info('Successfully read file ' + fileName);
    return content;
  } catch (e) {
    console.error(e);

    if (e.code === 'ENOENT') {
      console.info('Could not find file ' + fileName);
    }

    throw e;
  }
});

const writeFile = async (fileName: string, content: any) =>
  fs.writeFile(fileName, JSON.stringify({ entries: content }), 'utf8');

const readFile = async (fileName: string) => fs.readFile(fileName, 'utf8');
