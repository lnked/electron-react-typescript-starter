import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'

if (!isDev) {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const rootPath = process.cwd();
const publicPath = `${rootPath}/dist`

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let clientWin = null;

app.commandLine.appendSwitch('disable-web-security');
app.commandLine.appendSwitch('web-security');
app.commandLine.appendSwitch('allow-displaying-insecure-content');
app.commandLine.appendSwitch('ignore-certificate-errors');

const createWindow = async () => {
  if(isDev) {
    await installExtension(REACT_DEVELOPER_TOOLS);
  }

  clientWin = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: `${publicPath}/preload.js`,
    },
  });

  if(isDev) {
    clientWin.loadURL('http://localhost:8081/index.html');
    clientWin.webContents.openDevTools();
  }
  else {
    // clientWin.loadURL(`file://${publicPath}/index.html`);
    clientWin.loadFile(`${publicPath}/index.html`);
  }

  // @TODO: Use 'ready-to-show' event
  // https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  clientWin.webContents.on('did-finish-load', () => {
    // clientWin.webContents.send('set-socket', {
    //   name: serverSocket,
    // })
    if (!clientWin) {
      throw new Error('"clientWin" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      clientWin.minimize();
    } else {
      clientWin.show();
      clientWin.focus();
    }
  });

  clientWin.on('closed', () => {
    clientWin.removeAllListeners();
    clientWin = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (clientWin === null) {
    createWindow()
  }
});
