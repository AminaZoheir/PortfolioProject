var mod = angular.module('portfolio',['ui.router', 'ui.bootstrap', 'ngAnimate']);

mod.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider.state('home', {
			url:'/home',
			templateUrl: '_home.html'
		})
		.state('portfolio', {
			url: '/portfolio',
			templateUrl: '_portfolio.html',
			controller: 'PortfolioCtrl'
		})

		$urlRouterProvider.otherwise('/home');
	}])

mod.controller('PortfolioCtrl', ['$scope',  
	function($scope){
		$scope.categories = [{name:"Architecture", image:"architecture.png"}, 
							{name:"Urban", image:"architecture.png"}, 
							{name:"Interior", image:"architecture.png"}];
		$scope.projects = [{name: "project1", desc: "bla bla", category:$scope.categories[1], images:["", "", ""]},
							{name: "project2", desc: "bla bla", category:$scope.categories[2], images:["", "", ""]},
							{name: "project3", desc: "bla bla", category:$scope.categories[2], images:["", "", ""]}];
		$scope.chooseCat = function(cat){
			$scope.currCat = cat.name;
			$scope.projects = $scope.projects.filter(function(proj){
				return proj.category.name == cat.name;
			});
		}

		$scope.chooseProj = function(proj){
			$scope.currProj = proj;
		}
}]);

angular.module('portfolio').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [{image: 'images/1.jpeg'},{image: 'images/2.jpeg'},{image: 'images/3.jpeg'}];
});