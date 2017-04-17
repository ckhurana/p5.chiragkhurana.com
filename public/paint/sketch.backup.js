var token = "ssARhDcpJSMSBShZDpx8sRztFggyWR";

function setup() {
	var control = {
		url: 'http://iattend.cklabs.me/api/v2/user/',
		method: 'GET',
		content_type: 'json',
		headers: {
			Authorization: "Bearer " + token,
		},
		success: function(data) {
			console.log(data);
		},
		error: function(xhr, status, err){
        	console.log(err);
      	}
	};
	//$.ajax(control);

	createCanvas(600, 600);
	background(250, 250, 100);
}

function draw() {
	col = map(mouseX, 0, 600, 0, 255);
	background(col);
	ellipse(mouseX, 300, 20, 20);
}
