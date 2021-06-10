//var
const widthFloor = 700;
const heightFloor = 700;

// create elements
const screen = document.createElement('div');
screen.setAttribute('id', 'screen');
screen.style.display = 'flex';
screen.style.justifyContent = 'center';
screen.style.alignItems = 'center';
screen.style.width = '100%';
screen.style.height = '95vh';

const gameFloor = document.createElement('div');
gameFloor.setAttribute('id', 'gameFloor');
gameFloor.style.width = `${widthFloor}px`;
gameFloor.style.height = `${heightFloor}px`;
gameFloor.style.border = 'blue 1px solid';
gameFloor.style.position = 'relative';
gameFloor.style.backgroundColor = "black";

const root = document.getElementById('root');

export {screen, gameFloor,root};