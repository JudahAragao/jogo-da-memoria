export default class GameDynamics {

    constructor() {
        this.contentCards =
            [['🥳','🥳'], ['😇','😇'], ['🥰','🥰'], ['👽','👽'],
                ['👻','👻'], ['🧶','🧶'], ['💍','💍'], ['⛑','⛑'],
                ['👑','👑'], ['🧵','🧵'], ['🐲','🐲'], ['🕸','🕸'],
                ['🌷','🌷'], ['🌎','🌎'], ['🍂','🍂'], ['🍁','🍁'],
                ['🍄','🍄'], ['🌝','🌝'], ['🌚','🌚'], ['☄️','☄️'],
                ['🌈','🌈'], ['🥩','🥩'], ['🌭','🌭'], ['🍔','🍔'],
                ['🍡','🍡'], ['🥝','🥝'], ['🥨','🥨'], ['🍖','🍖'],
                ['🍭','🍭'], ['🍩','🍩'], ['⚽️','⚽️'], ['🏈','🏈'],
                ['🏀','🏀'], ['🎱','🎱'], ['🎮','🎮'], ['🚀','🚀'],
                ['🛸','🛸'], ['🚦','🚦'], ['✈️','✈️'], ['🎑','🎑'],
                ['💻','💻'], ['🕹','🕹'], ['💽','💽'], ['💣','💣'],
                ['✡️','✡️'], ['🔯','🔯'], ['☮️','☮️'], ['☯️','☯️'],
                ['♠️','♠️'], ['♣️','♣️'], ['♥️','♥️'], ['♦️','♦️'], ['🃏','🃏'],
                ['🏴‍☠️','🏴‍☠️'], ['🏴','🏴'], ['🏳️','🏳️'], ['🏁','🏁'],
                ['🚩','🚩'], ['🎌','🎌'], ['☣️','☣️'], ['☢️','☢️']]
        this.chosenCards = []
        this.qtdeCardPorLevel = 4
        this.level = 1
        this.flip = 2
    }

    shuffle() { // distribuir e embaralhar cartas
        this.chosenCards = []
        let count = 0
        let valueRandom

        while (count < this.qtdeCardPorLevel / 2) { // escolher cartas disponíveis randomicamente
            valueRandom = Math.floor(Math.random() * 60)

            if (!this.chosenCards.includes(this.contentCards[valueRandom])) {
                this.chosenCards.push(this.contentCards[valueRandom])
            } else {
                count -= 1
            }

            count++
        }

        this.chosenCards = this.chosenCards.reduce((list, sub) => list.concat(sub), []) // transformar matriz em array

        for (let i = this.qtdeCardPorLevel - 1; i > 0; i--) { // embaralhar cartas
            
            const j = Math.floor(Math.random() * (i + 1));
            
            [this.chosenCards[i], this.chosenCards[j]] = [this.chosenCards[j], this.chosenCards[i]]; // Reposicionando elemento
        }
    }

    startGame() {
        this.shuffle()
    }
}