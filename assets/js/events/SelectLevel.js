import {walls} from "../components/wall";
import {gameFloor, generateGhosts, pacMan, root, screen} from "../components/env";
import {foods} from "../components/food";

const levelButtons = document.querySelectorAll('.btn-level');
const startBtn = document.getElementById('start');
const modale = document.getElementsByClassName('modal-menu');
let difficulty = "";
let gameStarted = false;

// level 0 = easy
let level = 0;

levelButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        resetBoxShadow();
        e.target.style.boxShadow = "-1px 11px 15px 5px gold";
        e.target.style.color = "gold";
        difficulty = e.target.id;
    });
});

startBtn.addEventListener('click', () => {
    if(localStorage.getItem('level')) {
        switch (difficulty) {
            case "easy":
                level = 0;
                break;
            case "medium":
                level = 1;
                break;
            case "hard":
                level = 2;
                break;
            case "impossible":
                level = 3;
                break;
        }
        modale[0].style.display = "none";
        // we inject the element on root
        walls.forEach(wall => gameFloor.appendChild(wall));
        foods.forEach(food => gameFloor.appendChild(food));
        gameFloor.appendChild(pacMan.getPacMan());
        screen.appendChild(gameFloor);
        root.appendChild(screen);

// We create the ghosts
        generateGhosts((10000 - (level * 2000)));
    }
});

function resetBoxShadow() {
    levelButtons.forEach(btn => {
        btn.style.boxShadow = "-1px 11px 15px 5px blue";
        btn.style.color = "white";
    });
}

export {modale,gameStarted,level};

