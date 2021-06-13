var canvas10=new fabric.Canvas("canvas1");
var playerx_axis=300;
var playery_axis=250;
var widthblock=30;
var heightblock=30;
var playerimage="";
var blockimage="";
function updatep(){
    fabric.Image.fromURL("https://www.pinclipart.com/picdir/middle/546-5463411_transparent-thor-clipart-avengers-endgame-memes-thor-png.png",function(img){
        playerimage=img;
        playerimage.scaleToWidth(40);
        playerimage.scaleToHeight(75);
        playerimage.set({top:playery_axis,left:playerx_axis});
        canvas10.add(playerimage)
    })
}
