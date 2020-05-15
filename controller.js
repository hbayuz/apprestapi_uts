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
exports.tampilsemuasparepart = function (req, res) {
    connection.query('SELECT * FROM t_sparepart', function (error, rows, fields) {
        if (error) {
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

//menampilkan semua data sparepart berdasarkan id
exports.tampilsemuasparepartberdasarkanid = function (req, res) {
    let id = req.params.id
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menambahkan data servis
exports.tambahdataservis = function (req, res) {
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var id_sparepart = req.body.id_sparepart;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    
    connection.query('INSERT INTO t_servis (tgl_servis,id_user,id_montir,id_sparepart,jumlah_sparepart) VALUES (?,?,?,?,?)',
        [tgl_servis, id_user, id_montir, id_sparepart, jumlah_sparepart],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Input Data Servis Sukses", res);
            }
        });
};

//menampilkan total biaya
exports.tampilgroupsparepart = function (req, res) {
    connection.query('SELECT t_user.nama_user, t_servis.tgl_servis, t_montir.Nama_montir, t_sparepart.nama_sparepart, t_sparepart.harga_sparepart, t_servis.jumlah_sparepart, (harga_perjam + jumlah_sparepart * harga_sparepart) AS total_harga FROM t_servis JOIN t_user JOIN t_montir JOIN t_sparepart WHERE t_servis.id_user = t_user.id_user AND t_servis.id_montir = t_montir.id_montir AND t_servis.id_sparepart = t_sparepart.id_sparepart ORDER BY t_user.id_user ',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res);
            }
        }
    )
};

//menambahkan data montir
exports.tambahMontir = function (req, res) {
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (Nama_montir,harga_perjam) VALUES(?,?)',
        [Nama_montir, harga_perjam],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data Montir!", res)
            }
        });
};

//menambahkan data sparepart
exports.tambahSparepart = function (req, res) {
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (nama_sparepart, harga_sparepart, satuan) VALUES (?,?,?)',
        [nama_sparepart, harga_sparepart, satuan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data Sparepart!", res)
            }
        });
};

//menambahkan data user
exports.tambahuser = function (req, res) {
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;

    connection.query('INSERT INTO t_user (nama_user,email,password,level) VALUES (?,?,?,?)',
    [nama_user,email,password,level],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Input User Sukses", res);
            }
        });
};

//menambahkan data level
exports.tambahlevel = function (req, res) {
    var nama_level = req.body.nama_level;    

    connection.query('INSERT INTO t_level (nama_level) VALUES (?)',
    [nama_level],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Level Berhasil Di tambahkan", res);
            }
        });
};

//menambahkan data service
exports.tambahservis = function (req, res) {
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var id_sparepart = req.body.id_sparepart; 
    var jumlah_sparepart = req.body.jumlah_sparepart;
       

    connection.query('INSERT INTO t_servis (tgl_servis,id_user,id_montir,id_sparepart,jumlah_sparepart) VALUES (?,?,?,?,?)',
    [tgl_servis, id_user, id_montir, id_sparepart, jumlah_sparepart],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Servis Berhasil di Tambahkan", res);
            }
        });
};

//mengubah data montir berdasarkan id
exports.ubahMontir = function (req, res) {
    var id = req.body.id_montir
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET Nama_montir=?, harga_perjam=? WHERE id_montir=?',
        [Nama_montir, harga_perjam, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data Montir!", res)
            }
        });
};

//mengubah data sparepart berdasarkan id
exports.ubahSparepart = function (req, res) {
    var id = req.body.id_sparepart
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('UPDATE t_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?',
        [nama_sparepart, harga_sparepart, satuan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data Sparepart!", res)
            }
        });
};

//menghapus data montir berdasarkan id
exports.hapusMontir = function (req, res) {
    var id = req.body.id_montir;
    connection.query('DELETE FROM t_montir WHERE id_montir=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data Montir!", res)
            }
        });
};

//menghapus data sparepart berdasarkan id
exports.hapusSparepart = function (req, res) {
    var id = req.body.id_sparepart;
    connection.query('DELETE FROM t_sparepart WHERE id_sparepart=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data Sparepart!", res)
            }
        });
};

