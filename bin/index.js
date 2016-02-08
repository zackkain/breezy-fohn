System.register(['angular2/platform/browser', 'components/people.ts'], function(exports_1) {
    var browser_1, people_ts_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (people_ts_1_1) {
                people_ts_1 = people_ts_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(people_ts_1.AppComponent);
        }
    }
});
//# sourceMappingURL=index.js.map