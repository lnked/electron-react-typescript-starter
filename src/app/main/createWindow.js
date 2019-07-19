import { BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'

const createWindow = clientWin => async () => {
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

export default createWindow;
