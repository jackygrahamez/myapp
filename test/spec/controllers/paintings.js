'use strict';

describe('Controller: PaintingsCtrl', function () {

  // load the controller's module
  beforeEach(module('myappApp'));

  var PaintingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaintingsCtrl = $controller('PaintingsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
