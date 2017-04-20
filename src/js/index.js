/*
*
* Main file for build app
*
*/
//scss 
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import '../assets/styles/style.scss';

//javascript
// import { sayHello } from './hello.js';
// import { showMessage, showImage, showSvg } from './jqueryDemo.js';

//require loader
//require('!!script-loader!./libs/jquery-3.2.0.min.js');
//require('!!script-loader!./libs/bootstrap.min.js');

window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');
// sayHello();
// showMessage();
// showImage('');
// showSvg('');
