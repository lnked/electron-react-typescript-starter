import { join } from 'path';
import isDev from 'electron-is-dev';
import appConfig from 'appConfig';

export const isMac = /darwin/.test(process.platform);
export const isDevMode = (process.env.NODE_ENV === 'development');

export const config = appConfig;

export const environment = process.env;

export const windows = {
  main: null,
};

const productionOptions = {
  ...(!isDev && {
    icon: join(__dirname, '/icons/mac/app.icns'),
  }),
  preloadWindow: true,
};

export const browserConfig = {
  ...productionOptions,
  width: 1024,
  height: 728,
  resizable: true,
  webPreferences: {
    nodeIntegration: false,
    contextIsolation: true,
    backgroundThrottling: false,
    preload: './dest/preload.js',
  },
};
