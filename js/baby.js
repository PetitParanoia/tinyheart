var babyObj=function()
{
	this.x;
	this.y;
	this.angle;
	this.babyBody=new Image();
	
	this.babyTailTimer=0;
	this.babyTailCounter=0;

	this.babyEyeTimer=0;
	this.babyEyeCounter=0;
	this.babyEyeInterval=1000;

	this.babyBodyTimer=0;
	this.babyBodyCounter=0;
}
babyObj.prototype.init=function()
{
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
	this.angle=0;
	this.babyBody.src="src/babyFade0.png";

}
babyObj.prototype.draw=function()
{
   this.x=lerpDistance(mom.x,this.x,0.98);
   this.y=lerpDistance(mom.y,this.y,0.98);


   var deltaY=mom.y-this.y;
   var deltaX=mom.x-this.x;
   var beta=Math.atan2(deltaY,deltaX)+Math.PI;
   this.angle=lerpAngle(beta,this.angle,0.6);
   //尾巴
   this.babyTailTimer+=deltaTime;
   if(this.babyTailTimer>50)
   {
   	this.babyTailCounter=(this.babyTailCounter+1)%1;
   	this.babyTailTimer%=50;
   }
   var babyTailCounter=this.babyTailCounter;
  //眼睛
   this.babyEyeTimer+=deltaTime;
    if(this.babyEyeTimer>this.babyEyeInterval)
   {
   	this.babyEyeCounter=(this.babyEyeCounter+1)%2;
   	this.babyEyeTimer%=this.babyEyeInterval;
   	if(this.babyEyeCounter==0)
   	{
   		this.babyEyeInterval=Math.random()*1500+2000;
   	}
   else
   	{
   		this.babyEyeInterval=200;
   	}
   }
   var babyEyeCounter=this.babyEyeCounter;

   //身体
   this.babyBodyTimer+=deltaTime;
   if(this.babyBodyTimer>300)
   {
   	this.babyBodyCounter=this.babyBodyCounter+1;
   	if(this.babyBodyCounter>19)
   	{
   		this.babyBodyCounter=19;
   		//game over
       data.gameover=true;
   	}
   	this.babyBodyTimer%=300;
   }
   var babyBodyCounter=this.babyBodyCounter;


   ctx1.save();
    
   ctx1.translate(this.x,this.y);
   ctx1.rotate(this.angle);
   ctx1.drawImage(babyTail[babyTailCounter],-babyTail[babyTailCounter].width*0.5+23,-babyTail[babyTailCounter].height*0.5);
   ctx1.drawImage(babyBody[babyBodyCounter],-babyBody[babyBodyCounter].width*0.5,-babyBody[babyBodyCounter].height*0.5);
   ctx1.drawImage(babyEye[babyEyeCounter],-babyEye[babyEyeCounter].width*0.5,-babyEye[babyEyeCounter].height*0.5);
   
   ctx1.restore();

}