$( document ).ready(function() {
  
	
	/*******************************************
	 * Video cam scripts and function */

	//set up variables
	var $opencam = $('.opencam');
	var $closecam = $('.closecam');
	var $buttons = $('.filterButton');
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
    	context.drawImage(video,0,0,video.clientWidth,video.clientHeight);
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
		$opencam.hide();
		$buttons.show();
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

	 let count = 0;
	 const shuffleButton = document.querySelector('#casinoShuffle');
	 const stopButton = document.querySelector('#casinoStop');
	 const casino1Element = document.querySelector('#casino1');
	 const casino2Element = document.querySelector('#casino2');
	 const casino3Element = document.querySelector('#casino3');
	 const casino1 = new SlotMachine(casino1Element, {
	   active: 0,
	   delay: 500,
	   direction: 'up'
	 });
	 const casino2 = new SlotMachine(casino2Element, {
	   active: 1,
	   delay: 500,
	 });
	 const casino3 = new SlotMachine(casino3Element, {
	   active: 2,
	   delay: 500,
	   direction: 'up'
	 });
   
	 shuffleButton.addEventListener('click', () => {
	   count = 3;
	   casino1.shuffle(Infinity);
	   casino2.shuffle(Infinity);
	   casino3.shuffle(Infinity);
	 });
   
	 stopButton.addEventListener('click', () => {
	   switch (count) {
		 case 3:
		   casino1.stop(2);
		   break;
		 case 2:
		   casino2.stop(3);
		   break;
		 case 1:
		   casino3.stop(4);
		   break;
	   }
	   count--;
	 });

	/**************************************
	 * END shuffle code */ 



});