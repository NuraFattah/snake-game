


document.body.addEventListener("keydown", keyDown);

function keyDown(event){
    //up
    if (event.keyCode == 38){
        if(yVelocity ==1)
        return;
         yVelocity= -1;
         xVelocity= 0;
       }

    //down 
    if (event.keyCode == 40){
            if(yVelocity ==-1)
            return;
        yVelocity= 1;
        xVelocity= 0;
       }

     //left 
     if (event.keyCode == 37){
        if(xVelocity ==1)
        return;
      yVelocity= 0;
      xVelocity= -1;
      }

     //right 
      if (event.keyCode == 39){
        if(xVelocity ==-1)
        return;
         yVelocity= 0;
         xVelocity= 1;
        }
}