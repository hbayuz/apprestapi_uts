'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
}

//response untuk nested servis
exports.oknested = function (values, res) {
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {
        //tentukan key group
        if (akumulasikan[item.nama]) {
            //buat variable grup nama user
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah sparepart
            if (Array.isArray(group.sparepart)) {
                //tambahkan value ke dalam group sparepart
                group.sparepart.push(item.sparepart);
            } else {
                group.sparepart = [group.sparepart, item.sparepart];
            }
        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': hasil
    };

     res.json(data);
     res.end();
}