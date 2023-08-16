const word_container = document.querySelector(".word_container"),
  score_time = document.querySelectorAll(".score_time span"),
  view_letters = document.querySelector(".letters"),
  pista = document.querySelector(".pista"),
  btns = document.querySelectorAll(".controls input");

//functions
let acierto;
let selectWord;
const start = () => {
  resets();
  const azar = randomWord(words);

  time();
  selectWord = words[azar];
  renderSpans(selectWord.word);

  btns[0].addEventListener("click", () => {
    pista.innerHTML = `Pista: ${selectWord.pista}`;
  });
};

//listeners
btns[1].addEventListener("click", start);
