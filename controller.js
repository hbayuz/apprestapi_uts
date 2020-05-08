'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function require(req, res) {
    response.ok("Aplikasi REST API Berjalan Mulus~", res)
};

//menampilkan semua data montir
exports.tampilsemuamontir = function(req, res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};