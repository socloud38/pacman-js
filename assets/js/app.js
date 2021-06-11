import {foods} from './components/food';
import {walls} from "./components/wall";
//env
import {screen,gameFloor,root,generateGhosts,pacMan,gameStarted,} from "./components/env";

if(gameStarted) {
    // we inject the element on root
    walls.forEach(wall => gameFloor.appendChild(wall));
    foods.forEach(food => gameFloor.appendChild(food));
    gameFloor.appendChild(pacMan.getPacMan());
    screen.appendChild(gameFloor);
    root.appendChild(screen);

// We create the ghosts
    generateGhosts();
}

//css
import '../css/style.css';