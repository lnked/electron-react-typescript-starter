// const registerShortcuts = (keybinding, initialization) => {
//   globalShortcut.unregisterAll()

//   try {
//     var ret = globalShortcut.register(keybinding, function () {
//       if (mb.window.isVisible()) {
//         return mb.hideWindow()
//       }

//       mb.showWindow()
//       mb.window.focus()
//     })
//   } catch (err) {
//     mb.window.webContents.send('preference-updated', false, initialization)
//   }

//   if (ret) {
//     mb.window.webContents.send('preference-updated', true, initialization)
//   }
// }
