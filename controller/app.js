angular.module('app', []);

angular.module('app').controller('MainCtrl', function (){
	var self = this;
  this.message = 'hello';

  this.updateMessage = function(message){
    this.message = message;
  };
});
