import isDev from 'electron-is-dev';

export const isMac = /darwin/.test(process.platform);
export const rootPath = process.cwd();
export const distPath = `${rootPath}/dist`;
export const publicPath = `${rootPath}/public`;
export const isDevMode = isDev;

export const windows = {
  main: null,
};

export const browserConfig = {
  // width: 1024,
  // height: 728,
  width: 480,
  height: 480,
  show: false,
  frame: false,
  resizable: true,
  alwaysOnTop: true,
  preloadWindow: true,
  windowPosition: 'topRight',
  backgroundColor: '#eee',
  // fullscreen: true,
  transparent: false,
  // titleBarStyle: 'hidden',
  fullscreenable: false,
  // titleBarStyle: 'hiddenInset',
  icon: `${distPath}/icons/png/64x64.png`,
  webPreferences: {
    nodeIntegration: false,
    contextIsolation: true,
    backgroundThrottling: false,
    preload: `${distPath}/preload.js`,
  },
};

export const pkg = require(`${rootPath}/package.json`);
// export const config = require(`${distPath}/config.json`);
