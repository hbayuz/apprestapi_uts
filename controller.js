'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function require(req, res) {
    response.ok("Aplikasi REST API Berjalan Mulus~", res)
};

//menampilkan semua data montir
exports.tampilsemuamontir = function (req, res) {
    connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data sparepart
exports.tampilsemuasparepart = function(req, res) {
    connection.query('SELECT * FROM t_sparepart', function (error, rows, fields) {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data montir berdasarkan id
exports.tampilsemuamontirberdasarkanid = function (req, res) {
    let id = req.params.id
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};
