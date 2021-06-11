import {gameFloor, heightFloor, widthFloor} from "../components/env";

export function GameOver(score) {
    const card = document.createElement('div');
    card.style.width = "300px";
    card.style.height = "300px";
    card.style.border = "solid 3px #3F51B5";
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.backgroundColor = "black";
    card.style.zIndex= 999;
    card.style.position = "absolute";
    card.style.left = `${widthFloor/2 - 150}px`;
    card.style.top = `${heightFloor/2 - 150}px`;
    const text = document.createElement('div');
    text.innerHTML = "Game Over";
    text.style.color = "red";
    text.style.fontWeight = "bold";
    text.style.fontSize = "40px";
    const yourScore = document.createElement('div');
    yourScore.innerHTML = "your score :" + score;
    yourScore.style.color = "blue";
    yourScore.style.fontWeight = "bold";
    yourScore.style.fontSize = "20px";
    const oldScore = document.createElement('div');
    oldScore.innerHTML = "your old score :" + localStorage.getItem('oldScore');
    oldScore.style.color = "gold";
    oldScore.style.fontWeight = "bold";
    oldScore.style.fontSize = "20px";
    text.appendChild(yourScore);
    text.appendChild(oldScore);
    card.appendChild(text);
    gameFloor.appendChild(card);
}