class Bash
{
	 constructor(bulletPositonX)
	 {
		  
        //enemy
        this.enemyPositionX = Math.floor(Math.random(0)*700); 	
		this.enemyPositionY = -22; 
		this.count = 0; 
		this.paceMaker = 0; 
		this.seconds = []; 		
		this.incrementRange = false;
		this.range = 0; 
		this.enemySize = 20;
		 
		 for(let number=1;number<=10;number++)
			  this.seconds.push(number * 50); 
		  
		 this.clock = this.seconds[Math.floor(Math.random(0)*9)];
		
		 //GUN
		  this.gunPositionX = 0;
		  this.gunPositionY = 420; 
		  
		  //bullets
		  this.bulletPositonY = 420;		  
		  this.bulletPositonX = bulletPositonX + 13; 

		  
		  //colors
		  this.red = Math.floor(Math.random(0)*255);
		  this.green = Math.floor(Math.random(0)*255);
		  this.blue = Math.floor(Math.random(0)*255);
		  
	 }
	 
	 gun()
	 {
		 fill(255,200,200);
		this.gunPositionX = mouseX;
		 rect(this.gunPositionX,this.gunPositionY,25,500);
	 }	 
	 
	 enemy()
	 {
		   
		   fill(this.red,this.green,this.blue); 
		   /*==============this.enemyPositionY += 1;
           ========================rect(this.enemyPositionX,this.enemyPositionY,20,20)============*/
		 
		 this.count += 1; 
		 this.count += 1; 
			
		 
        if(this.incrementRange == true)                   
			this.range+=1;                              
    
        if(this.range == 100)
        {
			 this.paceMaker = 0; 
			 this.range = 0;
		}		
			
		
		
		if(this.count < this.clock)
		    rect(this.enemyPositionX,this.enemyPositionY,20,20);
   else
	   if(this.count == this.clock)
	   {
		    this.incrementRange = true; 
		    rect(this.enemyPositionX,this.enemyPositionY,20,20);   
	   }
   else
       {
			 
			         this.paceMaker += 1; 		
			 
			 
	                   if(this.paceMaker <= 25)	
		                {
			                   this.enemyPositionY += 1;
		                       rect(this.enemyPositionX,this.enemyPositionY,20,20);
		                }
	               else
	                   if(this.paceMaker > 25 && this.paceMaker <= 50)	
	                   	{
		                  	this.enemyPositionX -= 1;
		                   rect(this.enemyPositionX,this.enemyPositionY,20,20);
		                }
	               else
	                    if(this.paceMaker > 50  && this.paceMaker <= 75)	
		                {
		                       	this.enemyPositionY += 1;
		                        rect(this.enemyPositionX,this.enemyPositionY,20,20);
		                }
                   else
	                    if(this.paceMaker > 75  && this.paceMaker <= 100)	
		                {
		                     	this.enemyPositionX += 1;
		                        rect(this.enemyPositionX,this.enemyPositionY,20,20);
		                }
	    }
	   
		    if(this.enemyPositionY > 530)
			       this.enemyPositionY = -30;	   
    
	 }
	 
	 bullets()
	 {
		fill(255,0,0); 
		 
		this.bulletPositonY -= 1;	
		rect(this.bulletPositonX,this.bulletPositonY,8,8); 
		
		
		
	 }
	 
	 gamePoints()
	 {
		 
	 }
	 
	 //test 

} 

//================= TEST CODE ================


/*class Manuver
{    
    constructor()
	{
		this.pX = Math.floor(Math.random(0)*500); 
		this.pY = Math.floor(Math.random(0)*700);
		this.size = 20; 
	}
	
	
	show()
	{
		 fill(43,12,233);
		 rect(this.pX,this.pY,this.size,this.size);
	}
	
		
} */