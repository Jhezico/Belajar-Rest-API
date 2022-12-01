'use strict';

var respon = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
  respon.ok("Aplikasi Rest API berjalan", res)
};

// menampilkan semuda data mahasiswa
exports.tampilSemuaDataMahasiswa = function (req, res) {
  connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
    if (error) {
      connection.log(error)
    } else {
      respon.ok(rows, res)
    }
  });
};