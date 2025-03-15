import { parse } from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function continuation(netChip) {
  return new Promise((resolve) => {
    const askQuestion = () => {
      rl.question("Do you want to continue??? (Y/N): ", (playerCommand) => {
        if (playerCommand == "n" || playerCommand == "no") {
          rl.close();
          console.log(`You got total ${netChip} chips`);
          resolve(true);
        } else if (playerCommand == "y" || playerCommand == "yes") {
          rl.close();
          resolve(false);
        } else {
          console.log("Please enter the correct command...");
          askQuestion();
        }
      });
    };

    askQuestion();
  });
}
