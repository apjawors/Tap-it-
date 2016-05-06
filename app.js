var c = document.getElementById("canvas");
c.width  = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");

$('.intro').click(function() {
  $(this).fadeOut(); // Fade start screen on tap
})

var app = angular.module('myApp', []);
app.controller('scoreCtrl', function($scope) {
    $scope.count = 0;
    $scope.countFunction = function() {
        if($scope.count <= 10){
          $scope.count++;
        }
        if($scope.count > 10){
          $scope.count += 2;
          $('.words').replaceWith('<h1 class="new-words">Double points!</h1>');
        }
    }
});
app.controller('timerCtrl', function($scope) {  // Start timer on tap
    $scope.timer = 20;
    $scope.timerFunction = function timerFunction() {
      $('#canvas').one("click", function() {
        if($scope.timer > 0){
          setInterval(function(){$scope.timer--}, 1000);
        };
      });
    };
})


$('#canvas').click(function(event) {  // Wherever the user taps, an animation of a random-colored circle will occur at that point
  var x = event.clientX;
  var y = event.clientY;
  var radius = 10;
  function color(){
    var hue = Math.floor(Math.random() * 256);
    return hue;
  };
  var randomColor = "rgba(" + color() + "," + color() + "," + color() + ", .6)";  
  draw();
  function draw() {
    requestAnimationFrame(draw);
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fillStyle = randomColor;
    ctx.fill();
    radius += 20;
  }
});

