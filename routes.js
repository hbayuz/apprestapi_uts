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

    //sparepart
    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuasparepart);
    app.route('/tampilsparepart/:id')
        .get(jsonku.tampilsemuasparepartberdasarkanid);
}