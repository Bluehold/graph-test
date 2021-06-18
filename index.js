var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');

var obj = {};
class object {
  constructor (data={}) {
    this.x = data.x || 0;
    this.y = data.y || 0;
  }
}

for (var i = 1; i < 17; i++) {
  obj['a' + i] = new object({'x': 0, 'y': 0});
}

for (var drx = -990; drx < 2000; drx += 10) {
  c.lineWidth = 1;
  c.strokeStyle = '#bbb';
  c.beginPath();
  c.moveTo(drx,0);
  c.lineTo(drx,1000);
  c.closePath();
  c.stroke();
}
for (var dry = -990; dry < 2000; dry += 10) {
  c.beginPath();
  c.moveTo(0,dry);
  c.lineTo(2000,dry);
  c.closePath();
  c.stroke();
}
for (var drx2 = -950; drx2 < 2000; drx2 += 50) {
  c.lineWidth = 2;
  c.strokeStyle = '#888';
  c.beginPath();
  c.moveTo(drx2,0);
  c.lineTo(drx2,1000);
  c.closePath();
  c.stroke();
}
for (var dry2 = -950; dry2 < 2000; dry2 += 50) {
  c.beginPath();
  c.moveTo(0,dry2);
  c.lineTo(2000,dry2);
  c.closePath();
  c.stroke();
}
c.lineWidth = 2;
  c.strokeStyle = '#000';
  c.beginPath();
  c.moveTo(0,500);
  c.lineTo(2000,500);
  c.moveTo(1000,0);
  c.lineTo(1000,1000);
  c.closePath();
  c.stroke();

var a = 1;
var x1 = -1000;
var y1 = 0;
var x2 = -750;
var y2 = 0;
var x3 = -500;
var y3 = 0;
var x4 = -250;
var y4 = 0;
var x5 = 0;
var y5 = 0;
var x6 = 250;
var y6 = 0;
var x7 = 500;
var y7 = 0;
var x8 = 750;
var y8 = 0;
var t1 = 0;
var t2 = 0;

