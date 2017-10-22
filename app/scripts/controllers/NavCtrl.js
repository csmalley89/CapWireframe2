"use strict";

app.controller('NavCtrl', function ($scope, DataStorage){
  DataStorage.getSchoolList()
  .then((schoolCollection) => {
    $scope.schools = schoolCollection;
  });
});
