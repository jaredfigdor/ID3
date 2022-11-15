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
