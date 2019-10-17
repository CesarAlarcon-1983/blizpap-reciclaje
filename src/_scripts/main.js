// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
//global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var Creaciones = require('./creaciones');

$(function() {

    new Header();
    new Creaciones();
    new Slider();
});
