    function draw () {
		// Locate the element "mycanvas" in the document.
        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");
        var fruit = '{"name":["Apple", "Orange", "Banana", "Kiwi", "Blueberry", "Grape"],   "count":[20, 10, 15, 3, 5, 8],	"color":["red", "orange", "yellow", "green", "blue", "purple"]}';
        var myFrt = JSON.parse(fruit);
      
        //ctx.fillStyle = myFrt.color[0];
        //ctx.fillRect(0, 0, canvas.height, myFrt.name.length);	
        ctx.font="20px Arial";
		    for(let i = 0; i < myFrt.name.length; i++){
          ctx.fillStyle = myFrt.color[i];
          ctx.fillRect(0, 100*i,20*myFrt.count[i],100);
          
          ctx.fillStyle = "black";
          ctx.fillText(myFrt.name[i],10,50+100*i);
          ctx.fillText(myFrt.count[i],10, 70+100*i);
          
        }

    }

	// Once the HTML document has finished loading and has been parsed, call the changeCanvasColor function.
    document.addEventListener('DOMContentLoaded', draw);