function setup()
{
	createCanvas(1000,1000); 
}

let a = 2545.0; 
let r = 200; 


function draw()
{
	background(244,54,4);
	

	translate(height/2,width/2); 
	
	y = sin(a) * r;
	x = cos(a) * r; 
	
	fill(0,230,0);
    ellipse(x,y,20); 
	line(0,0,x,y);

	
	console.log("Y = "+y);
	console.log("X = "+x);	
	
	console.log("acceleration  = "+a+"\n\n");		
	
	line(105,170,105,170-105);
	
	a += 0.001;
}