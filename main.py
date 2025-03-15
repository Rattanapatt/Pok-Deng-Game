# Pok-Deng Game

from objects import Deck
from functions import get_player_bet, compare_score, continuation

net_chip = 0
while True:
    # Placing bet
    player_bet = get_player_bet()
    
    # Dealing Card
    deck = Deck()
    deck.shuffle()

    player_card = [deck.drawcard(), deck.drawcard()]
    dealer_card = [deck.dealer_draw(), deck.dealer_draw()]

    # Compare Value
    print(f"You got {player_card[0].suit}-{player_card[0].rank}, {player_card[1].suit}-{player_card[1].rank}")
    print(f"The dealer got {dealer_card[0].suit}-{dealer_card[0].rank}, {dealer_card[1].suit}-{dealer_card[1].rank}")

    player_score = player_card[0].value + player_card[1].value
    dealer_score = dealer_card[0].value + dealer_card[1].value
    
    net_chip = compare_score(player=player_score, dealer=dealer_score, net=net_chip, bet=player_bet)
    print("#" * 20, "\n")
    
    # Continuation
    print("#" * 20)
    exit_command = continuation(net_chip=net_chip)
    
    if exit_command == True:
        break

print("#" * 20)
padding = input("Press any key to exit")