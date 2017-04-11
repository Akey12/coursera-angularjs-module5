(function() {
    "use strict";

    angular.module('common')
        .service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'ApiPath'];
    function SignupService($http, ApiPath) {
        var service = this;
        var firstName = '';
        var lastName = '';
        var emailAddresss = '';
        var phoneNumber = '';
        var favDish = '';

        service.signUp = function (signupInfo) {
            firstName = signupInfo['firstName'];
            lastName = signupInfo['lastName'];
            emailAddresss = signupInfo['emailAddress'];
            phoneNumber = signupInfo['phoneNumber'];
            favDish = signupInfo['favDish'];
        };

        service.getDishByShortName = function(shortName) {
            return $http.get(ApiPath + '/menu_items/short-name.json').then(function(response) {
                return response.data;
            });
        };

        service.getSignupInfo = function () {
            var info = new { 'firstName': service.firstName, 'lastName': service.lastName, 'emailAddress': service.emailAddress, 'phoneNumber': service.phoneNumber, 'favDish': service.favDish };
            return info;
        };

    }

})();