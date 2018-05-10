/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var list = []\r\n  , el\r\n  , on_click\r\n  , output = {\r\n    init: init,\r\n    add: add,\r\n    remove: remove,\r\n    clear: clear,\r\n  }\r\n;\r\n\r\nfunction init(config) {\r\n\r\n  /*找到用户指定的历史记录根元素*/\r\n  el = document.querySelector(config.el);\r\n\r\n  /*点击历史记录后要执行的函数（回调函数，执行个性化的功能）*/\r\n  on_click = config.on_click;\r\n\r\n  /*把冰箱里的数据取回到炒瓢*/\r\n  // console.log(el);\r\n  sync_to_ladle();\r\n\r\n  /*初次渲染*/\r\n  render();\r\n}\r\n\r\nfunction render() {\r\n  el.innerHTML = '';\r\n\r\n  list.forEach(function (keyword) {\r\n    var el_row = document.createElement('div');\r\n\r\n    el_row.innerHTML = `${keyword}`\r\n\r\n    el_row.addEventListener('click', function (e) {\r\n      if (on_click)\r\n        on_click(keyword, e);\r\n    });\r\n\r\n    el_row.classList.add('history');\r\n\r\n    el.appendChild(el_row);\r\n  });\r\n}\r\n\r\nfunction sync_to_ladle() {\r\n  list = JSON.parse(localStorage.getItem('history_list')) || [];\r\n  // console.log(history_list);\r\n}\r\n\r\nfunction sync_to_store() {\r\n  localStorage.setItem('history_list', JSON.stringify(list));\r\n}\r\n\r\n/*添加一条历史记录\r\n* @param String keyword\r\n* */\r\nfunction add(keyword) {\r\n  list.push(keyword);\r\n  render();\r\n  sync_to_store();\r\n}\r\n\r\nfunction remove(keyword) {\r\n  var shit_index = list.indexOf(keyword);\r\n  if (shit_index == -1)\r\n    return;\r\n\r\n  list.splice(shit_index, 1);\r\n  render();\r\n  sync_to_store();\r\n\r\n}\r\n\r\nfunction clear() {\r\n  list = [];\r\n  render();\r\n  sync_to_store();\r\n}\r\n\r\nmodule.exports = output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGlzdG9yeS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGxpc3QgPSBbXVxyXG4gICwgZWxcclxuICAsIG9uX2NsaWNrXHJcbiAgLCBvdXRwdXQgPSB7XHJcbiAgICBpbml0OiBpbml0LFxyXG4gICAgYWRkOiBhZGQsXHJcbiAgICByZW1vdmU6IHJlbW92ZSxcclxuICAgIGNsZWFyOiBjbGVhcixcclxuICB9XHJcbjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoY29uZmlnKSB7XHJcblxyXG4gIC8q5om+5Yiw55So5oi35oyH5a6a55qE5Y6G5Y+y6K6w5b2V5qC55YWD57SgKi9cclxuICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsKTtcclxuXHJcbiAgLyrngrnlh7vljoblj7LorrDlvZXlkI7opoHmiafooYznmoTlh73mlbDvvIjlm57osIPlh73mlbDvvIzmiafooYzkuKrmgKfljJbnmoTlip/og73vvIkqL1xyXG4gIG9uX2NsaWNrID0gY29uZmlnLm9uX2NsaWNrO1xyXG5cclxuICAvKuaKiuWGsOeusemHjOeahOaVsOaNruWPluWbnuWIsOeCkueToiovXHJcbiAgLy8gY29uc29sZS5sb2coZWwpO1xyXG4gIHN5bmNfdG9fbGFkbGUoKTtcclxuXHJcbiAgLyrliJ3mrKHmuLLmn5MqL1xyXG4gIHJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgZWwuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoa2V5d29yZCkge1xyXG4gICAgdmFyIGVsX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGVsX3Jvdy5pbm5lckhUTUwgPSBgJHtrZXl3b3JkfWBcclxuXHJcbiAgICBlbF9yb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAob25fY2xpY2spXHJcbiAgICAgICAgb25fY2xpY2soa2V5d29yZCwgZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbF9yb3cuY2xhc3NMaXN0LmFkZCgnaGlzdG9yeScpO1xyXG5cclxuICAgIGVsLmFwcGVuZENoaWxkKGVsX3Jvdyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNfdG9fbGFkbGUoKSB7XHJcbiAgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpc3RvcnlfbGlzdCcpKSB8fCBbXTtcclxuICAvLyBjb25zb2xlLmxvZyhoaXN0b3J5X2xpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jX3RvX3N0b3JlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaXN0b3J5X2xpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbn1cclxuXHJcbi8q5re75Yqg5LiA5p2h5Y6G5Y+y6K6w5b2VXHJcbiogQHBhcmFtIFN0cmluZyBrZXl3b3JkXHJcbiogKi9cclxuZnVuY3Rpb24gYWRkKGtleXdvcmQpIHtcclxuICBsaXN0LnB1c2goa2V5d29yZCk7XHJcbiAgcmVuZGVyKCk7XHJcbiAgc3luY190b19zdG9yZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUoa2V5d29yZCkge1xyXG4gIHZhciBzaGl0X2luZGV4ID0gbGlzdC5pbmRleE9mKGtleXdvcmQpO1xyXG4gIGlmIChzaGl0X2luZGV4ID09IC0xKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBsaXN0LnNwbGljZShzaGl0X2luZGV4LCAxKTtcclxuICByZW5kZXIoKTtcclxuICBzeW5jX3RvX3N0b3JlKCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhcigpIHtcclxuICBsaXN0ID0gW107XHJcbiAgcmVuZGVyKCk7XHJcbiAgc3luY190b19zdG9yZSgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG91dHB1dDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/history.js\n");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var history = __webpack_require__(/*! ../src/history */ \"./src/history.js\");\r\n\r\nhistory.init({\r\n  el: '#history-list',\r\n  on_click: function (keyword, e) {\r\n    console.log(keyword);\r\n  },\r\n});\r\n\r\n// history.add('a');\r\n// history.add('b');\r\n// // history.remove('b');\r\n// history.clear();\r\n\r\n// var history = require('../src/history');\r\n\r\n// history.init({\r\n//     el: '#history-list',\r\n//     on_click : function(keyword, e){\r\n//         console.log(keyword)\r\n//     }\r\n// });\r\nhistory.add('波多野结衣');\r\nhistory.add('天海翼');\r\nhistory.add('苍井空');\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZXN0L3Rlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3Rlc3QuanM/MzdhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGlzdG9yeSA9IHJlcXVpcmUoJy4uL3NyYy9oaXN0b3J5Jyk7XHJcblxyXG5oaXN0b3J5LmluaXQoe1xyXG4gIGVsOiAnI2hpc3RvcnktbGlzdCcsXHJcbiAgb25fY2xpY2s6IGZ1bmN0aW9uIChrZXl3b3JkLCBlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhrZXl3b3JkKTtcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIGhpc3RvcnkuYWRkKCdhJyk7XHJcbi8vIGhpc3RvcnkuYWRkKCdiJyk7XHJcbi8vIC8vIGhpc3RvcnkucmVtb3ZlKCdiJyk7XHJcbi8vIGhpc3RvcnkuY2xlYXIoKTtcclxuXHJcbi8vIHZhciBoaXN0b3J5ID0gcmVxdWlyZSgnLi4vc3JjL2hpc3RvcnknKTtcclxuXHJcbi8vIGhpc3RvcnkuaW5pdCh7XHJcbi8vICAgICBlbDogJyNoaXN0b3J5LWxpc3QnLFxyXG4vLyAgICAgb25fY2xpY2sgOiBmdW5jdGlvbihrZXl3b3JkLCBlKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhrZXl3b3JkKVxyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuaGlzdG9yeS5hZGQoJ+azouWkmumHjue7k+ihoycpO1xyXG5oaXN0b3J5LmFkZCgn5aSp5rW357+8Jyk7XHJcbmhpc3RvcnkuYWRkKCfoi43kupXnqbonKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./test/test.js\n");

/***/ })

/******/ });