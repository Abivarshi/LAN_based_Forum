var app = angular.module('chatApp',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login',{
            url:'/',
            views:{
                'body':{
                    templateUrl:'/view/pages/login.html',
                    controller:'loginController'
                }
            }
        })
        .state('loggedin',{
            url:'/login',
            views:{
                'body':{
                    templateUrl:'/view/pages/socket.html',
                    controller:'chatController'
                }
            }
        })
}]);

app.controller('loginController',['$scope','$http','$state',function($scope,$http,$state){
    url= location.host;

    $scope.user={
        'username':'',
        'name':'',
        'occupation':'',
        'password':'',
        'email':'',
        'phone_no':''
    };

    $scope.login_data={
        'username':'',
        'password':''
    };

    $scope.login = function(){
        console.log("login");
        console.log($scope.login_data);
        $http({ method: 'POST', url:'http://'+url+'/login', data:$scope.login_data })
            .success(function (data) {
                if(data=="success"){
                    console.log("Inside success login");
                    $state.go('loggedin');
                }else{
                    console.log(data);
                }
            })
            .error(function (data) {
                console.log(data)
            });
    }
}]);

app.factory('socket', function(io){
    var socket = io.connect();
    console.log("AAAAAA");
    return socket;
});
/*app.factory('socket', function(io) {
    var socket = io.connect();

    return {
        on: function(eventName, callback){
            socket.on(eventName, callback);
        },
        emit: function(eventName, data) {
            socket.emit(eventName, data);
        }
    };
});*/

app.controller("chatController", ['$scope','socket', function ($scope, socket) {
    console.log("Finally got it");
    $scope.msgs=[];
    $scope.send = function () {
        socket.emit('send msg', $scope.msg.text);
        console.log($scope.msg.text);
    };
    socket.on('get msg', function (data) {
        $scope.msgs.push(data);
    })
}]);

/*app.controller('chatController',function ($scope) {
    var socket = io();
    $scope.message='';
    console.log('connected!!!');
    $scope.send=function(){
        socket.emit('chat message', message);
        return false;
    };
    socket.on('chat message', function(msg){
        ('#messages').append(('<li>').text(msg));
    });
});*/