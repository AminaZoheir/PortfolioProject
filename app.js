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
		$scope.categories = {"Architecture":{name:"Architecture", image:"architecture.png", subCats:[{name:"archSub1", image:""},
																						{name:"archSub2", image:""}]},
							"Urban":{name:"Urban", image:"architecture.png", subCats:[{name:"urbSub1", image:""},
																						{name:"urbSub2", image:""}]},
							"Interior":{name:"Interior", image:"architecture.png", subCats:[{name:"IntSub1", image:""},
																						{name:"IntSub2", image:""}]}};


		$scope.subCats = {"Architecture":[],
							"Urban":[],
							"Interior":[]};

		$scope.projectsOriginal = [{name: "project1", desc: "bla bla", category:$scope.categories["Urban"], images:["", "", ""]},
							{name: "project2", desc: "bla bla", category:$scope.categories["Interior"], images:["", "", ""]},
							{name: "project3", desc: "bla bla", category:$scope.categories["Interior"], images:["", "", ""]},
							{name: "project1", desc: "bla bla", category:$scope.categories["Urban"], images:["", "", ""]},
							{name: "project2", desc: "bla bla", category:$scope.categories["Interior"], images:["", "", ""]},
							{name: "project3", desc: "bla bla", category:$scope.categories["Interior"], images:["", "", ""]}];

		$scope.projects = $scope.projectsOriginal

		$scope.chooseCat = function(cat){
			$scope.subCats[$scope.currCat] = []
			$scope.currCat = cat.name;
			$scope.subCats[cat.name] = $scope.categories[cat.name].subCats;
			// console.log($scope.subCats[cat.name]);
			$scope.projects = $scope.projectsOriginal.filter(function(proj){
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
