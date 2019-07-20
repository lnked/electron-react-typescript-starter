import { app, globalShortcut } from 'electron';

import { config, windows, distPath, rootPath } from './options';
import createWindow from './createWindow';

app.commandLine.appendSwitch('disable-web-security');
app.commandLine.appendSwitch('web-security');
app.commandLine.appendSwitch('allow-displaying-insecure-content');
app.commandLine.appendSwitch('ignore-certificate-errors');

app.setName(config.name);

app.on('ready', createWindow(windows.main));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})
