function getData($timeout, $q){
	return function(){

		return $q((resolve, reject) => {
			$timeout(() => {
				if(Math.round(Math.random())){
					resolve('data recieved')
				} else {
					reject('oh no an error! try again')
				}
			}, 2000)
		})
	}
}

angular.module('app', [])
.factory('getData', getData)
.run(function(getData){
	var promise = getData()
		.then( string => { console.log(string) })
		.catch( error => { console.log(error) })
		.finally(() => { console.log('done') })
})