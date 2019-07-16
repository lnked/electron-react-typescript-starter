import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let clientWin = null;

const rootPath = process.cwd();
const publicPath = `${rootPath}/public`

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  clientWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/client-preload.js',
    },
  });

  console.log({ isDev });

  clientWin.loadURL(`file://${publicPath}/index.html`);

  // Open the DevTools.
  clientWin.webContents.openDevTools();

  // clientWin.webContents.on('did-finish-load', () => {
  //   clientWin.webContents.send('set-socket', {
  //     name: serverSocket,
  //   })
  // });

  // Emitted when the window is closed.
  clientWin.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
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
