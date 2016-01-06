System.register(['angular2/testing', './cn-greeting'], function(exports_1) {
    var testing_1, cn_greeting_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cn_greeting_1_1) {
                cn_greeting_1 = cn_greeting_1_1;
            }],
        execute: function() {
            testing_1.describe('CnGreeting Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(cn_greeting_1.CnGreeting).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-greeting/cn-greeting.spec.js.map