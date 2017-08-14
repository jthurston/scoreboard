var app = angular.module("ap",[]);

app.controller("con",function($scope){

    $scope.reset = function(){
      $scope.homeTeam = "Wildcats";      
    	$scope.homeScore = 0;
	    $scope.homeTimeout = 0;
      $scope.visitTeam = "Spartans";
  	  $scope.visitScore = 0;
	    $scope.visitTimeout = 0;
	    $scope.per = 0;
      $scope.sections = "Period";
      $scope.hColor = "#ff0000";
			$scope.htColor = "#ffffff";
      $scope.vColor = "#ff00ff";
			$scope.vtColor = "#ffffff";      
      $scope.hStyle = {'background-color':$scope.hColor,'color':$scope.htColor};
      $scope.vStyle = {'background-color':$scope.vColor,'color':$scope.vtColor};
      nb=0;
    };
	
  //$scope.reset();
  
  $scope.changeColor = function(){
		$scope.hStyle = {'background-color':"#"+$scope.hColor,'color':"#"+$scope.htColor};
		$scope.vStyle = {'background-color':"#"+$scope.vColor,'color':"#"+$scope.vtColor};
    $scope.bColor = {'background-color':"#"+$scope.bgColor};
  };

	$scope.scoreHS = function(nb){
  	$scope.homeScore = $scope.homeScore + nb;
    $scope.homeScore = checkOverage($scope.homeScore);    
  };
  
	$scope.scoreVS = function(nb){
  	$scope.visitScore = $scope.visitScore + nb;
    $scope.visitScore = checkOverage($scope.visitScore);    
  };
  
  $scope.zeroHS = function(nb){
  	$scope.homeScore = 0;
  }
  
  $scope.zeroVS = function(nb){
  	$scope.visitScore = 0;
  }
  
  
    $scope.period = function(pt){
    	$scope.per++;
      if(pt == 'Q') {
	      $scope.sections = "Quarter";
	      if ($scope.per > 4) {
		      $scope.per=0;
      	}        
      }          
      if(pt == 'P') {
	      $scope.sections = "Period";
	      if ($scope.per > 3) {
		      $scope.per=0;
      	}        
      }          
      
    }
    
    function checkOverage(score){
    	if (score < 0){
	    	return 0;
      } else {
      	return score;
      }
    };
    
});