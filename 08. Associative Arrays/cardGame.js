function cardGame(data) {
  let players = new Map();

  let enumCardPower = {
    "J": 11,
    "Q": 12,
    "K": 13,
    'A': 14,
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10

  };
  let enumCardType = {
    "S": 4,
    'H': 3,
    "D": 2,
    "C": 1,
  };

  for (let line of data) {
    let tokens = line.split(`: `);
    let names = tokens.shift();

    let deckAsString = tokens[0];
    let deckArr = deckAsString.split(`, `);

    if (!players.has(names)) {
      players.set(names, new Set());
    }

    for (let card of deckArr) {
      players.get(names).add(card);
    }
  }
  for (let [key, velue] of players) {
    let sum = 0;

    for (let card of velue) {
      let cardInfo = card.split(``);
      let cardType = cardInfo.pop();
      let cardPower = cardInfo.join(``);

      let cardPowerAsNumber = enumCardPower[cardPower];
      let cardTypeAsNum = enumCardType[cardType];

      sum+=cardPowerAsNumber*cardTypeAsNum;
    }
    console.log(`${key}: ${sum}`)
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
