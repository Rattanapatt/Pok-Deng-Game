def compare_score(player, dealer, net, bet):
    
    if player > dealer:
        result = 1
        net += (bet * result)
        text_out = f"You won!!!, recieved {bet} chips"
    elif player < dealer:
        result = -1
        net += (bet * result)
        text_out = f"You LOST!!!, lost {bet} chips"
    elif player == dealer:
        result = 0
        net += (bet * result)
        text_out = "TIE"
    else:
        return "ERROR"
    
    print(text_out)
    return net