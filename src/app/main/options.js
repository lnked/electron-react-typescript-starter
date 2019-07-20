import isDev from 'electron-is-dev';

export const isMac = /darwin/.test(process.platform);
export const rootPath = process.cwd();
export const distPath = `${rootPath}/dist`;
export const publicPath = `${rootPath}/public`;
export const isDevMode = isDev;

export const windows = {
  main: null,
};

export const pkg = require(`${rootPath}/package.json`);
export const config = require(`${distPath}/config.json`);
