let gameseq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (start == false) {
    start = true;
    console.log("game is started");
    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  userSeq = [];
  level++;

  h2.innerText = `Level ${level}`;
  let randidx = Math.floor(Math.random() * 4);
  let randcolor = btns[randidx];
  let randbtn = document.querySelector(`.${randcolor}`);
  gameseq.push(randcolor);
  /*  console.log(randidx);
  console.log(randcolor);
  console.log(randbtn); */
  gameFlash(randbtn);
}

function checkans(idx) {
  if (userSeq[idx] == gameseq[idx]) {
    if (userSeq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
  checkans(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  start = false;
  gameseq = [];
  userSeq = [];
  level = 0;
}
