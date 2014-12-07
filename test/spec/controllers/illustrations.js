'use strict';

describe('Controller: IllustrationsCtrl', function () {

  // load the controller's module
  beforeEach(module('myappApp'));

  var IllustrationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IllustrationsCtrl = $controller('IllustrationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
