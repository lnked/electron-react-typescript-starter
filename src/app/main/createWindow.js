import isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'
import { BrowserWindow, globalShortcut } from 'electron';

const rootPath = process.cwd();
const distPath = `${rootPath}/dist`
const publicPath = `${rootPath}/public`

// https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetpositionx-y-animate
// https://xwartz.gitbooks.io/electron-gitbook/content/en/api/browser-window.html

const createWindow = mainWindow => async () => {
  if(isDev) {
    await installExtension(REACT_DEVELOPER_TOOLS);
  }

  mainWindow = new BrowserWindow({
    // show: false,
    frame: false,
    // width: 1024,
    // height: 728,
    width: 480,
    height: 480,
    resizable: true,
    alwaysOnTop: true,
    preloadWindow: true,
    windowPosition: 'topRight',
    backgroundColor: '#eee',
    icon: `${distPath}/icons/png/64x64.png`,
    // fullscreen: true,
    transparent: true,
    // titleBarStyle: 'hidden',
    // titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: `${distPath}/preload.js`,
    },
  });

  const reloadWindow = () => {
    mainWindow.reload();
  }

  mainWindow.setTitle(require(`${publicPath}/config.json`).name);

  // mainWindow.isAlwaysOnTop()

  // mainWindow.setPosition(x, y[, animate])

  // console.log(mainWindow.getPosition())

  // mainWindow.setAspectRatio(1)

  // mainWindow.setIgnoreMouseEvents(true)

  // mainWindow.setFullScreen(true);
  // mainWindow.maximize();

  mainWindow.setAutoHideMenuBar(true)

  mainWindow.setMenuBarVisibility(false)

  if(isDev) {
    mainWindow.loadURL('http://localhost:8081/index.html');
    // mainWindow.webContents.openDevTools();
  }
  else {
    // mainWindow.loadURL(`file://${distPath}/index.html`);
    mainWindow.loadFile(`${distPath}/index.html`);
  }

  mainWindow.on('show', (e) => {
    setTimeout(reloadWindow, 1500)
  });

  // @TODO: Use 'ready-to-show' event
  // https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    // mainWindow.webContents.send('set-socket', {
    //   name: serverSocket,
    // })
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.on('page-title-updated', (e) => {
    e.preventDefault()
  });

  globalShortcut.register('F5', reloadWindow);
  globalShortcut.register('CommandOrControl+R', reloadWindow);

  mainWindow.on('closed', () => {
    mainWindow.removeAllListeners();
    mainWindow = null;
  });
}
