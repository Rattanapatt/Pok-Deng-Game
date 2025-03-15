export class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.value = this.getValue();
  }

  getValue() {
    return ["10", "Jack", "Queen", "King"].includes(this.rank)
      ? 0
      : parseInt(this.rank) || 1;
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}

export class Deck {
  constructor() {
    this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    this.ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    this.cards = [];

    for (let suit of this.suits) {
      for (let rank of this.ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  drawCard() {
    return this.cards.length > 0 ? this.cards.pop() : null;
  }
}
