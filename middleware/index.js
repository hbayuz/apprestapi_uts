var express = require('express');
var auth = require('./auth');
var control = require('../controller');
var router = express.Router();

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);

module.exports = router;