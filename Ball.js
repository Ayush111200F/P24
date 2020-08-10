class Ball {
    var options ={
        'isStatic':false,
       'resistution':0.3,
       'friction':0.5,
       'density':0.2
       
    }
    

ellipseMode(RADIUS);
fill(255);
ellipse(50, 50, 30, 30); // Outer white ellipse
ellipseMode(CENTER);
fill(100);
ellipse(50, 50, 30, 30);



function keyPressed(){
    if(keyCode === UP_Arrow){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    }
}
