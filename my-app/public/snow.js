window.onload = function() {

  //returns  position of mouse on canvas
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
  }

  //store canvas element
  var canvas = document.getElementById("sky");
  var context = canvas.getContext("2d");

  //set canvas properties
  var width = window.innerWidth;
  var height = window.innerHeight;
  canvas.width = width - 30;
  canvas.height = height -20;

  //generate snowflakes and set properties
  var numOfFlakes = 100;
  var flakes = [];

  for(var i = 0; i < numOfFlakes; i++){
    flakes.push({
      x: Math.random()*width,
      y: Math.random()*height,
      r: Math.random()*5+2,   //sets max radius 2px-7px
      d: Math.random() + 1    //density of the flake
    })

  }

  //draw flakes
  function drawFlakes()
  {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "white"; //anything drawn is white
    context.beginPath();         //begin a shape 
    for(var i = 0; i < numOfFlakes; i++){
      var flake = flakes[i];
      context.moveTo(flake.x, flake.y);  //move to the position of flake
      context.arc(flake.x, flake.y, flake.r, 0, Math.PI*2, true); //draws the flake
    }
    context.fill();
    //context.closePath(); 

    moveFlakes();
  }
  
  //animate flakes
  var angle = 0;
  var snowShift = 2;

  function moveFlakes(){
    angle += 0.01;
    for(var i = 0; i < numOfFlakes; i++){
      var flake = flakes[i];

      //updates flake
      flake.y += Math.pow(flake.d, 2) + 1; //pushes the snowflake down
      flake.x += Math.sin(angle) * snowShift;      //oscillates back and forth

      //resets snowflake once it reaches bottom
      if(flake.y > height){
        //random x value and puts it back to the top of the page
        flakes[i] = {x: Math.random()*width, y:0, r:flake.r, d:flake.d};
      }

    }

  }

  function moveMouseFlakes(evt){
    
    angle += 0.01;
    for(var i = 0; i < numOfFlakes; i++){
      var flake = flakes[i];

      //updates flake
      flake.y += Math.pow(flake.d, 2) + 1; //pushes the snowflake down
      flake.x += Math.sin(angle) * snowShift;      //oscillates back and forth

      //resets snowflake once it reaches bottom
      if(flake.y > height){
        //random x value and puts it back to the top of the page
        flakes[i] = {x: Math.random()*width, y:0, r:flake.r, d:flake.d};
      }

    }
    

  }

  setInterval(drawFlakes, 25);

}
