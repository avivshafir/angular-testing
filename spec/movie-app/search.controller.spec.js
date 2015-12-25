/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe('Search Controller', function () {
    var $this;
    var $controller;
    var $location;
    beforeEach(angular.mock.module('movieApp'));
    beforeEach(inject(function (_$controller_, _$location_) {
        $location = _$location_;
        $controller = _$controller_;
    }));
    it('should redirect to the query results page for non empty query', function () {
        $this = $controller('SearchController', { $location: $location }, { query: 'star wars' });
        $this.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });
    it('should not redirect to query results for empty query', function () {
        $this = $controller('SearchController', { $location: $location }, { query: '' });
        $this.search();
        expect($location.url()).toBe('');
    });
});
//# sourceMappingURL=search.controller.spec.js.map