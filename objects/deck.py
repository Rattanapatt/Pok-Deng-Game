from .card import Card
import random

class Deck:
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    
    def __init__(self):
        self.cards = [Card(suit=suit, rank=rank) for suit in self.suits for rank in self.ranks]
        
    def shuffle(self):
        random.shuffle(self.cards)
        
    def drawcard(self):
        return self.cards.pop()
    
    def dealer_draw(self):
        return self.cards.pop(0)
    
    def length(self):
        return len(self.cards)
    
    def __repr__(self):
        return f"{self.cards}"