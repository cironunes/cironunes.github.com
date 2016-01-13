System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './app/cironunes'], function(exports_1) {
    var core_1, browser_1, router_1, cironunes_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cironunes_1_1) {
                cironunes_1 = cironunes_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(cironunes_1.CironunesApp, [
                router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=../../app.js.map