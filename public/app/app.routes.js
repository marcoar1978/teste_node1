"use strict";
var router_1 = require('@angular/router');
var pag1_component_1 = require('./pag1/pag1.component');
var pag2_component_1 = require('./pag2/pag2.component');
var pag3_component_1 = require('./pag3/pag3.component');
var appRoutes = [
    { path: '', component: pag3_component_1.Pag3Component },
    { path: 'pagina1', component: pag1_component_1.Pag1Component },
    { path: 'pagina2', component: pag2_component_1.Pag2Component },
    { path: 'pagina3', component: pag3_component_1.Pag3Component }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map