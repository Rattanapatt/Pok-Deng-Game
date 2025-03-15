export function continuation(netChip) {
  let exitCommand = false;

  while (true) {
    let playerCommand = prompt("Do you want to continue??? (Y/N):");

    if (!playerCommand) continue;

    playerCommand = playerCommand.toLowerCase();

    if (playerCommand === "n" || playerCommand === "no") {
      console.log(`You got total ${netChip} chips`);
      exitCommand = true;
      break;
    } else if (playerCommand === "y" || playerCommand === "yes") {
      break;
    } else {
      console.log("Please enter the correct command...");
    }
  }

  return exitCommand;
}
