import appConfig from 'appConfig';

export const isMac = /darwin/.test(process.platform);
export const isDevMode = (process.env.NODE_ENV === 'development');

export const config = appConfig;

export const environment = process.env;

export const windows = {
  main: null,
};

export const browserConfig = {
  width: 1024,
  height: 728,
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
  icon: `file://${__dirname}/icons/mac/app.icns`,
  webPreferences: {
    nodeIntegration: false,
    contextIsolation: true,
    backgroundThrottling: false,
    preload: './dist/preload.js',
  },
};
