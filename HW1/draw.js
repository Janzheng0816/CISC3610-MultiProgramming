    function draw () {
		// Locate the element "mycanvas" in the document.
        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#87cefa";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        //Ground
        ctx.fillStyle = "#b0c4de";
        ctx.fillRect(0, 360, canvas.width, canvas.height-360);
        
		
		//Moon
		ctx.beginPath();
		ctx.arc(600, 100, 50, Math.PI * 0.2, Math.PI * 1.36, false);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.beginPath();
		ctx.arc(620, 83, 50, Math.PI * 0.36, Math.PI * 1.2, false);
		ctx.fillStyle = "#87cefa";
		ctx.fill();
		
		//Roof
		ctx.beginPath();
		ctx.moveTo(100, 250);
		ctx.lineTo(200, 150);
		ctx.lineTo(300, 250);
		ctx.lineTo(100, 250);
		ctx.fillStyle = "#ffa07a";
		ctx.fill();
		
		//House Body
		ctx.fillStyle = "#4169e1";
		ctx.fillRect(100, 250, 200, 200);
		
		//Windows
		ctx.strokeRect(130, 300, 50,50);
		ctx.clearRect(130, 300, 50,50);
		ctx.beginPath();
		ctx.moveTo(130, 325);
		ctx.lineTo(180, 325);
		ctx.moveTo(155, 300);
		ctx.lineTo(155, 350);
		ctx.stroke();
		
		//Door
		ctx.strokeRect(220, 370, 55,80);
		ctx.clearRect(220, 370, 55,80);
		ctx.beginPath();
		ctx.arc(230, 410, 2, 0, Math.PI * 2, true);
		ctx.fillStyle = "black";
		ctx.fill();

		//Fence
		ctx.fillStyle = "#cd853f";
		for(let i = 0; i<80; i++)
		{
		ctx.strokeRect(5*2*i, 430, 5, 70);
		ctx.fillRect(5*2*i, 430, 5, 70);
		
		}	
		
		
		
		
		ctx.font="20px Arial";
        ctx.fillStyle = "black";
		ctx.fillText("Mid-Night",10,canvas.height-10);
	
   
    }

	// Once the HTML document has finished loading and has been parsed, call the changeCanvasColor function.
    document.addEventListener('DOMContentLoaded', draw);