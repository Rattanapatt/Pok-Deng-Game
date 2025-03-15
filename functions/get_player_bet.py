
def get_player_bet():
    while True:
        player_bet = input("Please put your bet (chips): ")
        try:
            int(player_bet)
            player_bet = int(player_bet)
            break
        except:
            pass
    return player_bet