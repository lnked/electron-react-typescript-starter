// import installExtension, { MOBX_DEVTOOLS, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'

const installExtensions = async () => {
  const {
    default: installExtension, MOBX_DEVTOOLS, REACT_DEVELOPER_TOOLS
  } = require('electron-devtools-installer');

  await installExtension([
    MOBX_DEVTOOLS,
    REACT_DEVELOPER_TOOLS,
  ]);
}

export default installExtensions;
