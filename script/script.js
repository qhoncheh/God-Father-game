/* change level */
var start1 = document.getElementById("startFight");
setTimeout((x) => {
  holderLoad.style.display = "none";
  holder.style.display = "block";
  auHome.play();
}, 6000);

start1.addEventListener("click", () => {
  holder.style.display = "none";
  fighterMenu.style.display = "block";
});

var hback = document.getElementById("homeBack");
hback.addEventListener("click", () => {
  fighterMenu.style.display = "none";
  holder.style.display = "block";
  auHomeBack.play();
  auHome.play();
});
var start2 = document.getElementById("startGame");
start2.addEventListener("click", () => {
  fighterMenu.style.display = "none";
  fightPlace.style.display = "block";
});
/* menu */
var pos = 0;

function sevich() {
  if (pos == 0) {
    subMenu.style.display = "block";
    subMenu.style.display = "flex";
    dark1.style.display = "block";
    settings.style.display = "none";
    pos = 1;
    auMenu.play();
  } else if (pos == 1) {
    subMenu.style.display = "none";
    dark1.style.display = "none";
    pos = 0;
  }
}
itemsSetting.onclick = function () {
  if (pos == 1) {
    dark1.style.display = "block";
    settings.style.display = "block";
    subMenu.style.display = "none";
    auMenu.play();
    pos = 2;
  }
};
exit.onclick = function () {
  if (pos == 2) {
    dark1.style.display = "none";
    auMenu.play();
    pos = 1;
  }
};
/* volume on / off */
var volume = 1;
voise.onclick = function () {
  if (volume == 0) {
    auMenu.pause();
    auClick.pause();
    auHomeBack.pause();
    voise.className = "rightVolume";
    volume = 1;
  } else if (volume == 1) {
    auMenu.play();
    voise.className = "leftVolume";
  }
};
/* music on / off */
var music = 0;
voise1.onclick = function () {
  if (music == 0) {
    auHome.play();
    voise1.className = "rightMusic";
    music = 1;
  } else if (music == 1) {
    auHome.pause();
    voise1.className = "leftMusic";
    music = 0;
  }
};
