let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
// let sumEL = document.getElementById("sum-el") querySelector se koristi za bilo sta, 
// kako za ID tako i za klasu ili cak i ceo tag; body, h1, p itd.
let sumEL = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEL.textContent = "Sum: "+ sum;
    if (sum <= 20) {
        message = ("Do you want to draw a new card? ")
    } else if (sum === 21) {
        message = ("You've got Blackjack!")
        hasBlackjack = true;
    } else {
        message = ("You're out of the game!")
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = 2
    sum += card
    cards.push(card)
    renderGame()
}






