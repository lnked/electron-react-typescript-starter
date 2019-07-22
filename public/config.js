const appName = 'React App';
const isMac = /darwin/.test(process.platform);
const environment = process.env.NODE_ENV || 'development';
const development = environment === 'development';

module.exports = {
  name: appName,
  devTools: development,
  windows: {
    main: {
      width: 860,
      height: 560,
      show: false,
      frame: false,
      resizable: false,
      alwaysOnTop: false,
      transparent: false,
      // fullscreen: true,
      // titleBarStyle: 'hidden',
      // fullscreenable: false,
      // titleBarStyle: 'hiddenInset',
      backgroundColor: '#eee',
      windowPosition: 'bottomRight',
    },
  },
  menu: [
    ...(isMac ? [{
      label: appName,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }] : []),
    { role: 'viewMenu' },
    { role: 'windowMenu' },
  ],
};

// { role: 'appMenu' },
// { role: 'fileMenu' },
// { role: 'editMenu' },
// {
//   role: 'help',
//   submenu: [
//     {
//       label: 'Learn More',
//       click () {
//         require('electron').shell.openExternalSync('https://electronjs.org');
//       }
//     }
//   ]
// },
// // { role: 'fileMenu' }
// // {
// //   label: 'File',
// //   submenu: [
// //     isMac ? { role: 'close' } : { role: 'quit' }
// //   ]
// // },
// // { role: 'editMenu' }
// // {
// //   label: 'Edit',
// //   submenu: [
// //     { role: 'undo' },
// //     { role: 'redo' },
// //     { type: 'separator' },
// //     { role: 'cut' },
// //     { role: 'copy' },
// //     { role: 'paste' },
// //     ...(isMac ? [
// //       { role: 'pasteAndMatchStyle' },
// //       { role: 'delete' },
// //       { role: 'selectAll' },
// //       { type: 'separator' },
// //       {
// //         label: 'Speech',
// //         submenu: [
// //           { role: 'startspeaking' },
// //           { role: 'stopspeaking' }
// //         ]
// //       }
// //     ] : [
// //       { role: 'delete' },
// //       { type: 'separator' },
// //       { role: 'selectAll' }
// //     ])
// //   ]
// // },
// // { role: 'viewMenu' }
// {
//   label: 'View',
//   submenu: [
//     { role: 'reload' },
//     { role: 'forcereload' },
//     // TODO: only if config.devTools is true
//     { role: 'toggledevtools' },
//     { type: 'separator' },
//     // { role: 'resetzoom' },
//     // { role: 'zoomin' },
//     // { role: 'zoomout' },
//     // { type: 'separator' },
//     { role: 'togglefullscreen' }
//   ]
// },
// // { role: 'windowMenu' }
// // {
// //   label: 'Window',
// //   submenu: [
// //     { role: 'minimize' },
// //     { role: 'zoom' },
// //     ...(isMac ? [
// //       { type: 'separator' },
// //       { role: 'front' },
// //       { type: 'separator' },
// //       { role: 'window' }
// //     ] : [
// //       { role: 'close' }
// //     ])
// //   ]
// // },
// // {
// //   role: 'help',
// //   submenu: [
// //     {
// //       label: 'Learn More',
// //       click () { require('electron').shell.openExternalSync('https://electronjs.org') }
// //     }
// //   ]
// // }
