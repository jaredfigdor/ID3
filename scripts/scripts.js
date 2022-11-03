$( document ).ready(function() {
  
	
	/*******************************************
	 * Video cam scripts and function */

	//set up variables
	var $opencam = $('.opencam');
	var $closecam = $('.closecam');
	var $snap = $('.snap');
	var $video = $('#video');
	var $canvas = $('#canvas');

	if($canvas.length > 0) {
		var context = $canvas[0].getContext('2d');
	}

	var strr;


	//function to open the camera video feed
	function opencam() {
		navigator.getUserMedia= navigator.getUserMedia ||   navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia ;
	    if(navigator.getUserMedia) {
	      navigator.getUserMedia({video:true },  streamWebCam ,throwError) ;
	    }
	}

	function streamWebCam(stream){
    	const  mediaSource = new MediaSource(stream);
	    try {
	      video.srcObject = stream;
	    } catch (error) {
	      video.src = URL.createObjectURL(mediaSource);
	    }
    	video.play();
    	strr=stream;
    }


	//function to close the camera
	function closecam() {
		video.pause();
		try {
			video.srcObject = null;
		} catch {
			video.src = null;
		}

		var track = strr.getTracks()[0];
		track.stop();
	}

	//function to take a snapshot
	function snap() {
		canvas.width=video.clientWidth;
    	canvas.height=video.clientHeight;
    	context.drawImage(video,0,0);
	}

	//handle any errors
	function throwError(e){
		alert(e.name);
	}

	//assign click actions to buttons
	$opencam.on('click', function(e) {
		e.preventDefault();
		opencam();
		$closecam.show();
		$snap.show();
	});

	$closecam.on('click', function(e) {
		e.preventDefault();
		closecam();
		$closecam.hide();
		$snap.hide();
	});

	$snap.on('click', function(e) {
		e.preventDefault();
		snap();
	});

	/****************************************
	 * END WebCam script */


	/**************************************
	 * Shuffle code */

	const btn = document.querySelector('#shuffle');

	const el1 = document.querySelector('#machine1');
	const el2 = document.querySelector('#machine2');
	const el3 = document.querySelector('#machine3');

	const machine1 = new SlotMachine(el1, { active: 0 });
	const machine2 = new SlotMachine(el2, { active: 1 });
	const machine3 = new SlotMachine(el3, { active: 2 });

	function onComplete(active){
		//results[this.element.id].innerText = `Index: ${this.active}`;
	}


	btn.addEventListener('click', () => {
		machine1.shuffle(5, onComplete);
		setTimeout(() => machine2.shuffle(5, onComplete), 500);
		setTimeout(() => machine3.shuffle(5, onComplete), 1000);
	});

	/**************************************
	 * END shuffle code */ 



});