- Vuejs

The task is to implement a classic memory game using Vuejs.

  -	The board is n-by-n, where n is your choosing (minimum 4).
  -	The deck contains unique pairs of cards (for a board of `n*n`, we need `n*n/2` pairs of cards). You can select the "theme" (e.g., places, cars, logos, etc.).
  - Rules of the game:
    *	Cards are laid out in a grid face down.
    * Two players take turns.
    * Player flips a pair of cards over. If the cards match, they stay flipped over (or disappear), the player scores one point, and gets a bonus turn.
    *	The game is over when all matches are found.
  - Card grid should be randomized for each game.
  -	Use some animation or effect for flipping the cards. 
    Check out [CSS transition](https://www.w3schools.com/css/css3_transitions.asp), [CSS 2D transform](https://www.w3schools.com/css/css3_2dtransforms.asp),
    [CSS 3D transform](https://www.w3schools.com/css/css3_3dtransforms.asp) and the example below.
  - Count and show on the screen the total number of flips and each players score
  - Show in the end which player won.
  - Allow to start a new game after finishing, without refreshing the page.
  - Use Vue.js: All, or most of the application should live inside a vue.js application. A good indicator that you do things right is, if you do not use `document` in your javascript.

The `samples/` folder in your GitHub repository contains some example screenshots. Note that the appearance is left to you, it doesn’t have to look the same. 


