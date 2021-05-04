'use strict';
define(function(require) {
    var module = require('components/attendancelist/module');
    
    module.controller('attListController', ['$scope', '$q', '$http', '$attrs', 'attPQService', function($scope, $q, $http, $attrs, attPQService) { // Begin controller
        $scope.message = 'attListConttroller message.';
        $scope.curStud = $attrs.ngCurStudent;
        
        //loadingDialog();
        
        // request object
        var datasource = {
           "method": "POST",
           "url": "/ws/schema/query/us.pcps.individual.att.flattened",
           "params": {"id": $scope.curStud},
           "headers": {
             "Content-Type": "application/json",
             "Accept": "application/json"
           }
        };
        
        let getAttList = attPQService.getAttData(datasource).then(function(retData) {
            if(!retData.record) {
                console.log("attPQService returned no data.");
                //closeLoading();
            }
            else {
                console.log(retData);
            }
        });
        
    }]); // End Controller
});