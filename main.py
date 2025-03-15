# Pok-Deng Game

from objects import Deck
from functions import get_player_bet, compare_score, continuation, render_card

net_chip = 0
while True:
    # Placing bet
    player_bet = get_player_bet()
    
    # Dealing Card
    deck = Deck()
    deck.shuffle()

    player_cards = [deck.drawcard(), deck.drawcard()]
    dealer_cards = [deck.dealer_draw(), deck.dealer_draw()]

    # Compare Value
    player_hand = render_card(player_cards)
    dealer_hand = render_card(dealer_cards)
    print(f"You got {player_hand}")
    print(f"The dealer got {dealer_hand}")

    net_chip = compare_score(player=player_cards, dealer=dealer_cards, net=net_chip, bet=player_bet)
    print("#" * 20, "\n")
    
    # Continuation
    print("#" * 20)
    exit_command = continuation(net_chip=net_chip)
    
    if exit_command == True:
        break

print("#" * 20, "\n")
padding = input("Press any key to exit")