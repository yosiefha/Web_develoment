let app = new Vue({
    el: '#app',
    finish: false,
    start: false,
    render:false,
    result:"Intiallly",
    turns: 0,
//     data: () => ({ render: false }),
   

    totalTime: {
        minutes: 0,
        seconds: 0,
    },

    computed:{
        sec(){
            if(this.totalTime.seconds < 10){
                return '0'+this.totalTime.seconds;
            }
            return this.totalTime.seconds;
        },
        min(){
            if(this.totalTime.minutes < 10){
                return '0'+this.totalTime.minutes;
            }
            return this.totalTime.minutes;
        }
    },
    data:{
           memoryCards: [],
           start: false,
           turns: 0,
           totalTime: {
           minutes: 0,
           seconds: 0,
           
           },
           
           players:{
               player1:false,
               player2:false,
               player1_score:0,
               player2_score:0,
           },
            cards: [
                {
                    name: 'Apple',
                    img: 'images/apple.jpg',

                },
                {
                    name: 'Banana',
                    img: 'images/banana.gif',
 
                },
                {
                    name: 'Orange',
                    img: 'images/orange.gif',

                },
                {
                    name: 'Pineapple',
                    img: 'images/pineapple.gif',

                },
                {
                    name: 'kiwi',
                    img: 'images/kiwi.jpg',

                },
                {
                    name: 'grapes',
                    img: 'images/grapes.jpg',
 
                },
                {
                    name: 'Strawberry',
                    img: 'images/strawberry.jpg',

                },
                {
                    name: 'Persimon',
                    img: 'images/persimon.jpg',

                },
               
            ],
            flippedCards: [],
            finish: false,
    },

    created(){
        this.cards.forEach((card) => {
            Vue.set(card,'isFlipped',false)
            Vue.set(card,'isMatched',false);
        });
       
       
        this. memoryCards = _.shuffle(this.memoryCards.concat(_.cloneDeep(this.cards), _.cloneDeep(this.cards)));
        this.reset();
    },
    
    methods:{
        flipCard(card){
            if(card.isMatched || card.isFlipped || this.flippedCards.length === 2)
            return;
            if(!this.start){
                this._startGame();
            };
            card.isFlipped = true;

            if(this.flippedCards.length < 2)
                this.flippedCards.push(card);
            if(this.flippedCards.length === 2)    
                this._match(card);
             },

         _match(card){
            this.turns++;
            if(this.flippedCards[0].name === this.flippedCards[1].name){
               
                setTimeout(() => {
                    this.flippedCards.forEach(card => card.isMatched = true);
                    this.flippedCards = [];
                    if(this.players.player1===true){
                        this.players.player1_score++;
                       
                    }
                    if(this.players.player2===true){
                        this.players.player2_score++;
                       
                    }
                    //All cards matched ?
                    if(this.memoryCards.every(card => card.isMatched === true)){
                        clearInterval(this.interval);
                        this.finish = true;
                        
                        if(this.players.player1_score>this.players.player2_score)
                             
                               alert(" congrats Player1 won!!!")
                        if(this.players.player1_score<this.players.player2_score)                              
                               alert(" congrats Player2 won!!!")
                        if(this.players.player1_score===this.players.player2_score) {
                            alert("It is tie!!")
                        }
                               //this.render=true;
                    }

                }, 400);
            }
            else{                

                setTimeout(() => {
                    this.flippedCards.forEach((card) => {card.isFlipped = false});
                    this.flippedCards = [];
                    if(this.players.player1===true){
                        this.players.player1=false;
                        this.players.player2=true;
                        alert("Player2 Turn");
                        return;
                    }
                    if(this.players.player2===true){
                        this.players.player2=false;
                        this.players.player1=true;
                        alert("Player1 Turn"); 
                        return;
                    }
                }, 800);
                
            }
            
         },

        _startGame(){
            this._tick();
            this.interval = setInterval(this._tick,1000);
            this.start = true;
            this.players.player1=true;
           
            this.$emit("Game starting");
           

        },
        
        _tick(){
            if(this.totalTime.seconds !== 59){
                 this.totalTime.seconds++;
                 return
             }
        
             this.totalTime.minutes++;
             this.totalTime.seconds = 0;
        },
        reset(){
            clearInterval(this.interval);
        
            this.cards.forEach((card) => {
                Vue.set(card, 'isFlipped',false);
                Vue.set(card, 'isMatched',false);
            });
        
            setTimeout(() => {  
                this.memoryCards = [];
                this.memoryCards = _.shuffle(this.memoryCards.concat(_.cloneDeep(this.cards), _.cloneDeep(this.cards)));
                this.totalTime.minutes = 0;
                this.totalTime.seconds = 0;
                this.start = false;
                this.finish = false;
                this.turns = 0;
                this.flippedCards = [];
                   
                }, 600);
            
        },
    } 
});

