import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let clientWin = null;

const rootPath = process.cwd();
const publicPath = `${rootPath}/public`

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDev) {
    await installExtensions();
  }

  clientWin = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/client-preload.js',
    },
  });

  clientWin.loadURL(`file://${publicPath}/index.html`);

  // Open the DevTools.
  clientWin.webContents.openDevTools();

  // clientWin.webContents.on('did-finish-load', () => {
  //   clientWin.webContents.send('set-socket', {
  //     name: serverSocket,
  //   })
  // });

  // @TODO: Use 'ready-to-show' event
  // https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  clientWin.webContents.on('did-finish-load', () => {
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
    clientWin = null;
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (clientWin === null) {
    createWindow()
  }
});
