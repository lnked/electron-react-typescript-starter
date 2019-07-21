import { app, globalShortcut } from 'electron';

import { config, windows } from './options';
import createMenu from './createMenu';
import createWindow from './createWindow';

createMenu()

app.commandLine.appendSwitch('disable-web-security');
app.commandLine.appendSwitch('web-security');
app.commandLine.appendSwitch('allow-displaying-insecure-content');
app.commandLine.appendSwitch('ignore-certificate-errors');

app.setName(config.name);

app.on('ready', createWindow({
  win: windows.main,
  options: {
    ...config.windows.main,
  },
}));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

// https://canonium.com/articles/electron-desktop-app-introduction

// app-darwin-x64
// app-linux-ia32
// app-linux-x64
// app-win32-ia32
// app-win32-x64

// Lifecycle
// will-finish-launching
// ready
// browser-window-created
// page-title-updated
// close
// before-quit
// will-quit
// quit
// window-all-closed
// closed
