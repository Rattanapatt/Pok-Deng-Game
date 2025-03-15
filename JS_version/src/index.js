import { Deck } from "../src/objects/mainclass.js";
import { getPlayerBet } from "../functions/get_player_bet.js";
import { compareScore } from "../functions/compare_score.js";
import { continuation } from "../functions/continuation.js";
import { renderCard } from "../functions/compare_score.js";

async function main() {
  let netChip = 0;

  while (true) {
    // Placing bet
    let playerBet = await getPlayerBet();

    // Dealing Cards
    let deck = new Deck();
    deck.shuffle();

    let playerCards = [deck.drawCard(), deck.drawCard()];
    let dealerCards = [deck.drawCard(), deck.drawCard()];

    // Compare Value
    let playerHand = renderCard(playerCards);
    let dealerHand = renderCard(dealerCards);

    console.log(`You got ${playerHand}`);
    console.log(`The dealer got ${dealerHand}`);

    netChip = compareScore(playerCards, dealerCards, netChip, playerBet);
    console.log("#".repeat(20) + "\n");

    // Continuation
    console.log("#".repeat(20));
    let exitCommand = await continuation(netChip);
    console.log(exitCommand);

    if (exitCommand) {
      break;
    }
  }

  console.log("#".repeat(20) + "\n");
  console.log("Game Over!");
}

main();
