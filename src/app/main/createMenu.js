import { app, Menu } from 'electron';

import { config, isMac } from './options';

const createMenu = () => {
  Menu.setApplicationMenu(
    Menu.buildFromTemplate(config.menu)
  )
}

export default createMenu
