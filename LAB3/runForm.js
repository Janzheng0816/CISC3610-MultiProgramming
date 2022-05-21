
function clearText(){
	localStorage.removeItem("title");
	localStorage.removeItem("info");
	document.getElementById("title").value="";
	document.getElementById("info").value="";
}
function restore(){
	getTitle();
	getInfo();
}
function saveTitle(){
	localStorage.setItem("title", document.getElementById("title").value);
}
function saveInfo(){
	localStorage.setItem("info", document.getElementById("info").value);
}
function getTitle(){
	if (localStorage.title) {
		document.getElementById("title").value=localStorage.getItem("title");		
	}
}
function getInfo(){
	if (localStorage.info) {
		document.getElementById("info").value=localStorage.getItem("info");
	}
}