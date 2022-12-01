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
      console.log(error)
    } else {
      respon.ok(rows, res)
    }
  });
};

// Menampilakn semuda data mahasiswa berdasarkan id
exports.tampilBerdasarkanId = function (req, res) {
  let id = req.params.id
  connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error)
      } else {
        respon.ok(rows, res)
      }
    });
};