import { BrowserWindow, globalShortcut } from 'electron';

import { config, isDevMode, distPath, publicPath, browserConfig } from './options';
import installExtensions from './installExtensions';

// https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetpositionx-y-animate
// https://xwartz.gitbooks.io/electron-gitbook/content/en/api/browser-window.html

const createWindow = win => async () => {
  if (isDevMode) {
    await installExtensions()
  }

  win = new BrowserWindow(browserConfig);

  const reloadWindow = () => {
    win.reload();
  }

  win.setTitle(config.name);

  // win.isAlwaysOnTop()
  // win.setPosition(x, y[, animate])
  // console.log(win.getPosition())
  // win.maximize();
  // win.setAspectRatio(1)
  // win.setFullScreen(true);
  // win.setAutoHideMenuBar(true)
  // win.setIgnoreMouseEvents(true)
  // win.setMenuBarVisibility(false)

  globalShortcut.register('F5', reloadWindow);
  globalShortcut.register('CommandOrControl+R', reloadWindow);

  if(isDevMode) {
    win.loadURL('http://localhost:8081/index.html');
    // win.webContents.openDevTools();
  }
  else {
    // win.loadURL(`file://${distPath}/index.html`);
    win.loadFile(`${distPath}/index.html`);
  }

  win.on('show', (e) => {
    setTimeout(reloadWindow, 1500)
  });

  // @TODO: Use 'ready-to-show' event
  // https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  win.webContents.on('did-finish-load', () => {
    // win.webContents.send('set-socket', {
    //   name: serverSocket,
    // })
    if (!win) {
      throw new Error('"win" is not defined');
    }

    if (process.env.START_MINIMIZED) {
      win.minimize();
    } else {
      win.show();
      win.focus();
    }
  });

  win.on('page-title-updated', (e) => {
    e.preventDefault()
  });

  win.on('closed', () => {
    win.removeAllListeners();
    win = null;
  });
}

export default createWindow;
