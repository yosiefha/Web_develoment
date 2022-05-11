// let cardC = {
//     props: ["card"],
//     template: /*html*/`
//     <div class="outer" v-on:click="$emit('flip')" 
//         v-bind:style="{ visibility: card.matched? 'hidden': 'visible'}"
//         >
//         <div class="card front" v-bind:style="{ transform: card.flipped? 'rotateY(180deg)': 'none' }">
//             <img v-bind:src="card.img">
//         </div>
//         <div class="card back" v-bind:style="{ transform: card.flipped? 'rotateY(180deg)': 'none' }"></div>
//     </div>
//     `
// }



// let app = Vue.createApp({
//   el: '#app',
//   data: {
//     ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
//     suits: ['♥','♦','♠','♣'],
//     cards: [],
//   }, 
//   created() {
//     this.displayInitialDeck();
//   }, 

//     methods: {
//         displayInitialDeck() {
//             let id = 1;
//             this.cards = [];

//             for( let s = 0; s < this.suits.length; s++ ) {
//                 for( let r = 0; r < this.ranks.length; r++ ) {
//                 let card = {
//                     id: id,
//                     rank: this.ranks[r],
//                     suit: this.suits[s]
//                 }
//                 this.cards.push(card);
//                 id++;
//                 }
//             }
//         },
//         // flip(card){
//         //     if (!card.matched){
//         //         card.flipped = true;
//         //     }
//         //     //find out if matched. otherwise
//         //     this.flipBack(card);
//         // },
//         // flipBack(card){
//         //     // flip the card back, after some timeout
//         //     setTimeout(function(){
//         //         card.flipped = false;
//         //     },1000);
//         // }
//     }
// });
// app.component('card',cardC);
// app.mount("#app");

new Vue({
    el: '#app',
    data: {
      ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
      suits: ['♥','♦','♠','♣'],
      cards: [],
      suitColor: {
        '♠': 'black',
        '♣': 'black',
        '♦': 'red',
        '♥': 'red',
      },
      shuffleSpeed: 'shuffleMedium',
      shuffleTypes: ['Slow', 'Medium', 'Fast'],
      isDeckShuffled: false,
      shuffleCount: 0,
    },
    created() {
      this.displayInitialDeck();
    },  
    methods: {
      displayInitialDeck() {
        let id = 1;
        this.cards = [];
  
        for( let s = 0; s < this.suits.length; s++ ) {
          for( let r = 0; r < this.ranks.length; r++ ) {
            let card = {
              id: id,
              rank: this.ranks[r],
              suit: this.suits[s]
            }
            this.cards.push(card);
            id++;
          }
        }
  
        this.isDeckShuffled = false;
        this.shuffleCount = 0;
      },
      shuffleDeck() {        
        for(let i = this.cards.length - 1; i > 0; i--) {
          let randomIndex = Math.floor(Math.random() * i);
          
          let temp = this.cards[i];
          Vue.set(this.cards, i, this.cards[randomIndex]);
          Vue.set(this.cards, randomIndex, temp);
        }
  
        this.isDeckShuffled = true;
        this.shuffleCount = this.shuffleCount + 1;
      }
    },
  });
  app.mount("#app");