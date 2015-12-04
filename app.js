var mod = angular.module('portfolio',['ui.router', 'ui.bootstrap', 'ngAnimate']);

angular.module('portfolio').factory('projects',[function(){
	var o = {
		projects: [{id: 0, name: "Binbaz", desc: "", category: "Architecture", subcategory: "Residential Buildings", images: [{image:"images/homeProjects/1-Binbaz, arch, res building.jpg"}, {image:"images/homeProjects/02-Laleh Tower, arch, complex.jpg"},{image: "images/homeProjects/3-Hayel, arch, Complex.jpg"}], image: "images/homeProjects/1-Binbaz, arch, res building.jpg"},
		{id: 1, name: "Laleh Tower", desc: "", category: "Architecture", subcategory: "Complexes", images:[{image:"images/homeProjects/02-Laleh Tower, arch, complex.jpg"}], image: "images/homeProjects/02-Laleh Tower, arch, complex.jpg"},
		{id: 2, name: "Hayel", desc: "", category: "Architecture", subcategory: "Complexes", images:[{image:"images/homeProjects/3-Hayel, arch, Complex.jpg"}], image: "images/homeProjects/3-Hayel, arch, Complex.jpg"},
		{id: 3, name: "Al Madina Road", desc: "", category: "Architecture", subcategory: "Complexes", images:[{image:"images/homeProjects/04-Al Madina Road, arch, complex.jpg"}], image: "images/homeProjects/04-Al Madina Road, arch, complex.jpg"},
		{id: 4, name: "Al Tamieez", desc: "", category: "Architecture", subcategory: "Hotels", images:[{image:"images/homeProjects/05-Al Tamieez, arch, hotels.jpg"}], image: "images/homeProjects/05-Al Tamieez, arch, hotels.jpg"},
		{id: 5, name: "Al Aqeela", desc: "", category: "Architecture", subcategory: "Complexes", images:[{image:"images/homeProjects/06-Al Aqeela, arch, complex.jpg"}], image: "images/homeProjects/06-Al Aqeela, arch, complex.jpg"},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		// {name:, desc:, category:, subcategory:, images:[]},
		{id: 18, name: "Vila Al Zubairy", desc: "" , category: "Architecture", subcategory: "Hotels", images:["images/homeProjects/19 Vila Al Zubairy, arhc, hotels.jpg"], image: "images/homeProjects/19 Vila Al Zubairy, arhc, hotels.jpg"}]
	};
	return o;
}]);

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
		.state('project', {
			url: '/project/:id',
			templateUrl: '_project.html',
			controller: 'ProjectCtrl'
		})

		$urlRouterProvider.otherwise('/home');
	}])

mod.controller('PortfolioCtrl', ['$scope','projects',
	function($scope,projects){
		$scope.categories = {"Architecture":{name:"Architecture", image:"architecture.png", subCats:[{name:"Complexes", image:""},
																						{name:"Hotels", image:""},{name:"Residential Buildings", image:""},{name:"Residential Compounds", image:""},
																					   {name:"Admin", image:""},{name:"Retail", image:""}]},
							"Urban":{name:"Urban", image:"architecture.png", subCats:[]},
							"Interior":{name:"Interior", image:"architecture.png", subCats:[{name:"Residential Private", image:""}]}};


		$scope.subCats = {"Architecture":[],
							"Urban":[],
							"Interior":[]};

		$scope.projectsOriginal = projects.projects;

		$scope.projects = $scope.projectsOriginal

		$scope.chooseCat = function(cat){
			$scope.subCats[$scope.currCat] = []
			$scope.currCat = cat.name;
			$scope.subCats[cat.name] = $scope.categories[cat.name].subCats;
			// console.log($scope.subCats[cat.name]);
			$scope.projects = $scope.projectsOriginal.filter(function(proj){
				return proj.category == cat.name;
			});
		}

		$scope.chooseSubCat = function(subCat){
			$scope.currSubCat = subCat.name
			$scope.projects = $scope.projectsOriginal.filter(function(proj){
				return proj.subcategory == subCat.name;
			});
		}

		$scope.chooseProj = function(proj){
			$scope.currProj = proj;
		}
}]);

angular.module('portfolio').controller('ProjectCtrl', ['$scope', '$stateParams',
	'projects',
	function($scope, $stateParams, projects){
	$scope.project = projects.projects[$stateParams.id];
	$scope.photos = $scope.project.images;
	$scope.setActive = function(image){
		image.active=true;
	}
}]);


angular.module('portfolio').controller('CarouselDemoCtrl', ['$scope', 'projects', function ($scope, projects) {
  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = projects.projects;
}]);

angular.module('portfolio').controller('ProjectCarouselCtrl', ['$scope', '$stateParams',
	'projects', function ($scope, $stateParams, projects) {
  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = projects.projects[$stateParams.id].images;
}]);
