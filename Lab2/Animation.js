var spritesheet = {
	"frames": [
		 {
			"frame": {
				"x": 1,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		},
		 {
			"frame": {
				"x": 113,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		},
		 {
			"frame": {
				"x": 225,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		},
		 {
			"frame": {
				"x": 337,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		},
		 {
			"frame": {
				"x": 449,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		},
		 {
			"frame": {
				"x": 561,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		},
		 {
			"frame": {
				"x": 673,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		},
		 {
			"frame": {
				"x": 785,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		},
		 {
			"frame": {
				"x": 897,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		},
		 {
			"frame": {
				"x": 1009,
				"y": 1,
				"w": 110,
				"h": 165
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 110,
				"h": 165
			},
			"sourceSize": {
				"w": 110,
				"h": 165
			}
		}
		]
	}



var myNum = new Image();
myNum.src = './spritesheet.png';


const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');


let button = document.querySelector("button");
var flag =0;
button.onclick = function(){
	 draw();
	 flag=0;
	 
 }


function drawNum(i){
	ctx.drawImage(myNum, spritesheet.frames[i].frame.x,spritesheet.frames[i].frame.y, spritesheet.frames[i].frame.w, spritesheet.frames[i].frame.h, 200, 200, spritesheet.frames[i].sourceSize.w, spritesheet.frames[i].sourceSize.h);
}


function drawNum2(x,y){
	ctx.drawImage(myNum,spritesheet.frames[x].frame.x,spritesheet.frames[x].frame.y, spritesheet.frames[x].frame.w, spritesheet.frames[x].frame.h, 150, 190, spritesheet.frames[x].sourceSize.w, spritesheet.frames[x].sourceSize.h);
	ctx.drawImage(myNum,spritesheet.frames[y].frame.x,spritesheet.frames[y].frame.y, spritesheet.frames[y].frame.w, spritesheet.frames[y].frame.h, 250, 200, spritesheet.frames[y].sourceSize.w, spritesheet.frames[y].sourceSize.h);
}
function draw(){
   if (flag < 9){
     ctx.clearRect(0,0, myCanvas.width, myCanvas.height);
     drawNum(flag);
     setTimeout(draw, 500);
   } else if (flag = 9){
		 ctx.clearRect(0,0, myCanvas.width, myCanvas.height);
		 drawNum2(0,9);
     setTimeout(draw, 500);
	 }
  
  flag++
}