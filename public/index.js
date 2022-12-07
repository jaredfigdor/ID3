const timeout = (delay) => new Promise((res) => setTimeout(res, delay));

window.addEventListener('DOMContentLoaded', () => {
  // Example 2:
  // Randomize
  const randomizeButton = document.querySelector('#randomizeButton');
  const slotMachineResults = [
    document.querySelector('#machine0Result'),
    document.querySelector('#machine1Result'),
    document.querySelector('#machine2Result'),
  ];
  const slotMachineContainers = [
    document.querySelector('#machine0'),
    document.querySelector('#machine1'),
    document.querySelector('#machine2'),
  ];
  const slotMachines = slotMachineContainers.map(
    (element, index) => new SlotMachine(element, { active: index }),
  );

  function onComplete() {
    const index = this.element.id.replace(/[a-z]/g, '');

    slotMachineResults[index].innerText = `Index: ${this.active}`;
  }

  randomizeButton.addEventListener('click', () => {
    slotMachines[0].shuffle(5, onComplete);
    setTimeout(() => slotMachines[1].shuffle(5, onComplete), 500);
    setTimeout(() => slotMachines[2].shuffle(5, onComplete), 1000);
  });

  // Example 5:
  // Slot Machine
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

  // Footer
  const footerElement = document.querySelector('#textMachine');
  const footer = new SlotMachine(footerElement, {
    active: 1,
    delay: 450,
    auto: 1500,
    randomize() {
      return this.nextIndex;
    },
  });

  (async function runFooter() {
    await footer.shuffle(5)
    await timeout(1000);
    runFooter();
  })();


  var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
});

$( document ).ready(function() {

	$( ".filt" ).click(function() {
		$( ".filt" ).css('background-color', 'black');
	  });
  
	
	/*******************************************
	 * Video cam scripts and function */

	//set up variables
	var $opencam = $('.opencam');
	var $closecam = $('.closecam');
	var $buttons = $('.filterButton');
	var $snap = $('.snap');
	var $video = $('#video');
	var $canvas = $('#canvas');
  var $save = $('#save');
  var $show1 = $('#show1');

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
