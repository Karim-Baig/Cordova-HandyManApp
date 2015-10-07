angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$state) {
})



.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
console.log("ChatsCtrl called");
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ComplainsCtrl', function($scope, $stateParams, $state, $ionicHistory, Chats) {

    console.log("ComplainsCtrl called " );
})

.controller('NotificationCtrl',function($scope, $stateParams, $state, $ionicHistory, Chats){
  
  console.log("notiificationcontroller called " );
})

.controller('StatusCtrl',function($scope, $stateParams, $state, $ionicHistory, Chats){
 
  console.log("StatusCtrl called" );
  
})

.controller('GenderCtrl',function($scope){

  console.log("Gender Controller Called");
  $scope.genders = [{'value':'male','Name':'Male'},{'value':'female','Name':'Female'}];
  
})

.controller('CompCtrl',function($scope,$ionicHistory){
  console.log("Complaint Controller Called");
  $scope.genders = [{'value':'male','Name':'Male'},{'value':'female','Name':'Female'}];
  
})

.controller('RepairCtrl', function($scope,$http, $ionicPopup, $state) {
  $scope.RepairDetails=null;
  $scope.
  $http.get().success()
})



.controller('SignupCtrl', function($scope,$http, $ionicPopup, $state) {

    $scope.signup = {};
    $scope.error ;
$scope.signup=function()
{
  if (JSON.stringify($scope.signup.password)==JSON.stringify($scope.signup.retypepassword)) 
  {
    console.log($scope.signup.gender);
  console.log("Password match")
   $http.get("http://192.168.0.114/DemoLoginTestDemo/DemoRest.svc/signup/"+$scope.signup.fname+
    "/"+$scope.signup.lname+"/"+$scope.signup.telnumber+"/"+$scope.signup.address+"/"
    +$scope.signup.idnumber+"/"+$scope.signup.email+"/"+$scope.signup.password+"/"+$scope.signup.gender)
              .success(
                function(response) {

                  console.log(response);
                  if(response.returnSignUpResult=="true"){
                     $state.go('tab.dash');
                      var alertPopup = $ionicPopup.alert({title: 'Sign Up Success!',template: 'Sign Up Successfull'});
                      console.log("navigate to login page");
                  }else {
                      var alertPopup = $ionicPopup.alert({title: 'Error!',template: 'Email Address Already exist in our database'});
                      console.log("show error message");
                      $scope.error = "Please sign up  with different email address";
                  }
                }
              ).error(
                function(error){
                   console.log("Error here");
                   $scope.error = "Please try after sometime. Service Unavailable";
                }
              );
  }
else
  {
console.log("password do not match");
  } 
}
})



.controller('LoginCtrl', function($scope, $http, $ionicPopup, $state) {
    $scope.data = {};
    $scope.error ;
 
    $scope.login = function() {
        $http.get("http://192.168.0.114/DemoLoginTestDemo/DemoRest.svc/login/"+$scope.data.username+"/"+$scope.data.password)
              .success(
                function(response) {
                  console.log(response);
                  if(response.returnConfirmationResult=="true"){
                     $state.go('tab.dash');
                      console.log("navigate to home page");
                  }else {
                      var alertPopup = $ionicPopup.alert({title: 'Login failed!',template: 'Please check your credentials!'});
                      console.log("show error message");
                      $scope.error = "Please login with valid username and/or password";
                  }
                }
              ).error(
                function(error){
                   console.log("Error here");
                   $scope.error = "Please try after sometime. Service Unavailable";
                }
              );
    }
    $scope.signup=function(){
     $state.go('signup');

    }
})



.controller('AccountCtrl', function($scope,$state,$http) {
  $scope.signout =function() {
    console.log("I clicked sign out");
    $state.go('login');
  };
});
