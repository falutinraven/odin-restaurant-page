/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about_page.js":
/*!***************************!*\
  !*** ./src/about_page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   page_load: () => (/* binding */ page_load)\n/* harmony export */ });\n/* harmony import */ var _img_chefs_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/chefs.jpg */ \"./src/img/chefs.jpg\");\n\r\n\r\nlet page_load = function () {\r\n  let container = document.querySelector('div#content');\r\n\r\n  let headline = document.createElement('h2')\r\n  headline.textContent = 'About us and our wonderful staff';\r\n\r\n  let image = new Image(300);\r\n  image.src = _img_chefs_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  \r\n  let description = document.createElement('p');\r\n  description.textContent = `Welcome to Lorem & Ipsum Bistro, where flavor meets creativity. Our chefs craft dishes that tantalize the senses, from fresh appetizers to mouthwatering desserts. We believe in providing a dining experience that's both elegant and inviting.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium felis ut mauris luctus, id sagittis purus faucibus. Suspendisse varius sapien vel elit porttitor, id ultrices dui eleifend. Curabitur ac ex non justo eleifend auctor.\r\n\r\nOur curated wine list and cozy atmosphere ensure you'll savor every moment. Join us today for an unforgettable culinary journey!`\r\n\r\n\r\n  container.appendChild(headline);\r\n  container.appendChild(image);\r\n  container.appendChild(description);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXRfcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUM5QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQ0FBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dF9wYWdlLmpzP2MzY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoZWZzX2ltYWdlX3BhdGggZnJvbSAnLi9pbWcvY2hlZnMuanBnJ1xyXG5cclxuZXhwb3J0IGxldCBwYWdlX2xvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XHJcblxyXG4gIGxldCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdBYm91dCB1cyBhbmQgb3VyIHdvbmRlcmZ1bCBzdGFmZic7XHJcblxyXG4gIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgzMDApO1xyXG4gIGltYWdlLnNyYyA9IGNoZWZzX2ltYWdlX3BhdGg7XHJcbiAgXHJcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gTG9yZW0gJiBJcHN1bSBCaXN0cm8sIHdoZXJlIGZsYXZvciBtZWV0cyBjcmVhdGl2aXR5LiBPdXIgY2hlZnMgY3JhZnQgZGlzaGVzIHRoYXQgdGFudGFsaXplIHRoZSBzZW5zZXMsIGZyb20gZnJlc2ggYXBwZXRpemVycyB0byBtb3V0aHdhdGVyaW5nIGRlc3NlcnRzLiBXZSBiZWxpZXZlIGluIHByb3ZpZGluZyBhIGRpbmluZyBleHBlcmllbmNlIHRoYXQncyBib3RoIGVsZWdhbnQgYW5kIGludml0aW5nLlxyXG5cclxuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIHByZXRpdW0gZmVsaXMgdXQgbWF1cmlzIGx1Y3R1cywgaWQgc2FnaXR0aXMgcHVydXMgZmF1Y2lidXMuIFN1c3BlbmRpc3NlIHZhcml1cyBzYXBpZW4gdmVsIGVsaXQgcG9ydHRpdG9yLCBpZCB1bHRyaWNlcyBkdWkgZWxlaWZlbmQuIEN1cmFiaXR1ciBhYyBleCBub24ganVzdG8gZWxlaWZlbmQgYXVjdG9yLlxyXG5cclxuT3VyIGN1cmF0ZWQgd2luZSBsaXN0IGFuZCBjb3p5IGF0bW9zcGhlcmUgZW5zdXJlIHlvdSdsbCBzYXZvciBldmVyeSBtb21lbnQuIEpvaW4gdXMgdG9kYXkgZm9yIGFuIHVuZm9yZ2V0dGFibGUgY3VsaW5hcnkgam91cm5leSFgXHJcblxyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/about_page.js\n");

