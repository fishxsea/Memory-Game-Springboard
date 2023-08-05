const squares = document.querySelectorAll('.square')
const start = document.querySelector('#start')
const container = document.querySelector('.container')
const restart = document.querySelector('#restart')
const score = document.querySelector('.score')

let foundPairs = 0; // End game on 8
let activeCards = []; // Tracks actively clicked cards
let activeColors = [];
let clicks = 0

const colors = ['#7400f9', '#00b2f9', '#4f00a8', '#671fb9', '#05789b', '#2e0085', '#00f9cf', '#f900f9', '#7400f9', '#00b2f9', '#4f00a8', '#671fb9', '#05789b', '#2e0085', '#00f9cf', '#f900f9']

// Shuffle array for random color assignment
function shuffleCells(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

start.addEventListener('click', () => {
  location.reload(true)
})

shuffleCells(colors)
  squares.forEach(function(cell, index){
    cell.addEventListener('click', () => {
      cell.style.setProperty('--color', colors[index])
      cell.classList.toggle('disabled');
      cell.classList.toggle('active');
      activeCards.push(cell);
      activeColors.push(cell.style.cssText)
      clicks++
      score.innerText = clicks
      if (activeColors[0] === activeColors[1]) {
        activeColors = [];
        activeCards = [];
        foundPairs++
      }

      if (foundPairs === 8) {
        score.style.color = 'white'
      }
      
      if (activeCards.length === 2 && activeColors[0] !== activeColors[1]) {
        container.classList.add('unclickable');
        setTimeout(function() {
          container.classList.remove('unclickable');
          activeCards[0].classList.remove('active');
          activeCards[1].classList.remove('active');
          activeCards[0].classList.remove('disabled');
          activeCards[1].classList.remove('disabled');
          activeCards = [];
          activeColors = [];
        }, 1000)
      }
    })
    cell.removeEventListener('click', () => {})
  })







































// function game() {
//   console.log(squares.length)
//   console.log(activeCards)
//   console.log(colors)

//   squares.forEach(function(cell, index){
    
//     // Assign colors to cards
//     // Card click logic
//     cell.addEventListener('click', () => {
//       cell.style.setProperty('--color', colors[index])
//       cell.classList.toggle('disabled');
//       cell.classList.toggle('active');
//       activeCards.push(cell);
//       activeColors.push(cell.style.cssText)
//       console.log(activeCards)
//       console.log(cell.style.cssText)
//       if (activeColors[0] === activeColors[1]) {
//         activeColors = [];
//         activeCards = [];
//         foundPairs++
//       }

//       if (activeCards.length === 2 && activeColors[0] !== activeColors[1]) {
//         container.classList.add('unclickable');
//         setTimeout(function() {
//           container.classList.remove('unclickable');
//           activeCards[0].classList.remove('active');
//           activeCards[1].classList.remove('active');
//           activeCards[0].classList.remove('disabled');
//           activeCards[1].classList.remove('disabled');
//           activeCards = [];
//           activeColors = [];
//         }, 700)
//       }
//     })
//   })
// }

