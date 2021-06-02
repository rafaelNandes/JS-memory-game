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
    
    createCardsFromTechs: function(techs){
        this.cards = [];
    
        //receive pairs of arrays for each card
        for(let tech of this.techs){
            this.cards.push(this.createPairFromTech(tech));
        }
    
        return this.cards.flatMap(pair => pair); //makes all pairs as a single array
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
    }
}