
let fire;
 let Ammo = [];
 let taliban;
 
  
 let inserguarants = [];

function setup()
{
	createCanvas(700,500); 
	
}


for(let k=0;k<22;k++)
{
	 taliban = new Bash();
	 inserguarants.push(taliban);
	 
	// console.log(inserguarants);
}
// console.log(inserguarants);
	
	 
 /*sss=================== WE WERE HERE =========================== */
 
 let isFired = false; 

function mousePressed()
{
	 isFired = true;
    fire = new Bash(mouseX); 
	Ammo.push(fire);
	//console.log(Ammo);
} 


 let pistol = new Bash();


let caliber = 0;
let kill = [];


function draw()
{
	background(233,244,255);

    for(let item=0; item < inserguarants.length; item++)
		 inserguarants[item].enemy(); 
		 
     
	 // console.log(inserguarants);
	
 
     for(caliber of Ammo)
		  caliber.bullets();
	  
	 pistol.gun();   
   
     for(let x=0; x< inserguarants.length; x++)
	 {
		     for(let y=0; y < Ammo.length; y++)
			 {
				  
			    if(caliber.bulletPositonY >=(inserguarants[x].enemyPositionY + inserguarants[x].enemySize) - 8 && caliber.bulletPositonY <=(inserguarants[x].enemyPositionY + inserguarants[x].enemySize)  && caliber.bulletPositonX >= inserguarants[x].enemyPositionX && caliber.bulletPositonX <= (inserguarants[x].enemyPositionX + inserguarants[x].enemySize)
					)
					{
	                   console.log("Confirmed Hit at "+x+"\n"); 
					   
					   
					   if(!kill.includes(x))
					   {
						    let header = document.querySelector("#points");
						   header.textContent = parseInt(header.textContent) + 200;
					        kill.push(x);
					   }

							
					   console.log("\nArray = "+kill+"\n\n");
					   
					  
					   
					   
					}

				   
			 }
	 } 
	 
	 
	 
for(let index=0; index < kill.length; index++)
{
	 if(kill[index] == 0)
		 inserguarants = inserguarants.slice(1); 
	else
		 inserguarants = inserguarants.slice(0,kill[index]).concat(inserguarants.slice(kill[index]+1));
		 
	 
	 for(let num=0; num < kill.length; num++)
	 {
		     
		   if(kill[num] > kill[index])
		
			   kill[num]-=1; 
		   
	 }
}


		kill = [];
	 
}

     
	
/*
	  
 
 for(let obj of Ammo)
		  obj.bullets(); 
 pistol.gun();

if(mouseX >= Circle.positonX && mouseX <= (Circle.positonX + Circle.width) && mouseY >= Circle.positonY && mouseY <= (Circle.positonY + Circle.length))
	



arr.slice(0,x).concat(arr.slice(x+1))


arr = [77,29,48,16,203,555,13,25,9,1];
kill = [5,7,0,1,3];

//=============New==========

arr = [28,72,19,20,43,1000,611,59,360,2253]
kill = [3,9,1,6,0]

for(let index=0; index < kill.length; index++)
{
	 if(kill[index] == 0)
		 arr = arr.slice(1); 
	else
		 arr = arr.slice(0,kill[index]).concat(arr.slice(kill[index]+1));
		 
	 
	 for(let num=0; num < kill.length; num++)
	 {
		   //kill[num] > kill[index] ? kill[num]-=1 : kill[num] = kill[num]; 
		   
		   if(kill[num] > kill[index])
		
			   kill[num]-=1; 
		   
	 }
}

*/


