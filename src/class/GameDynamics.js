export default class GameDynamics {

    constructor() {
        this.contentCards =
            [['๐ฅณ','๐ฅณ'], ['๐','๐'], ['๐ฅฐ','๐ฅฐ'], ['๐ฝ','๐ฝ'],
                ['๐ป','๐ป'], ['๐งถ','๐งถ'], ['๐','๐'], ['โ','โ'],
                ['๐','๐'], ['๐งต','๐งต'], ['๐ฒ','๐ฒ'], ['๐ธ','๐ธ'],
                ['๐ท','๐ท'], ['๐','๐'], ['๐','๐'], ['๐','๐'],
                ['๐','๐'], ['๐','๐'], ['๐','๐'], ['โ๏ธ','โ๏ธ'],
                ['๐','๐'], ['๐ฅฉ','๐ฅฉ'], ['๐ญ','๐ญ'], ['๐','๐'],
                ['๐ก','๐ก'], ['๐ฅ','๐ฅ'], ['๐ฅจ','๐ฅจ'], ['๐','๐'],
                ['๐ญ','๐ญ'], ['๐ฉ','๐ฉ'], ['โฝ๏ธ','โฝ๏ธ'], ['๐','๐'],
                ['๐','๐'], ['๐ฑ','๐ฑ'], ['๐ฎ','๐ฎ'], ['๐','๐'],
                ['๐ธ','๐ธ'], ['๐ฆ','๐ฆ'], ['โ๏ธ','โ๏ธ'], ['๐','๐'],
                ['๐ป','๐ป'], ['๐น','๐น'], ['๐ฝ','๐ฝ'], ['๐ฃ','๐ฃ'],
                ['โก๏ธ','โก๏ธ'], ['๐ฏ','๐ฏ'], ['โฎ๏ธ','โฎ๏ธ'], ['โฏ๏ธ','โฏ๏ธ'],
                ['โ ๏ธ','โ ๏ธ'], ['โฃ๏ธ','โฃ๏ธ'], ['โฅ๏ธ','โฅ๏ธ'], ['โฆ๏ธ','โฆ๏ธ'], ['๐','๐'],
                ['๐ดโโ ๏ธ','๐ดโโ ๏ธ'], ['๐ด','๐ด'], ['๐ณ๏ธ','๐ณ๏ธ'], ['๐','๐'],
                ['๐ฉ','๐ฉ'], ['๐','๐'], ['โฃ๏ธ','โฃ๏ธ'], ['โข๏ธ','โข๏ธ']]
        this.chosenCards = []
        this.qtdeCardPorLevel = 4
        this.level = 1
        this.flip = 2
    }

    shuffle() { // distribuir e embaralhar cartas
        this.chosenCards = []
        let count = 0
        let valueRandom

        while (count < this.qtdeCardPorLevel / 2) { // escolher cartas disponรญveis randomicamente
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