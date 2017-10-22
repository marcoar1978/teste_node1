"use strict";
var router_1 = require('@angular/router');
var pag1_component_1 = require('./pag1/pag1.component');
var pag2_component_1 = require('./pag2/pag2.component');
var pag3_component_1 = require('./pag3/pag3.component');
var interpolation_component_1 = require('./interpolation/interpolation.component');
var property_component_1 = require('./property/property.component');
var two_way_component_1 = require('./two.way/two.way.component');
var appRoutes = [
    { path: '', component: interpolation_component_1.InterpolationComponent },
    { path: 'pagina1', component: pag1_component_1.Pag1Component },
    { path: 'pagina2', component: pag2_component_1.Pag2Component },
    { path: 'pagina3', component: pag3_component_1.Pag3Component },
    { path: 'interpolation', component: interpolation_component_1.InterpolationComponent },
    { path: 'property', component: property_component_1.PropertyComponent },
    { path: 'two_way', component: two_way_component_1.TwoWayComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map