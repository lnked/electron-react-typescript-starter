import { BrowserWindow, globalShortcut } from 'electron';

import { config, isDevMode, environment, browserConfig } from './options';
// import installExtensions from './installExtensions';

const createWindow = ({ win, options }) => async () => {
  win = new BrowserWindow({
    ...browserConfig,
    ...options,
  });

  const reloadWindow = () => {
    win.reload();
  }

  win.setTitle(config.name);

  globalShortcut.register('F5', reloadWindow);
  globalShortcut.register('CommandOrControl+R', reloadWindow);

  // if (isDevMode) {
  //   win.loadURL('http://localhost:3002/index.html');
  // } else {
  //   win.loadURL(`file://${__dirname}/index.html`);
  // }

  win.loadURL(`file://${__dirname}/index.html`);

  if(isDevMode && config.devTools) {
    // await installExtensions()
    win.webContents.openDevTools();
  }

  if (!config.devTools) {
    win.webContents.on("devtools-opened", () => {
      win.webContents.closeDevTools();
    });
  }

  win.on('ready-to-show', () => {
    if (!win) {
      throw new Error('"win" is not defined');
    }

    if (JSON.parse(environment.START_MINIMIZED)) {
      win.minimize();
    } else {
      win.show();
      win.focus();
    }

    // isDevMode && setTimeout(reloadWindow, 1000);
  });

  // win.webContents.on('did-finish-load', () => {});

  win.on('page-title-updated', (e) => {
    e.preventDefault();
  });

  win.on('closed', () => {
    win.removeAllListeners();
    win = null;
  });

  // session.defaultSession.webRequest.onBeforeRequest({}, (details, callback) => {
  //   console.log(details, callback, details.url);

  //   if (details.url.indexOf('7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33') !== -1) {
  //     callback({redirectURL: details.url.replace('7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33', '57c9d07b416b5a2ea23d28247300e4af36329bdc')});
  //   } else {
  //     callback({cancel: false});
  //   }
  // });
}

export default createWindow;
