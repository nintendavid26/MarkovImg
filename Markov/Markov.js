"use strict"

function ApplyMarkov(PixelNeighbors,Image){
	
	var NewPixels=[];
	var NewestPixel=Image.Pixels[0];
	var s;
	var l;
	var r;
	var filled;
	//var direction= Math.floor(Math.random()*4);
	
	
	for(var i = 0;i<MarHeight*MarWidth;i++){
		NewPixels[i]=NewestPixel;
	//	console.log(NewestPixel);
		s = NewestPixel.ToString();
		if(PixelNeighbors.Dict[s].Right==null){NewestPixel=null;}
		else{
		l=PixelNeighbors.Dict[s].Right.length;
		r=Math.floor(Math.random()*l);
		NewestPixel=PixelNeighbors.Dict[s].Right[r];
		}
		if(NewestPixel==null&&PixelNeighbors.Dict[s].Below!=null){
			//console.log("none in right");
			l=PixelNeighbors.Dict[s].Below.length;
			r=Math.floor(Math.random()*l);
			NewestPixel=PixelNeighbors.Dict[s].Below[r];
		}
		if(NewestPixel==null){
			//console.log("none in above also");
			l=PixelNeighbors.Dict[s].Left.length;
			r=Math.floor(Math.random()*l);
			NewestPixel=PixelNeighbors.Dict[s].Left[r];
		}
	//	console.log(r);
	}
	return NewPixels;
}