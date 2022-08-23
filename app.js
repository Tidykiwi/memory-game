document.addEventListener('DOMContentLoaded', () => {

// Card options
const cardArray = [
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'chicken',
        img: 'images/chicken.jpg'
    },
    {
        name: 'chicken',
        img: 'images/chicken.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'soda',
        img: 'images/soda.jpg'
    },
    {
        name: 'soda',
        img: 'images/soda.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

// Create board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/cover.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// Check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/square.png')
        cards[optionTwoId].setAttribute('src', 'images/square.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/cover.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cover.jpg')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

// Flip card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 250)
    }
}

createBoard()

})