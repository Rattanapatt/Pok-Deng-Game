export function getPlayerBet() {
  let playerBet;

  while (true) {
    playerBet = prompt("Please put your bet (chips):");

    if (playerBet === null) continue;

    playerBet = parseInt(playerBet);

    if (!isNaN(playerBet) && playerBet > 0) {
      break;
    }
  }

  return playerBet;
}
