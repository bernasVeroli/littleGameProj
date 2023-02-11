const player = document.getElementById("player");
const fruit = document.getElementById("point");
const score = document.getElementById("score");

function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const pointRect = point.getBoundingClientRect();
  
    if (playerRect.left < pointRect.right &&
        playerRect.right > pointRect.left &&
        playerRect.top < pointRect.bottom &&
        playerRect.bottom > pointRect.top) {
      point.style.display = "none";
      setTimeout(function() {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        point.style.left = x + "px";
        point.style.top = y + "px";
        point.style.display = "block";

        score.textContent ++;
      }, 400);
    }
  }
var spd = 5;
console.log("Set your velocity with");
console.log("spd = value");

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyD") {
      if (player.offsetLeft + spd + player.offsetWidth <= window.innerWidth) {
        player.style.left = (player.offsetLeft + spd) + "px";
      }
    }
    if (event.code === "KeyA") {
      if (player.offsetLeft - spd >= 0) {
        player.style.left = (player.offsetLeft - spd) + "px";
      }
    }
    if (event.code === "KeyW") {
      if (player.offsetTop - spd >= 0) {
        player.style.top = (player.offsetTop - spd) + "px";
      }
    }
    if (event.code === "KeyS") {
      if (player.offsetTop + spd + player.offsetHeight <= window.innerHeight) {
        player.style.top = (player.offsetTop + spd) + "px";
      }
    }
    checkCollision();
  });
