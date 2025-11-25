// ========================
//     Картки + номінали
// ========================
const cards = [
  { name: "6", value: 6, img: "https://deckofcardsapi.com/static/img/6C.png" },
  { name: "7", value: 7, img: "https://deckofcardsapi.com/static/img/7H.png" },
  { name: "8", value: 8, img: "https://deckofcardsapi.com/static/img/8D.png" },
  { name: "9", value: 9, img: "https://deckofcardsapi.com/static/img/9S.png" },
  {
    name: "10",
    value: 10,
    img: "https://deckofcardsapi.com/static/img/0C.png",
  },
  {
    name: "Валет",
    value: 2,
    img: "https://deckofcardsapi.com/static/img/JC.png",
  },
  {
    name: "Дама",
    value: 3,
    img: "https://deckofcardsapi.com/static/img/QS.png",
  },
  {
    name: "Король",
    value: 4,
    img: "https://deckofcardsapi.com/static/img/KH.png",
  },
  {
    name: "Туз",
    value: 11,
    img: "https://deckofcardsapi.com/static/img/AS.png",
  },
];

// ========================
//     Змінні
// ========================
let userName = prompt("Введіть ваше ім’я:");
document.getElementById("username").innerHTML = "<b>Гравець:</b> " + userName;

let round = 1;
let totalUser = 0;
let totalComp = 0;

// ========================
//     Основна функція
// ========================
function playRound() {
  if (round > 3) return;

  let userCard = cards[Math.floor(Math.random() * cards.length)];
  let compCard = cards[Math.floor(Math.random() * cards.length)];

  totalUser += userCard.value;
  totalComp += compCard.value;

  document.getElementById("userScore").innerText = totalUser;
  document.getElementById("compScore").innerText = totalComp;

  document.getElementById("userCard").src = userCard.img;
  document.getElementById("compCard").src = compCard.img;

  document.getElementById("tries").innerText = `Спроба ${round} з 3`;

  round++;

  if (round === 4) {
    determineWinner();
  }
}

// ========================
//     Визначення переможця
// ========================
function determineWinner() {
  let winnerText = "";

  if (totalUser > totalComp) winnerText = `🎉 ${userName} переміг!`;
  else if (totalUser < totalComp) winnerText = "💻 Комп'ютер переміг!";
  else winnerText = "🤝 Нічия!";

  document.getElementById("winner").innerHTML = winnerText;
}
