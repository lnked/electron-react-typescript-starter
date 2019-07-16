// const { clipboard } = require('electron');
// const { readFileSync } = require('fs')

// window.readConfig = function () {
//   const data = readFileSync('./config.json')
//   return data
// }

// const _setImmediate = setImmediate;
// const _clearImmediate = clearImmediate;

// process.once('loaded', () => {
//   global.setImmediate = _setImmediate;
//   global.clearImmediate = _clearImmediate;
// })

// window.addEventListener("message", (event) => {
//   if (event.source != window) return
//   if (event.data.type && (event.data.type == "READCLIP_REQ")) {
//     window.postMessage({ type: "READCLIP_ANS", text: window.readClipboard() }, "*")
//   }
// }, false)

// window.readClipboard = function(){
//   return clipboard.readText()
// }

// The loaded page will not be able to access this, it is only available
// in this context
window.bar = 'bar'

document.addEventListener('DOMContentLoaded', () => {
  // Will log out 'undefined' since window.foo is only available in the main
  // context
  console.log(window.foo)

  // Will log out 'bar' since window.bar is available in this context
  console.log(window.bar)
})
