'use strict';

var respon = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
  respon.ok("Aplikasi Rest API berjalan", res)
};