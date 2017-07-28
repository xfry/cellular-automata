// INTERFACE DECLARATION
/* 
  EL siguiente ejercicio tiene como objetivo demostrar la (suma) de vectores y 
  lo haremos a través de la representación de un mundo o escenario en el cual se
  desplazarán dos circulos de manera aleatoria.
  1. creación del vector:
  2. creación del escenario de simulación con html5 canvas
  3. agregar los circulos al escenario
*/

//1. Se define la función constructora de un vector, el cual esta constutido
//
var Vector = function(x,y,z) {
		return {
    	x: x, //variables para ubicación y velocidad
      y: y,
      z: z || 0,
      
      add: function(newVector) {
        this.x = this.x + newVector.x;
        this.y = this.y + newVector.y;
        this.z = this.x + newVector.z || 0;
      }
    };
};

var World = function() {
	this.canvas = document.createElement("canvas");
  this.w = 0,
  this.h = 0,
  this.ctx = this.canvas.getContext('2d');
};

var Circle = function(x, y, r, sA, eA) {
	this.location = new Vector(x,y,1);
  this.speed = new Vector(1,1,1);
  this.r = r;
  this.sA = sA,
  this.eA = eA,
  
  this.draw = function() {
  	world.ctx.beginPath();
    world.ctx.arc(this.location.x,
    							this.location.y,
                  this.r, this.sA, this.eA);
    world.ctx.stroke();
    world.ctx.closePath();
    
    this.location.add(this.speed);
    this.verifyBouncing();
  };
  
  this.update = function() {
  }
  
  this.verifyBouncing = function() {
    if ((this.location.x > world.canvas.width -(this.r)) || 
        (this.location.x < 0+(this.r))) {

      this.speed.x = this.speed.x * -1;

    } else if (this.location.y > world.canvas.height-(this.r) || 
               this.location.y < 0+(this.r)) {
      this.speed.y = this.speed.y * -1;
    }
  };
  
};

World.prototype.setup = function(w,h) {
	this.w = w;
  this.h = h;
  this.canvas.width = this.w;
  this.canvas.height = this.h;
  this.canvas.setAttribute("style", "border: 1px solid black");
  
};

World.prototype.run = function(fps,cb) {
	var self = this;
	cb();
	setTimeout(function() {
    self.run(fps, cb)
  }, fps);
};

// IMPLEMENTATION DECLARATION
var world = new World();
var circle1 = new Circle(100,75,25,0,2*Math.PI);
circle1.speed.x = 4;
circle1.speed.y = 4;
var circle2 = new Circle(210,75,25,0,2*Math.PI);

world.setup(400,300);
//Draw every object in the canvas
world.draw = function() {
	this.ctx.clearRect(0,0, this.w, this.h);
  circle1.draw();
  circle2.draw();
  console.log('run')
};

world.run(1000/60, function(){
	world.draw();
});

document.body.appendChild(world.canvas); // paint the world