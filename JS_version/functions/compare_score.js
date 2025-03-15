export function compareScore(player, dealer, net, bet) {
  player = valCards(player);
  dealer = valCards(dealer);

  let result;
  let textOut;

  if (player > dealer) {
    result = 1;
    net += bet * result;
    textOut = `You won!!!, received ${bet} chips`;
  } else if (player < dealer) {
    result = -1;
    net += bet * result;
    textOut = `You LOST!!!, lost ${bet} chips`;
  } else if (player === dealer) {
    result = 0;
    net += bet * result;
    textOut = "TIE";
  } else {
    return "ERROR";
  }

  console.log(textOut);
  return net;
}

export function renderCard(hand) {
  return `${hand[0].suit}-${hand[0].rank}, ${hand[1].suit}-${hand[1].rank}`;
}

function valCards(hand) {
  return hand[0].value + hand[1].value;
}
