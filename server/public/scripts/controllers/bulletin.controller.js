webApp.controller('bulletinController', ['bulletinService', function(bulletinService) {
    console.log('bulletin controller has been loaded');

    var self = this;
    self.bulletin = { list: [] };

}]);