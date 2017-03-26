function TestCtrl() {
  // basic controller where we preset the scope myString variable
  var self = this;
}


function CapitalizeFilter(){
	return text => text === undefined? 'hello world'.toUpperCase() : text.toUpperCase()
}

angular.module('app', [])
.controller('TestCtrl', TestCtrl)
.filter('capitalize', CapitalizeFilter)