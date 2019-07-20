import { app } from 'electron';

let mainWindow = null;

app.commandLine.appendSwitch('disable-web-security');
app.commandLine.appendSwitch('web-security');
app.commandLine.appendSwitch('allow-displaying-insecure-content');
app.commandLine.appendSwitch('ignore-certificate-errors');

app.setName(require(`${rootPath}/public/config.json`).name);

app.on('ready', createWindow(mainWindow));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

// app.on('activate', () => {
//   if (mainWindow === null) {
//     createWindow(mainWindow)()
//   }
// });
