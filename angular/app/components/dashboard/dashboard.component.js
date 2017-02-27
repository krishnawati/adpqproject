class DashboardController {
  constructor ($scope,$geolocation,geolocation,$http) {
    'ngInject'

    $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    $scope.series = ['Series A', 'Series B']
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ]
    $scope.coords={

    };

     $scope.data = {
     model: null,
     availableOptions: [
       {id: '1', name: '25'},
       {id: '2', name: '50'},
       {id: '3', name: '100'}
     ]
    };
    $scope.submit = function(){
      console.log("hi");
    }

    var vm = this;
     $scope.vm.cities = {
      position:[]
    }
    $scope.miles = [25,50,100,200,300];
    $scope.init = function () {}
     geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
       $scope.vm.cities.position.push($scope.coords.lat);
     $scope.vm.cities.position.push($scope.coords.long);
    });
     $scope.init();
   
    $scope.vm.getRadius = function(num){
      return num * 1000;
    }
   
    
    $scope.pieLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']
    $scope.pieData = [300, 500, 100]
  }
}

export const DashboardComponent = {
  templateUrl: './views/app/components/dashboard/dashboard.component.html',
  controller: DashboardController,
  controllerAs: 'vm',
  bindings: {}
}
