import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function getPlayerBet() {
  return new Promise((resolve) => {
    function askBet() {
      rl.question("Please put your bet (chips): ", (playerBet) => {
        playerBet = parseInt(playerBet);

        if (!isNaN(playerBet) && playerBet > 0) {
          rl.close();
          resolve(playerBet);
        } else {
          console.log("Invalid input. Please enter a valid number.");
          askBet();
        }
      });
    }
    askBet();
  });
}
