import appConfig from 'appConfig';

export const isMac = /darwin/.test(process.platform);
export const isDevMode = (process.env.NODE_ENV === 'development');

export const config = appConfig;

export const environment = process.env;

const instances = {};

config.windows.forEach(({ name }) => {
  instances[name] = null;
});

export { instances }

export const browserConfig = {
  width: 1024,
  height: 728,
  resizable: true,
  preloadWindow: true,
  icon: `file://${__dirname}/icons/mac/app.icns`,
  webPreferences: {
    nodeIntegration: false,
    contextIsolation: true,
    backgroundThrottling: false,
    preload: './dist/preload.js',
  },
};
