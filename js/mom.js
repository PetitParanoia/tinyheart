var momObj=function()
{
	this.x;
	this.y;
	this.angle;
	this.momEyeTimer=0;
	this.momEyeCounter=0;
	this.momEyeInterval=1000;

	this.momTailTimer=0;
	this.momTailCounter=0;

  this.momBodyCounter=0;
}
momObj.prototype.init=function()
{
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
}
momObj.prototype.draw=function()
{
	this.x=lerpDistance(mx,this.x,0.98);
	this.y=lerpDistance(my,this.y,0.99);

	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;

	this.angle=lerpAngle(beta,this.angle,0.6);

	//尾巴
   this.momTailTimer+=deltaTime;
   if(this.momTailTimer>50)
   {
   	this.momTailCounter=(this.momTailCounter+1)%8;
   	this.momTailTimer%=50;
   }
   var momTailCounter=this.momTailCounter;

   //眼睛
   this.momEyeTimer+=deltaTime;
    if(this.momEyeTimer>this.momEyeInterval)
   {
   	this.momEyeCounter=(this.momEyeCounter+1)%2;
   	this.momEyeTimer%=this.momEyeInterval;
   	if(this.momEyeCounter==0)
   	{
   		this.momEyeInterval=Math.random()*1500+2500;
   	}
   else
   	{
   		this.momEyeInterval=200;
   	}
   }
   var momEyeCounter=this.momEyeCounter;

	ctx1.save();
 
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(momTail[momTailCounter],-momTail[momTailCounter].width*0.5+30,-momTail[momTailCounter].height*0.5);
    var momBodyCounter=this.momBodyCounter;

   if(data.double==1)
   {
     ctx1.drawImage(momBodyOrange[momBodyCounter],-momBodyOrange[momBodyCounter].width*0.5,-momBodyOrange[momBodyCounter].height*0.5);
   }else{
    ctx1.drawImage(momBodyBlue[momBodyCounter],-momBodyBlue[momBodyCounter].width*0.5,-momBodyBlue[momBodyCounter].height*0.5);
   }
    ctx1.drawImage(momEye[momEyeCounter],-momEye[momEyeCounter].width*0.5,-momEye[momEyeCounter].height*0.5);
    
    ctx1.restore();
}