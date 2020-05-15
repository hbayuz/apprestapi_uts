var express = require('express');
var auth = require('./auth');
var control = require('../controller');
var router = express.Router();
var verifikasi = require('./verifikasi');

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

//level 2
router.post('/user/pelanggan/tambahdataservis', verifikasi.verifikasi2(), control.tambahdataservis)
router.get('/user/pelanggan/tampil/biayaservis', verifikasi.verifikasi2(), control.tampilgroupsparepart);

//level 1
router.post('/user/admin/input/montir', verifikasi.verifikasi1(), control.tambahMontir);
router.post('/user/admin/input/sparepart', verifikasi.verifikasi1(), control.tambahSparepart);
router.post('/user/admin/input/user', verifikasi.verifikasi1(), control.tambahuser);
router.post('/user/admin/input/level', verifikasi.verifikasi1(), control.tambahlevel);
router.post('/user/admin/input/servis', verifikasi.verifikasi1(), control.tambahservis);

module.exports = router;