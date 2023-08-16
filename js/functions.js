const time = () => {
  let countDown = 15,
    counter;
  let time = setInterval(() => {
    counter = secondsToString(countDown);
    countDown--;
    score_time[1].innerHTML = `Time: ${counter} `;
    if (countDown <= 4) {
      score_time[1].classList.add("danger");
    }
    if (countDown < 0) {
      clearInterval(time);
      word_container.style.background = "rgba(232, 52, 52, 0.737)";
      view_letters.innerHTML = `<h4>La palabra era ${selectWord.word.toUpperCase()}</h4>`;
      btns[0].hidden = true;
      btns[1].hidden = false;
      score_time[1].classList.remove("danger");
      game_over();
    }
    if (acierto) {
      clearInterval(time);
      view_letters.innerHTML = `<h4>GANASTE</h4>`;
      btns[0].hidden = true;
      btns[1].hidden = false;
    }
  }, 1000);
  acierto = false;
};

const resets = () => {
  word_container.innerHTML = "";
  word_container.style.background = "transparent";
  pista.innerHTML = "Pista: ";
  view_letters.innerHTML = "";
  btns[1].hidden = true;
  btns[0].hidden = false;
  score_time[1].classList.remove("danger");
};

function secondsToString(seconds) {
  let minute = Math.floor((seconds / 60) % 60);
  minute = minute < 10 ? `0${minute}` : minute;
  let second = seconds % 60;
  second = second < 10 ? `0${second}` : second;
  return `${minute}:${second}`;
}

const randomWord = (arr) => {
  let random = Math.floor(Math.random() * arr.length);
  return random;
};
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

let score = 0;
const renderSpans = (word) => {
  const letras = [];
  for (const char of word) {
    const letter = document.createElement("span");
    word_container.appendChild(letter);
    document.addEventListener("keyup", (e) => {
      if (isLetter(e.key)) {
        if (char == e.key) {
          letter.innerHTML = char;
          letras.push(char);
          if (letras.length == word.length) {
            word_container.style.background = "rgba(49, 201, 85, 0.936)";
            score += 10;
            score_time[0].innerHTML = `Puntos: ${score}`;
            acierto = true;
          }
        }
      }
    });
  }
};

const game_over=()=>{

   alertify.notify(`Tus puntos totales: ${score}`, 'success', 5);
   score_time[0].innerHTML='Puntos: 0'
}
