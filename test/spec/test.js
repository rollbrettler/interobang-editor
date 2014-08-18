/*global describe, it */
'use strict';
var app = app || {};

(function () {
  describe('Test column model', function () {

    var columnModelTest;

    beforeEach(function () {
      columnModelTest = new app.ColumnModel();
    });

    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(columnModelTest.toBeDefined());
      });
    });
  });
})();
