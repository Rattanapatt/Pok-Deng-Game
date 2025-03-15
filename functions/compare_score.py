def compare_score(player, dealer, net, bet):
    player = val_cards(player)
    dealer = val_cards(dealer)
    
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

def render_card(hand):
    return f"{hand[0].suit}-{hand[0].rank}, {hand[1].suit}-{hand[1].rank}"

def val_cards(hand):
    return hand[0].value + hand[1].value