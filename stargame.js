function setup()
{
	createCanvas(1000,1000);
	
	 
	
}

let degrees = 9; 
let rate = 0.2; 
let elements = []; 

for(i=1;i<=40;i++)
{
	
	
	let obj = new Celestial(degrees,rate);
	elements.push( obj ); 
	
	if(i % 5 == 0)
		rate = 0;
	else
		rate += 0.2;
	
	 degrees += 9; 
	
}

console.log(elements); 


function draw()
{
	
	background(0,0,0);
/*	line(500,0,500,1000);
	line(0,500,1000,500);
	line(0,1000,500,500);
	line(0,0,500,500);
	
	//second half
	line(500,500,1000,0);
	line(500,500,1000,1000);	*/
	
	for(let star of elements)
	star.move();
	
	
}