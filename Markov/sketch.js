"use strict"
var images=[];
var MarkovImage;//ArrayOfPixels
var MarImage;
var PixelNeighbors;//object with pixel as key and array of neighbors in value. Neighbors go Left->Up->Right->Down
var myImage=new Image();
var myImage2=new Image();
var MarWidth=800;
var MarHeight=800;

function setup() {


}

function make(){
PixelNeighbors=new NeighborDictionary();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
console.log(document.images.length);
for(var n=0;n<document.images.length;n++){
	var img=document.images[n];
	images.push(img);
	canvas.width=images[n].width;
	canvas.height=images[n].height;
	canvas2.width=images[n].width;
	canvas2.height=images[n].height;
	ctx.drawImage(images[n],0,0);
	//myImage.setAttribute('crossOrigin', '');
	myImage = ctx.getImageData(0,0,canvas.width,canvas.height);	
	myImage2=myImage;
	myImage2.Initialize();
	myImage2.Pixels=ImageData.ToPixels(myImage.data);
	PixelNeighbors.AddPixels(myImage2);
}
ctx.clearRect(0, 0, canvas.width, canvas.height);
canvas2.width=MarWidth;
canvas2.height=MarHeight;
myImage2.Pixels=ApplyMarkov(PixelNeighbors,myImage2);
myImage2.FromPixels(myImage2.Pixels);
ctx2.putImageData(myImage2,0,0);
}

function draw() {
  
}

function PixelToString(Pixel){
	if(Pixel==null){return null;}
	return Pixel[0]+","+Pixel[1]+","+Pixel[2]+",255";
}
function StringToPixel(s){
	var a=[];
	a[0]=int(s.split(',')[0]);
	a[1]=int(s.split(',')[1]);
	a[2]=int(s.split(',')[2]);
	a[3]=255;
	return a;
}

function DataToPixels(Data){
	var Pixels=[];
	for(var i=0;i<Data.length;i+=4){
		Pixels.push([]);
		Pixels[floor(i/4)].push(Data[i]);
		Pixels[floor(i/4)].push(Data[i+1]);
		Pixels[floor(i/4)].push(Data[i+2]);
		Pixels[floor(i/4)].push(255);
		}
	return Pixels;
	
}

function setSize(img){
	img.width=	MarWidth;
	img.height=MarHeight;
}

function PixelsToData(Pixels,data){
	
	
	/*
	for (var i = 0; i < data.length; i += 4) {
      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
	*/
	for(var i=0;i<Pixels.length;i++){
		for(var j=0;j<4;j++){
			data[i*4+j]=Pixels[i][j];
		}	
	}
	
}

function AddNeighbors(){}



function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function AddNeighbors(Dic){
	
	
	
}

function Pixel(Data,index){
	
	
}

function IndexToPos(i,img){
	var y=floor(i/img.width);
	var x= i%img.width
	return[x,y];
}
function PosToIndex(x,y,img){
	return x%img.width+y*width;
}


function Above(i,img){
	if(i<img.width){return null;}
	return PixelData[i-img.width];
}

function Left(i,img){
	if(i%img.width==0){return null;}
	return PixelData[i-1];
}

function Below(i,img){
	//if(i/img.height>=img.){return null;}
	return PixelData[i+img.width];
}

function Right(i,img){
	if(i%img.width==img.width-1){return null;}
	return PixelData[i+1];
}

function Left(x,y,img){
}
