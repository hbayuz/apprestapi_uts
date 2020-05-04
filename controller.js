'use strict';

var response = require('./res');
var conn = require('./koneksi');

exports.index = function require(req, res) {
    response.ok("Aplikasi REST API Berjalan Mulus~")
};