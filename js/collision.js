function momFruitsCollision()
{
	if(!data.gameover)
	{
		for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i])
		{
			var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if(l<900)
			{
				fruit.dead(i);
				data.fruitNum++;

				mom.momBodyCounter++;
				if(mom.momBodyCounter>7)
				{
					mom.momBodyCounter=7;
				}
				if(fruit.fruitType[i]=="blue")
				{
					data.double=2;
				}
				wave.born(fruit.x[i],fruit.y[i]);
			}
		}
	}
	}
	
}
function momBabyCollision()
{
	if(data.fruitNum>0&&!data.gameover)
	{
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
	if(l<900)
	{
		baby.babyBodyCounter=0;
		mom.momBodyCounter=0;
		data.addScore();
		halo.born(baby.x,baby.y);
	}
	}	
}
