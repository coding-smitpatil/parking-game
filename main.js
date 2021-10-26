//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;
greenx=5;
greeny=5;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	backgroundmars=new Image();
    backgroundmars.onload=uploadbackground;
    backgroundmars.src=background_image;
    rover=new Image();
    rover.onload=uploadrover;
    rover.src=greencar_image; 
}
function uploadbackground(){
    ctx.drawImage(backgroundmars,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover,greenx,greeny,greencar_width,greencar_height);
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
function up()
{
    if(greeny>=0)
    {
        greeny=greeny-10;
        
        uploadbackground();
        uploadrover();
        
    }
}

function down()
{
    if(greeny<=600)
    {
        greeny=greeny+10;
        
        uploadbackground();
        uploadrover();
        
    }
}
function left()
{
    if(greenx>=0)
    {
        greenx=greenx-10;
        
        uploadbackground();
        uploadrover();
        
    }
}
function right()
{
    if(greenx<=700)
    {
        greenx=greenx+10;
        
        uploadbackground();
        uploadrover();
        
    }
}
