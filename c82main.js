canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");


color = "darkgrey"
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.rect(100,100,600,400);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.arc(300,275,40,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 3;
ctx.arc(400,275,40,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#DF0024";
ctx.lineWidth = 3;
ctx.arc(500,275,40,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = 3;
ctx.arc(350,315,40,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#009F3D";
ctx.lineWidth = 3;
ctx.arc(450,315,40,0,Math.PI*2);
ctx.stroke();






