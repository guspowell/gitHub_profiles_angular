describe('gitUserSearchController', function(){

  beforeEach(module('GitUserSearch'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('GitUserSearchController', function() {
      $scope: scope
    });
  }));

  it('initialises with an empty search result and term', function() {
    expect(scope.searchResult).toBeUndefined();
    expect(scope.searchTerm).toBeUndefind();
  });

});
