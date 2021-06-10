//var
import {Ghost} from "../classes/Ghost";
import {PacMan} from "../classes/Pacman";
import {wallsInfos} from "./wall";
import {foodsPosition} from "./food";

const widthFloor = 700;
const heightFloor = 700;

//initializing pacman
const pacMan = new PacMan(350, 50, wallsInfos, foodsPosition);

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

// Create Ghost
function generateGhosts() {
    let intervalGhostId = null;
    const ghost1 = new Ghost(350, 350, wallsInfos, pacMan);
    gameFloor.appendChild(ghost1.getGhost());
    intervalGhostId = setInterval(() => {
        gameFloor.appendChild(new Ghost(350, 350, wallsInfos, pacMan).getGhost());
    }, 10000);
}

export {screen, gameFloor,root,widthFloor,heightFloor,generateGhosts,pacMan};