setInterval( function () {
  if (!(t2 < 1)) {
  if (x1 <= -750) x1+= 2;
  if (x2 <= -500) x2+= 2;
  if (x3 <= -250) x3+= 2;
  if (x4 <= 0) x4+= 2;
  if (x5 <= 250) x5+= 2;
  if (x6 <= 500) x6+= 2;
  if (x7 <= 750) x7+= 2;
  if (x8 <= 1000) x8+= 2
  }
  else {
    t2++;
  }
  y1 = (x1 ** 2 ) * a * 0.1;
  y2 = (x2 ** 2 ) * a * 0.1;
  y3 = (x3 ** 2 ) * a * 0.1;
  y4 = (x4 ** 2 ) * a * 0.1;
  y5 = (x5 ** 2 ) * a * 0.1;
  y6 = (x6 ** 2 ) * a * 0.1;
  y7 = (x7 ** 2 ) * a * 0.1;
  y8 = (x8 ** 2 ) * a * 0.1;

  obj.a2.x = obj.a1.x;
  obj.a2.y = obj.a1.y;
  obj.a1.x = x1;
  obj.a1.y = y1;

  obj.a4.x = obj.a3.x;
  obj.a4.y = obj.a3.y;
  obj.a3.x = x2;
  obj.a3.y = y2;

  obj.a6.x = obj.a5.x;
  obj.a6.y = obj.a5.y;
  obj.a5.x = x3;
  obj.a5.y = y3;

  obj.a8.x = obj.a7.x;
  obj.a8.y = obj.a7.y;
  obj.a7.x = x4;
  obj.a7.y = y4;

  obj.a10.x = obj.a9.x;
  obj.a10.y = obj.a9.y;
  obj.a9.x = x5;
  obj.a9.y = y5;

  obj.a12.x = obj.a11.x;
  obj.a12.y = obj.a11.y;
  obj.a11.x = x6;
  obj.a11.y = y6;

  obj.a14.x = obj.a13.x;
  obj.a14.y = obj.a13.y;
  obj.a13.x = x7;
  obj.a13.y = y7;

  obj.a16.x = obj.a15.x;
  obj.a16.y = obj.a15.y;
  obj.a15.x = x8;
  obj.a15.y = y8;

  if (t1 < 1) {
    t1++;
    obj.a2.x = obj.a1.x;
    obj.a2.y = obj.a1.y;
    obj.a1.x = x1;
    obj.a1.y = y1;

    obj.a4.x = obj.a3.x;
    obj.a4.y = obj.a3.y;
    obj.a3.x = x2;
    obj.a3.y = y2;

    obj.a6.x = obj.a5.x;
    obj.a6.y = obj.a5.y;
    obj.a5.x = x3;
    obj.a5.y = y3;

    obj.a8.x = obj.a7.x;
    obj.a8.y = obj.a7.y;
    obj.a7.x = x4;
    obj.a7.y = y4;

    obj.a10.x = obj.a9.x;
    obj.a10.y = obj.a9.y;
    obj.a9.x = x5;
    obj.a9.y = y5;

    obj.a12.x = obj.a11.x;
    obj.a12.y = obj.a11.y;
    obj.a11.x = x6;
    obj.a11.y = y6;

    obj.a14.x = obj.a13.x;
    obj.a14.y = obj.a13.y;
    obj.a13.x = x7;
    obj.a13.y = y7;

    obj.a16.x = obj.a15.x;
    obj.a16.y = obj.a15.y;
    obj.a15.x = x8;
    obj.a15.y = y8;
  }

  {
    c.lineWidth = 3;
    c.strokeStyle = '#f00'
    c.beginPath();
    c.moveTo((obj.a1.x + 1000), (obj.a1.y * (-1) + 500))
    c.lineTo((obj.a2.x + 1000), (obj.a2.y * (-1) + 500))
    c.stroke();
    c.closePath();
    c.beginPath();
    c.moveTo((obj.a3.x + 1000), (obj.a3.y * (-1) + 500))
    c.lineTo((obj.a4.x + 1000), (obj.a4.y * (-1) + 500))
    c.stroke();
    c.closePath();
    c.beginPath();
    c.moveTo((obj.a5.x + 1000), (obj.a5.y * (-1) + 500))
    c.lineTo((obj.a6.x + 1000), (obj.a6.y * (-1) + 500))
    c.stroke();
    c.closePath();
    c.beginPath();
    c.moveTo((obj.a7.x + 1000), (obj.a7.y * (-1) + 500))
    c.lineTo((obj.a8.x + 1000), (obj.a8.y * (-1) + 500))
    c.stroke();
    c.closePath();
    c.beginPath();
    c.moveTo((obj.a9.x + 1000), (obj.a9.y * (-1) + 500))
    c.lineTo((obj.a10.x + 1000), (obj.a10.y * (-1) + 500))
    c.stroke();
    c.closePath();
    c.beginPath();
    c.moveTo((obj.a11.x + 1000), (obj.a11.y * (-1) + 500))
    c.lineTo((obj.a12.x + 1000), (obj.a12.y * (-1) + 500))
    c.stroke();
    c.closePath();
    c.beginPath();
    c.moveTo((obj.a13.x + 1000), (obj.a13.y * (-1) + 500))
    c.lineTo((obj.a14.x + 1000), (obj.a14.y * (-1) + 500))
    c.stroke();
    c.closePath();
    c.beginPath();
    c.moveTo((obj.a15.x + 1000), (obj.a15.y * (-1) + 500))
    c.lineTo((obj.a16.x + 1000), (obj.a16.y * (-1) + 500))
    c.stroke();
    c.closePath();
  }
}, 1);

keypress = {};
document.addEventListener('keydown', keyUp);
document.addEventListener('keyup', keyDown);
function keyUp(e) {
  keypress[e.keyCode] = true;
}
function keyDown(e) {
  keypress[e.keyCode] = false;
}