/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   page_load: () => (/* binding */ page_load)\n/* harmony export */ });\n/* harmony import */ var _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant.jpg */ \"./src/img/restaurant.jpg\");\n\r\n\r\nlet page_load = function () {\r\n  let container = document.querySelector('div#content');\r\n\r\n  let headline = document.createElement('h2')\r\n  headline.textContent = 'The best restaurant in town';\r\n\r\n  let image = new Image(300);\r\n  image.src = _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  \r\n  let description = document.createElement('p');\r\n  description.textContent = 'The resaurant owned by Jairo has been on the up and up. It is mighty successful, and everyone who goes there gives the restaurant a bunch of money because its actually kind of expensive. Yikes'\r\n\r\n\r\n  container.appendChild(headline);\r\n  container.appendChild(image);\r\n  container.appendChild(description);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZV9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1EO0FBQ25EO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdEQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lX3BhZ2UuanM/ZWQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzdGF1cmFudF9pbWFnZSBmcm9tICcuL2ltZy9yZXN0YXVyYW50LmpwZydcclxuXHJcbmV4cG9ydCBsZXQgcGFnZV9sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xyXG5cclxuICBsZXQgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnVGhlIGJlc3QgcmVzdGF1cmFudCBpbiB0b3duJztcclxuXHJcbiAgbGV0IGltYWdlID0gbmV3IEltYWdlKDMwMCk7XHJcbiAgaW1hZ2Uuc3JjID0gcmVzdGF1cmFudF9pbWFnZTtcclxuICBcclxuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVGhlIHJlc2F1cmFudCBvd25lZCBieSBKYWlybyBoYXMgYmVlbiBvbiB0aGUgdXAgYW5kIHVwLiBJdCBpcyBtaWdodHkgc3VjY2Vzc2Z1bCwgYW5kIGV2ZXJ5b25lIHdobyBnb2VzIHRoZXJlIGdpdmVzIHRoZSByZXN0YXVyYW50IGEgYnVuY2ggb2YgbW9uZXkgYmVjYXVzZSBpdHMgYWN0dWFsbHkga2luZCBvZiBleHBlbnNpdmUuIFlpa2VzJ1xyXG5cclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home_page.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_page */ \"./src/home_page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_page */ \"./src/menu_page.js\");\n/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about_page */ \"./src/about_page.js\");\n\r\n\r\n\r\n\r\nlet teardown = function() {\r\n  let container = document.querySelector('div#content');\r\n  container.innerHTML = '';\r\n}\r\n\r\nlet add_listener = function(query, func) {\r\n  let button = document.querySelector(query);\r\n  button.addEventListener('click', () => {\r\n    teardown();\r\n    func();\r\n  })\r\n}\r\n\r\nadd_listener('.home', _home_page__WEBPACK_IMPORTED_MODULE_0__.page_load);\r\nadd_listener('.menu', _menu_page__WEBPACK_IMPORTED_MODULE_1__.page_load);\r\nadd_listener('.about', _about_page__WEBPACK_IMPORTED_MODULE_2__.page_load);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwRDtBQUNBO0FBQ0U7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFjO0FBQ3BDLHNCQUFzQixpREFBYztBQUNwQyx1QkFBdUIsa0RBQWU7QUFDdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhZ2VfbG9hZCBhcyBob21lX3BhZ2VfbG9hZCB9IGZyb20gXCIuL2hvbWVfcGFnZVwiO1xyXG5pbXBvcnQgeyBwYWdlX2xvYWQgYXMgbWVudV9wYWdlX2xvYWQgfSBmcm9tIFwiLi9tZW51X3BhZ2VcIjtcclxuaW1wb3J0IHsgcGFnZV9sb2FkIGFzIGFib3V0X3BhZ2VfbG9hZCB9IGZyb20gXCIuL2Fib3V0X3BhZ2VcIjtcclxuXHJcbmxldCB0ZWFyZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxubGV0IGFkZF9saXN0ZW5lciA9IGZ1bmN0aW9uKHF1ZXJ5LCBmdW5jKSB7XHJcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRlYXJkb3duKCk7XHJcbiAgICBmdW5jKCk7XHJcbiAgfSlcclxufVxyXG5cclxuYWRkX2xpc3RlbmVyKCcuaG9tZScsIGhvbWVfcGFnZV9sb2FkKTtcclxuYWRkX2xpc3RlbmVyKCcubWVudScsIG1lbnVfcGFnZV9sb2FkKTtcclxuYWRkX2xpc3RlbmVyKCcuYWJvdXQnLCBhYm91dF9wYWdlX2xvYWQpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   page_load: () => (/* binding */ page_load)\n/* harmony export */ });\n/* harmony import */ var _img_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/spaghetti.jpg */ \"./src/img/spaghetti.jpg\");\n/* harmony import */ var _img_cheese_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cheese-pizza.jpg */ \"./src/img/cheese-pizza.jpg\");\n/* harmony import */ var _img_hamburger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/hamburger.jpg */ \"./src/img/hamburger.jpg\");\n\r\n\r\n\r\n\r\nlet page_load = function () {\r\n  let container = document.querySelector('div#content');\r\n\r\n  let headline = document.createElement('h2')\r\n  headline.textContent = 'Our Glorious Menu';\r\n\r\n  let spaghetti_description = 'This wonderful titular meal is perfected by our talented chefs. We highly recommend' \r\n  let cheese_pizza_description = 'This wonderful titular meal is also perfected by our talented chefs. Just look at that melted sheese and the size of that sexy crust' \r\n  let hamburger_description = 'How can we go without mentioning the classssssic!!! We most recommend the burger. Fries are avaiable too upon request. It\\'ll cost a pretty penny though' \r\n\r\n  container.appendChild(headline);\r\n  container.appendChild(make_card(_img_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_0__, spaghetti_description));\r\n  container.appendChild(make_card(_img_cheese_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__, cheese_pizza_description));\r\n  container.appendChild(make_card(_img_hamburger_jpg__WEBPACK_IMPORTED_MODULE_2__, hamburger_description));\r\n}\r\n\r\nlet make_card = function (image_path, description) {\r\n  let card = document.createElement('div');\r\n  card.classList.add('card');\r\n\r\n  let image = new Image(300);\r\n  image.src = image_path;\r\n  \r\n  let description_element = document.createElement('p');\r\n  description_element.textContent = description;\r\n\r\n\r\n  card.appendChild(image);\r\n  card.appendChild(description_element);\r\n  return card;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudV9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDTTtBQUNOO0FBQzNDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrQ0FBUztBQUMzQyxrQ0FBa0Msa0RBQVk7QUFDOUMsa0NBQWtDLCtDQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51X3BhZ2UuanM/MWQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3BhZ2hldHRpIGZyb20gJy4vaW1nL3NwYWdoZXR0aS5qcGcnXHJcbmltcG9ydCBjaGVlc2VfcGl6emEgZnJvbSAnLi9pbWcvY2hlZXNlLXBpenphLmpwZydcclxuaW1wb3J0IGhhbWJ1cmdlciBmcm9tICcuL2ltZy9oYW1idXJnZXIuanBnJ1xyXG5cclxuZXhwb3J0IGxldCBwYWdlX2xvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XHJcblxyXG4gIGxldCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdPdXIgR2xvcmlvdXMgTWVudSc7XHJcblxyXG4gIGxldCBzcGFnaGV0dGlfZGVzY3JpcHRpb24gPSAnVGhpcyB3b25kZXJmdWwgdGl0dWxhciBtZWFsIGlzIHBlcmZlY3RlZCBieSBvdXIgdGFsZW50ZWQgY2hlZnMuIFdlIGhpZ2hseSByZWNvbW1lbmQnIFxyXG4gIGxldCBjaGVlc2VfcGl6emFfZGVzY3JpcHRpb24gPSAnVGhpcyB3b25kZXJmdWwgdGl0dWxhciBtZWFsIGlzIGFsc28gcGVyZmVjdGVkIGJ5IG91ciB0YWxlbnRlZCBjaGVmcy4gSnVzdCBsb29rIGF0IHRoYXQgbWVsdGVkIHNoZWVzZSBhbmQgdGhlIHNpemUgb2YgdGhhdCBzZXh5IGNydXN0JyBcclxuICBsZXQgaGFtYnVyZ2VyX2Rlc2NyaXB0aW9uID0gJ0hvdyBjYW4gd2UgZ28gd2l0aG91dCBtZW50aW9uaW5nIHRoZSBjbGFzc3Nzc3NpYyEhISBXZSBtb3N0IHJlY29tbWVuZCB0aGUgYnVyZ2VyLiBGcmllcyBhcmUgYXZhaWFibGUgdG9vIHVwb24gcmVxdWVzdC4gSXRcXCdsbCBjb3N0IGEgcHJldHR5IHBlbm55IHRob3VnaCcgXHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VfY2FyZChzcGFnaGV0dGksIHNwYWdoZXR0aV9kZXNjcmlwdGlvbikpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlX2NhcmQoY2hlZXNlX3BpenphLCBjaGVlc2VfcGl6emFfZGVzY3JpcHRpb24pKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZV9jYXJkKGhhbWJ1cmdlciwgaGFtYnVyZ2VyX2Rlc2NyaXB0aW9uKSk7XHJcbn1cclxuXHJcbmxldCBtYWtlX2NhcmQgPSBmdW5jdGlvbiAoaW1hZ2VfcGF0aCwgZGVzY3JpcHRpb24pIHtcclxuICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG5cclxuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoMzAwKTtcclxuICBpbWFnZS5zcmMgPSBpbWFnZV9wYXRoO1xyXG4gIFxyXG4gIGxldCBkZXNjcmlwdGlvbl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NyaXB0aW9uX2VsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcblxyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25fZWxlbWVudCk7XHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu_page.js\n");

/***/ }),

/***/ "./src/img/cheese-pizza.jpg":
/*!**********************************!*\
  !*** ./src/img/cheese-pizza.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0edc2f78caca146e9e4d.jpg";

/***/ }),

/***/ "./src/img/chefs.jpg":
/*!***************************!*\
  !*** ./src/img/chefs.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3eee7d4fa6d3e87809ef.jpg";

/***/ }),

/***/ "./src/img/hamburger.jpg":
/*!*******************************!*\
  !*** ./src/img/hamburger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8250e23ba8f52fc843b.jpg";

/***/ }),

/***/ "./src/img/restaurant.jpg":
/*!********************************!*\
  !*** ./src/img/restaurant.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7ff93ad9c352ac9a4f9.jpg";

/***/ }),

/***/ "./src/img/spaghetti.jpg":
/*!*******************************!*\
  !*** ./src/img/spaghetti.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbe650aabe213bcf1a59.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;