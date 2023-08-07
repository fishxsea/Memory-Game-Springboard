const squares = document.querySelectorAll('.square')
const restart = document.querySelector('#restart')
const container = document.querySelector('#container')
const score = document.querySelector('.score')
const grid = document.querySelector('.grid-container')

let foundPairs = 0; // End game on 8
let activeCards = []; // Tracks actively clicked cards
let activeColors = [];
let clicks = 0


const colors = ['#8c00ff', '#33005e', '#00c3ff', '#7fe1ff', '#ff00bf', '#ff67d9', '#ffee00', '#fff9a5', '#8c00ff', '#33005e', '#00c3ff', '#7fe1ff', '#ff00bf', '#ff67d9', '#ffee00', '#fff9a5']

// Shuffle array for random color assignment
function shuffleCells(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

restart.addEventListener('click', () => {
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
      grid.style.backgroundColor = 'rgb(11, 1, 29)'
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
    document.body.focus()
    })
    
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

