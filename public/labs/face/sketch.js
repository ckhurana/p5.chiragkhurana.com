var img;
var persons = [];
var faces;
var win = {
	w: 600,
	h: 400
};

function preload() {
	var x = getQueryStringValue("id");

	var url;
	if(x != undefined && x != ""){
		url = "https://iattend-32ac0.firebaseio.com/attendance/" + x + ".json";
	} else {
		url = "https://iattend-32ac0.firebaseio.com/attendance/103.json";
	}
	faces = loadJSON(url);
}

function setup() {
	img = createImg(faces.image);
	img.hide();

	if(windowWidth > windowHeight) {
		win.h = windowHeight * 0.9;
		win.w = img.elt.width/img.elt.height * win.h;
	} else {
		win.w = windowWidth * 0.9;
		win.h = img.elt.height/img.elt.width * win.w;
	}

	createCanvas(win.w, win.h);

	document.getElementById('detected').innerHTML = "Detected: " + faces.result.detected;
	document.getElementById('identified').innerHTML = "Identified: " + faces.result.identified;

	var faceList = faces.result.faces;
	for (var  i = 0; i < faceList.length; i++) {

		var per = faceList[i].faceRectangle;
		var p;
		var info = {x:per.left, y:per.top, w:per.width, h:per.height};
		info.x = map(info.x, 0, img.elt.width, 0, win.w);
		info.w = map(info.w, 0, img.elt.width, 0, win.w);
		info.y = map(info.y, 0, img.elt.height, 0, win.h);
		info.h = map(info.h, 0, img.elt.height, 0, win.h);

		if(faceList[i].name != undefined) {
			p = new Person(info.x, info.y, info.w, info.h, faceList[i].name);
		} else {
			p = new Person(info.x, info.y, info.w, info.h, "Unidentified");
		}
		persons.push(p);
	}
}

function draw() {
	background(0);
	image(img, 0, 0, win.w, win.h);

	for (var i = 0; i < persons.length; i++){
		persons[i].show();
		persons[i].showName(mouseX, mouseY);
	}

}

function getQueryStringValue (key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
