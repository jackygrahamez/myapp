'use strict';

describe('Controller: 3dAnimationsCtrl', function () {

  // load the controller's module
  beforeEach(module('myappApp'));

  var 3dAnimationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    3dAnimationsCtrl = $controller('3dAnimationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
