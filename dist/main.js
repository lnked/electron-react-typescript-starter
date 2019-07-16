"use strict";

var _electron = require("electron");

var _electronIsDev = _interopRequireDefault(require("electron-is-dev"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var clientWin = null;
var rootPath = process.cwd();
var publicPath = "".concat(rootPath, "/public"); // This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

_electron.app.on('ready', function () {
  clientWin = new _electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/client-preload.js'
    }
  });
  console.log({
    isDev: _electronIsDev["default"]
  });
  clientWin.loadURL("file://".concat(publicPath, "/index.html")); // Open the DevTools.

  clientWin.webContents.openDevTools(); // clientWin.webContents.on('did-finish-load', () => {
  //   clientWin.webContents.send('set-socket', {
  //     name: serverSocket,
  //   })
  // });
  // Emitted when the window is closed.

  clientWin.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    clientWin = null;
  });
}); // Quit when all windows are closed.


_electron.app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    _electron.app.quit();
  }
});

_electron.app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (clientWin === null) {
    createWindow();
  }
});
