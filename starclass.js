class Celestial
{
	 
	constructor(angle,rate)
	{
		this.angle = angle; 
		this.rate = rate; 
		this.start = 500;
		this.remain = 0; 
		this.speed = 1; 
		this.count = 0;
		
		
		this.reset = 500 + Math.floor(Math.random(0) * 50);	

		
		if(this.angle <= 45)
		{
			  this.y = 500 + Math.floor(Math.random(0) * 500);
			 
			  this.remain  = this.y - this.start; 
			  this.ans = this.remain * this.rate; 
			  this.x = this.start - this.ans;
			  
		}
	else 
	   if(this.angle > 45 && this.angle <= 90)
	   {
		   
		   this.x = Math.floor(Math.random(0) * 500); 
		   this.remain = this.start - this.x; 
		   this.ans = this.remain * this.rate; 
		   this.y = this.start + this.ans; 
	   }
	else
	   if(this.angle > 90 && this.angle <= 135)
	   {
		   this.x = Math.floor(Math.random(0) * 500); 
		   this.remain = this.start - this.x; 
		   this.ans = this.remain * this.rate; 
		   this.y = this.start - this.ans; 
		   
	   }
   else
	   if(this.angle > 135 && this.angle <= 180)
	   {
			  this.y = Math.floor(Math.random(0) * 500); 
			 
			  this.remain  = this.start - this.y; 
			  this.ans = this.remain * this.rate; 
			  this.x = this.start - this.ans;
			  
		   
	   }     	   
   else
	   if(this.angle > 180 && this.angle <= 225)
	   {
			  this.y = Math.floor(Math.random(0) * 500); 
			 
			  this.remain  = this.start - this.y; 
			  this.ans = this.remain * this.rate; 
			  this.x = this.start + this.ans;
			  
	   }     	   		   
else
	   if(this.angle > 225 && this.angle <= 270)
	   {
			  this.x = 500 + Math.floor(Math.random(0) * 500); 

			  this.remain  = this.x  -  this.start; 
			  this.ans = this.remain * this.rate; 
			  this.y = this.start - this.ans;
		   
	   }     		
else
	   if(this.angle > 270 && this.angle <= 315)
	   {
			  this.x = 500 + Math.floor(Math.random(0) * 500); 

			  this.remain  = this.x  -  this.start; 
			  this.ans = this.remain * this.rate; 
			  this.y = this.start + this.ans;
		   
	   }     	
else
	   if(this.angle > 315 && this.angle <= 360)
	   {
			  this.y = 500 + Math.floor(Math.random(0) * 500); 

			  this.remain  = this.y  -  this.start; 
			  this.ans = this.remain * this.rate; 
			  this.x = this.start + this.ans;
		   
	   }    	   
	   console.log("angle = "+this.angle);
	   console.log("rate = "+this.rate);
	   console.log("x ="+this.x);
	   
	   console.log("remain = "+this.remain);      
	   console.log("answear ="+this.ans);
	   console.log("y = "+this.y);
	  
	}
	  
	  //constuctor ends 
	  
	  move()
	  {
		    /* */	 if(this.angle <= 45)
			{
				  this.y += this.speed; 
				  this.x -= this.rate; 
				  
			}
	    else
			if(this.angle > 45 && this.angle <=90)
		   {
		     	
				this.y += this.rate;
				this.x -= this.speed;
	     	}
	   else
			if(this.angle > 90 && this.angle <=135)
		   {
		     	
				this.y -= this.rate;
				this.x -= this.speed;
	     	}			
	  else
	     if(this.angle > 135 && this.angle <= 180)		   
		   {
		     	
				this.y -= this.speed;
				this.x -= this.rate;
	     	}					 
      else
	          if(this.angle > 180 && this.angle <= 225)
	         {			
				this.y -= this.speed;
				this.x += this.rate;		          
		     }  
	  else
	         if(this.angle > 225 && this.angle <= 270)
			 {
				this.y -= this.rate;
				this.x += this.speed;						 
			 }				 
	  else
	         if(this.angle > 270 && this.angle <= 315)		  
			 {
				this.y += this.rate;
				this.x += this.speed;				 
			 }
	  else
	         if(this.angle > 315 && this.angle <= 360)		  
			 {
				this.y += this.speed;
				this.x += this.rate;				 
			 }			 
			
		   
			fill(255,255,255);
			ellipse(this.x,this.y,5);	  
		
			
			
			if(this.count == this.reset)
			{
				this.y = 500; 
				this.x = 500; 
				this.count = 0;
				this.speed = 1; 
			}
		else
			this.count ++; 
		
		//console.log(this.count); */
	  
} 

}