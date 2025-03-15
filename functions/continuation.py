def continuation( net_chip):
    exit_command = False
    while True:
        player_command = input("Do you want to continue???(Y/N): ")
        if player_command.lower() == "n" or player_command.lower() == "no":    
            print(f"You got total {net_chip} chips")
            exit_command = True
            break
        elif player_command.lower() == "y" or player_command.lower() == "yes":
            break
        else:
            print("Please enter the correct command...")
    return exit_command