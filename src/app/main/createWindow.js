import { BrowserWindow, globalShortcut } from 'electron';

import { config, isDevMode, environment, browserConfig } from './options';
import installExtensions from './installExtensions';

const createWindow = win => async () => {
  win = new BrowserWindow(browserConfig);

  const reloadWindow = () => {
    win.reload();
  }

  win.setTitle(config.name);

  globalShortcut.register('F5', reloadWindow);
  globalShortcut.register('CommandOrControl+R', reloadWindow);

  win.loadURL(`file://${__dirname}/index.html`);

  if(isDevMode && config.devTools) {
    await installExtensions()
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
  });

  // win.webContents.on('did-finish-load', () => {});

  win.on('page-title-updated', (e) => {
    e.preventDefault();
  });

  win.on('closed', () => {
    win.removeAllListeners();
    win = null;
  });
}

export default createWindow;
