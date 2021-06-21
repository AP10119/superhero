var canvas10=new fabric.Canvas("canvas1");
var playerx_axis=300;
var playery_axis=250;
var widthblock=30;
var heightblock=30;
var playerimage="";
var blockimage="";
function updatep(){
    fabric.Image.fromURL("player.png",function(img){
        playerimage=img;
        playerimage.scaleToWidth(40);
        playerimage.scaleToHeight(75);
        playerimage.set({top:playery_axis,left:playerx_axis});
        canvas10.add(playerimage)
    })
}
function updateb(blocks){
    fabric.Image.fromURL(blocks,function(blockimg){
        blockimage=blockimg;
        blockimage.scaleToWidth(widthblock);
        blockimage.scaleToHeight(heightblock);
        blockimage.set({top:playery_axis,left:playerx_axis});
        canvas10.add(blockimage);
    })
}
window.addEventListener("keydown",movedown);
function movedown(e){
    var kcode=e.keyCode
    if(kcode=="70"){
        updatep();
        updateb("thor_face.png");
    }
    if(kcode=="66"){
        updatep();
        updateb("spiderman_body.png");
    }
    if(kcode=="76"){
        updateb("hulk_legs.png");
        updatep();
    }
    if(kcode=="82"){
        updateb("ironman_right_hand.png");
        updatep();
    }
    if(kcode=="65"){
        updateb("captain_america_left_hand.jpg");
        updatep();
    }
    if(kcode=="77"&e.shiftKey){
        widthblock=widthblock-5;
        heightblock=heightblock-5;
        document.getElementById("blockwidth").innerHTML=widthblock;
        document.getElementById("blockheight").innerHTML=heightblock;
    }
    if(kcode=="80"&e.shiftKey){
        widthblock=widthblock+5;
        heightblock=heightblock+5;
        document.getElementById("blockwidth").innerHTML=widthblock;
        document.getElementById("blockheight").innerHTML=heightblock;
    }

}