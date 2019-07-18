const _setImmediate = setImmediate;
const _clearImmediate = clearImmediate;

process.once('loaded', () => {
  console.log('Electron app is loaded!');
  global.setImmediate = _setImmediate;
  global.clearImmediate = _clearImmediate;
})

// const { readFileSync, readdirSync } = require('fs')
// const include = (path) => {
//   const exports = undefined;
//   (1,eval)(readFileSync(`${__dirname}${path}`, 'UTF-8'));
// };

// const link = (path) => {
//   const node = document.createElement('link');
//   node.setAttribute('rel', 'stylesheet');
//   node.setAttribute('href', `file://${__dirname}${path}`);
//   document.head.appendChild(node);
// };

// document.addEventListener('DOMContentLoaded', () => {
//   // link('/css/index.css');

//   readdirSync(__dirname).forEach(file => {
//     console.log('readdirSync: ', file);
//   });

//   setTimeout(()=>{
//     // include('/js/jquery-2.2.3.min.js');
//     // include('/js/raphael.js');
//     // include('/js/dancer.min.js');
//     // include('/js/main.js');
//   }, 100);
// });

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