var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+a+".png");
var c="dice"+b+".png";
document.querySelector(".img2").setAttribute("src","images/"+c);

if(a>b){
    document.querySelector("h1").innerHTML=" Player1 Wins";
}
else if(b>a){
    document.querySelector("h1").textContent="Player2 Wins";
}
else{
    document.querySelector("h1").textContent="Draw";
}