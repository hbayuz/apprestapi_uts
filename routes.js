'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    //montir
    app.route('/tampilmontir')
        .get(jsonku.tampilsemuamontir);
    app.route('/tampilmontir/:id')
        .get(jsonku.tampilsemuamontirberdasarkanid);
    app.route('/tambahmontir')
        .post(jsonku.tambahMontir);
    app.route('/ubahmontir')
        .put(jsonku.ubahMontir);

    //sparepart
    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuasparepart);
    app.route('/tampilsparepart/:id')
        .get(jsonku.tampilsemuasparepartberdasarkanid);
    app.route('/tambahsparepart')
        .post(jsonku.tambahSparepart);
    app.route('/ubahsparepart')
        .put(jsonku.ubahSparepart);
}