const canvas =document.querySelector("canvas")
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
constletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
constlettersArray=letters.split("");
constfontSize=20;
constcolumns=Math.floor(canvas,width/fontsize);
constdrops=Array(columns).fill(0);
function draw(){
    ctx.fillStyle="rgba(0,0,0,0,0.5)"
    
}