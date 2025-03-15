import { Deck } from "./objects/mainclass.js";
import { getPlayerBet } from "./functions/get_player_bet.js";
import { compareScore } from "./functions/compare_score.js";
import { continuation } from "./functions/continuation.js";
import { renderCard } from "./functions/render_card.js";

let netChip = 0;

while (true) {
  // place a bet
  let playerBet = getPlayerBet();

  // dealing cards
  let deck = new Deck();
  deck.shuffle();

  let playerCards = [deck.drawCard(), deck.drawCard()];
  let dealerCards = [deck.drawCard(), deck.drawCard()];

  // compare value
  let playerHand = renderCard(playerCards);
  let dealerHand = renderCard(dealerCards);

  console.log(`You got ${playerHand}`);
  console.log(`The dealer got ${dealerHand}`);

  netChip = compareScore(playerCards, dealerCards, netChip, playerBet);
  console.log("#".repeat(20) + "\n");

  // continuation
  console.log("#".repeat(20));
  let exitCommand = continuation(netChip);

  if (exitCommand === true) {
    break;
  }
}

console.log("#".repeat(20) + "\n");
prompt("Press any key to exit");
