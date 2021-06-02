let game = {
    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],
    cards: null,
    
    createCardsFromTechs: function(){
        this.cards = [];
    
        //receive pairs of arrays for each card
        for(let tech of this.techs){
            this.cards.push(this.createPairFromTech(tech));
        }
    
        this.cards = this.cards.flatMap(pair => pair); //makes all pairs as a single array
        this.shuffleCards();
        return this.cards;
    },
    
    //Duplicate each pair
    createPairFromTech: function(tech){
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false    
        },{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }]
    },
    
    //Generate an ID from each card
    createIdWithTech: function(tech){
        return tech + parseInt(Math.random() * 1000);
    },

    //Shuffle the cards in the array
    shuffleCards: function(cards){
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while(currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
        }
    },

//card match check
    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function(id){
        let card = this.cards.filter(card => card.id === id)[0];

        if (card.flipped || this.lockMode){
            return false;
        }

        if(!this.firstCard){
            this.firstCard = card;
            return true;
        }else {
            this.secondCard = card;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function(){
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    }
}