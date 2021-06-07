var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies
var e 
var w
var b1



function setup() {
  createCanvas(800,400);

  e = Engine.create()
  w = e.world

  b1 = new Box(250,250)



}

function draw() {
  background(255,255,255);  
Engine.update(e)
console.log(w)
b1.display()



}