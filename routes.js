'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilmontir')
        .get(jsonku.tampilsemuamontir);
    app.route('/tampilmontir/:id')
        .get(jsonku.tampilsemuamontirberdasarkanid);

    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuasparepart);
    app.route('/tampilsparepart/:id')
        .get(jsonku.tampilsemuasparepartberdasarkanid);

    app.route('/tambahmontir')
        .post(jsonku.tambahMontir);
}