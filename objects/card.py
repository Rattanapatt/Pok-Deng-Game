class Card:
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank
        self.value = self.get_value()
        
    def get_value(self):
        if self.rank in ['10', 'Jack', 'Queen', 'King']:
            return 0
        elif self.rank in ["Ace"]:
            return 1
        else:
            return int(self.rank)
    
    def __repr__(self):
        return f"{self.suit}-{self.rank}"