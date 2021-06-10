import {foodHeight,foodWidth,foodColor,foodsPosition} from './components/food';

// Classes of characters
import {PacMan} from './classes/Pacman';
import {Ghost} from './classes/Ghost';

//env
import {screen, gameFloor, root} from "./components/env";

// Obstacles
const wallsInfos = [
  {width: 650, height: 30, left: 15, top:20},
  {width: 650, height: 30, left: 15, top:650},
  {width: 30, height: 300, left: 15, top:20},
  {width: 30, height: 250, left: 15, top:430},
  {width: 30, height: 300, left: 650, top:20},
  {width: 30, height: 250, left: 650, top:430},
  {width: 70, height: 180, left: 130, top: 260},
  {width: 70, height: 180, left: 480, top: 260},
  {width: 100, height: 70, left: 120, top: 520},
  {width: 100, height: 70, left: 460, top: 520},
  {width: 100, height: 20, left: 290, top: 570},
  {width: 100, height: 70, left: 120, top: 110},
  {width: 100, height: 70, left: 460, top: 110},
  {width: 100, height: 20, left: 290, top: 110},
  {width: 10, height: 178, left: 270, top: 260},
  {width: 10, height: 178, left: 400, top: 260},
];

// initializing game elements
const pacMan = new PacMan(350, 50, wallsInfos, foodsPosition);

// Create Ghost
function generateGhosts() {
  let intervalGhostId = null;
  const ghost1 = new Ghost(350, 350, wallsInfos, pacMan);
  gameFloor.appendChild(ghost1.getGhost());
  intervalGhostId = setInterval(() => {
    gameFloor.appendChild(new Ghost(350, 350, wallsInfos, pacMan).getGhost());
  }, 10000);
}

// Create walls
const walls = wallsInfos.map((wall, i) => {
  const w = document.createElement('div');
  w.setAttribute('id', `wall-${i}`);
  w.style.width = `${wall.width}px`;
  w.style.height = `${wall.height}px`;
  w.style.border = '#3F51B5 7px double';
  w.style.boxSizing = 'border-box';
  w.style.borderRadius = '2px';
  w.style.backgroundColor = 'black';
  w.style.position = 'absolute';
  w.style.top = `${wall.top}px`;
  w.style.left = `${wall.left}px`;
  return w;
});

// Create Food
const foods = foodsPosition.map((p, i) => {
  const f = document.createElement('div');
  f.setAttribute('id', p.id);
  f.style.width = `${foodWidth}px`;
  f.style.height = `${foodHeight}px`;
  f.style.backgroundColor = foodColor;
  f.style.position = "absolute";
  f.style.top = `${p.top}px`;
  f.style.left = `${p.left}px`;
  return f;
});

// we inject the element on root
walls.forEach(wall => gameFloor.appendChild(wall));
foods.forEach(food => gameFloor.appendChild(food));
gameFloor.appendChild(pacMan.getPacMan());
screen.appendChild(gameFloor);
root.appendChild(screen);

// We create the ghosts
generateGhosts();
