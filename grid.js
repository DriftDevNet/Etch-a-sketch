const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRgb = document.createElement('button');
const vl = document.createElement('div')
const btnSize = document.createElement('button');
const btnContainer = document.querySelector('.buttons');



// function to create a grid
function createGrid(col, row) {
  for (i = 0; i < col * row; i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid gray';
    container.appendChild(div).classList.add('box');
  }
  container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
}
createGrid(16, 16);




// create a function that generates grayscale color with 'click' of the 'btnGray' button.
function grayColor() {
  const boxs = container.querySelectorAll('.box');
  btnGray.addEventListener('click', () => {
    boxs.forEach((box) =>
      box.addEventListener('mouseover', () => {
        let grayRnum = Math.floor(Math.random() * 100 + 125);
        box.style.background = `rgb(${grayRnum}, ${grayRnum}, ${grayRnum})`;
      })
    );
  });
  btnGray.textContent = 'Gray';
  btnContainer.appendChild(btnGray).classList.add('btn', 'btnGry');
}

grayColor();




// generates black color
function blackColor() {
  const boxs = container.querySelectorAll('.box');
  btnBlack.addEventListener('click', () => {
    boxs.forEach((box) =>
      box.addEventListener('mouseover', () => {
        box.style.background = `rgb(0,0,0)`;
      })
    );
  });
  btnBlack.textContent = 'Black';
  btnContainer.appendChild(btnBlack).classList.add('btn', 'btnBlk');
}

blackColor();




// generates rgb color
function rgbColor() {
  const boxs = container.querySelectorAll('.box');
  btnRgb.addEventListener('click', () => {
    boxs.forEach((box) =>
      box.addEventListener('mouseover', () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${r}, ${g}, ${b})`;
      })
    );
  });
  btnRgb.textContent = 'RGB';
  btnContainer.appendChild(btnRgb).classList.add('btn', 'btnRgb');
}

rgbColor();




// Create a reset btn function.
function reSet() {
  const boxs = container.querySelectorAll('.box');
  // remove all grid cells.
  boxs.forEach((box) => box.remove());
}




// create a resize btn function.
function reSize() {
  btnSize.addEventListener('click', () => {
    let resizeGrid = prompt('How many squares on each side would you like?');
    if (resizeGrid === null || resizeGrid < 1) {
      // if use input is empty or < 1, this function will remvove all grid cells and rebuild it a 16 x 16 grid.
      // with all the button function run over again.
      reSet();
      createGrid(16, 16);
      grayColor();
      blackColor();
      rgbColor();
    } else if (resizeGrid <= 64) {
      reSet();
      createGrid(resizeGrid, resizeGrid);
      grayColor();
      blackColor();
      rgbColor();
    } else {
      alert('Numbers larger than 64 are not supported.');
      prompt('Input a grid size:');
    }
  });
  btnSize.textContent = 'Resize';
  btnContainer.appendChild(btnSize).classList.add('btn', 'btnResize');
}

reSize();
