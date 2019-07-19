import { app } from 'electron';
import isDev from 'electron-is-dev';

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

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow(clientWin));

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
    createWindow(clientWin)()
  }
});
