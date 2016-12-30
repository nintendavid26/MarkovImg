"use strict"

var Pixel= function(r,g,b,a){
	
	this.r=r;
	this.g=g;
	this.b=b;
	this.a=a;
	
	this.ToString=function(){
		return this.r+"-"+this.g+"-"+this.b+"-"+this.a;
	}
	
	this.FromString=function(s){
		this.r=int(s.split('-')[0]);
		this.g=int(s.split('-')[1]);
		this.b=int(s.split('-')[2]);
		this.a=int(s.split('-')[3]);
	}
}

/*
var Image=function(){//Array of pixels
	
	this.Pixels=[];
	this.height=400;
	this.width=400;
	
	this.Above=function Above(i){
	if(i<width){return null;}
	return this.Pixels[i-width];
	}

	this.Left=function (i){
	if(i%width==0){return null;}
	return this.Pixels[i-1];
	}

	this.Below=function(i){
	if(i+width>height*width){return null;}
	return this.Pixels[i+width];
	}

	this.Right=function(i){
	if(i%width==width-1){return null;}
	return this.Pixels[i+1];
	}
	
	this.FromData=function(Data){
		for(var i=0;i<Data.length;i+=4){
		this.Pixels.push(new Pixel(Data[i],Data[i+1],Data[i+2],Data[i+3]));
		}
	}
	
}
*/

ImageData.ToPixels = function (Data) {
	var Pixels=[];
	for(var i=0;i<Data.length;i+=4){
		Pixels.push(new Pixel(Data[i],Data[i+1],Data[i+2],Data[i+3]));
	}
	return Pixels;
	
};

ImageData.prototype.Initialize=function(){this.Pixels=ImageData.ToPixels(this.data);}
ImageData.prototype.Set=function(){this.Width=MarWidth;this.Height=MarHeight;}

ImageData.prototype.FromPixels = function (Pixels) {
	for(var i=0;i<Pixels.length;i++){
			this.data[i*4]=Pixels[i].r;
			this.data[i*4+1]=Pixels[i].g;	
			this.data[i*4+2]=Pixels[i].b;
			this.data[i*4+3]=Pixels[i].a;				
	}
	
};

	ImageData.prototype.Above=function Above(i){
		if(i<this.width){return null;}
		return this.Pixels[i-this.width];
	}

	ImageData.prototype.Left=function (i){
		if(i%this.width==0){return null;}
		return this.Pixels[i-1];
	}

	ImageData.prototype.Below=function(i){
		if(i+this.width>this.height*this.width){return null;}
		return this.Pixels[i+this.width];
	}

	ImageData.prototype.Right=function(i){
		if(i%this.width==this.width-1){return null;}
		return this.Pixels[i+1];
	}
	
	ImageData.prototype.FromData=function(Data){
		for(var i=0;i<Data.length;i+=4){
		this.Pixels.push(new Pixel(Data[i],Data[i+1],Data[i+2],Data[i+3]));
		}
	}




	
var NeighborDictionary=function(){
	
	/*
	Something like this:
		{
	  "1,1,1,255": {
		"left": [
		  "2-2-2-255",
		  "3-3-3-255"
		],
		"up": [
		  "2-2-2-255",
		  "3-3-3-255"
		]
	  },
	  "2,1,1,255": {
		"left": [
		  "2-2-2-255",
		  "3-3-3-255"
		],
		"up": [
		  "2-2-2-255",
		  "3-3-3-255"
		]
	  }
	}
	*/
	
	this.Dict={};
	
	this.AddPixels=function(Image){
		for(var i=0;i<Image.Pixels.length;i++){
		var s=Image.Pixels[i].ToString();
		if(this.Dict[s]==null){
			//PixelNeighbors.add(Pixels[i]);
			this.Dict[s]=[];
		}
		//console.log(i);
		if(Image.Left(i)!=null){
			if(this.Dict[s].Left==null){this.Dict[s].Left=[];}
			this.Dict[s].Left.push(Image.Left(i));
		}
		if(Image.Right(i)!=null){
			if(this.Dict[s].Right==null){this.Dict[s].Right=[];}
			this.Dict[s].Right.push(Image.Right(i));
		}
		if(Image.Above(i)!=null){
			if(this.Dict[s].Above==null){this.Dict[s].Above=[];}
			this.Dict[s].Above.push(Image.Above(i));
		}
		if(Image.Below(i)!=null){
			if(this.Dict[s].Below==null){this.Dict[s].Below=[];}
			this.Dict[s].Below.push(Image.Below(i));
		}
	}
	}
	
}
