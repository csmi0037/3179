const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'black';
function draw(startX, startY, len, angle) {
  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = len/7.5;
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();
  
  if(len < 10) {
	ctx.beginPath();
	ctx.strokeStyle = 'green';
    	ctx.arc(0, -len, 3, 0, 2*Math.PI);
    	ctx.stroke();
	ctx.strokeStyle = 'black';
  }
	if(len < 4) {
    	ctx.restore();
    	return;
  }
  
  draw(0, -len, (len*10)/(Math.floor(Math.random() * 4) + 12), -1*(Math.floor(Math.random() * 16) + 20));
  draw(0, -len, (len*10)/(Math.floor(Math.random() * 4) + 12), Math.floor(Math.random() * 16) + 20);
  
  ctx.restore();
}
draw(500,1000,150,0);