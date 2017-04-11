(function() {
    "use strict";

    angular.module('public')
           .controller('SignupController', SignupController);

    SignupController.$inject = ['SignupService'];
    function SignupController(SignupService) {
        var signupCtrl = this;
        var firstName = '';
        var lastName = '';
        var emailAddress = '';
        var phoneNumber = '';
        var favDish = '';

        signupCtrl.Submit = function() {

        };
    }

})();