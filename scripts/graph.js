 var canvas = document.getElementById('myCanvas');
 var ctx = canvas.getContext('2d');


 var data = [370, 172, 225, 320, 92, 40];
 var width = 50;
 var currX = 50;
 var base = 200;
 canvas.style.backgroundColor = "#3F5765";
 ctx.fillStyle = "#FF8C1D";
 for (var i = 0; i < data.length; i++) {
     var h = data[i];
     ctx.fillRect(currX, canvas.height - h, width, h);
     currX += width + 20;
 }