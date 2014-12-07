'use strict';

describe('Controller: DrawingsCtrl', function () {

  // load the controller's module
  beforeEach(module('myappApp'));

  var DrawingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrawingsCtrl = $controller('DrawingsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
