//call the function to run the game
tictactoe();
function tictactoe(){
  let turn = 'X';
  let playing = true;
  //assign restart button to a variable
  const restartBtn = document.querySelector('button');
  //assign info document element to a variable
  const info = document.querySelector('.info');
  //let user know whose turn it is
  info.innerText = `It is ${turn}'s turn.`;
  //assign cells to an array called 'cells'
  const cells = document.querySelectorAll('.cell');
  
  //if game is being played
  if(playing){
    //for each cell
    cells.forEach((cell)=>{
    //add a click event listener
    cell.addEventListener('click', cellClick);
    //on click
    function cellClick(){
      //verify that the cell has not been claimed
      if(cell.innerText){
        info.innerText = 'Already taken. Try again.';
      }else{
        //have the inner text be whose turn it is
        cell.innerText = turn;
        //add this to the class list for styling 
        //cell.classList.add(turn);   
        checkWinner();   
        };    
      };   
    });
  }else{
    info.innerText = `Would you like to restart and play a new game?`;
    restartBtn.style.display = 'block';
    restartBtn.addEventListener('click', restart);
  }
 
  //check if there is a winner this turn
    function checkWinner(){
      let winner = false;
      //removed !== null bc does not include undefined or 0. Instead, checked if truthy
      //changed '.value' to '.innerText' which worked better for some reason?
      if(cells[0].innerText && 
         cells[0].innerText === cells[1].innerText &&
         cells[0].innerText === cells[2].innerText){
        winner = true;
      }else if(cells[3].innerText && 
         cells[3].innerText === cells[4].innerText &&
         cells[3].innerText === cells[5].innerText){
        winner = true;
      }else if(cells[6].innerText && 
         cells[6].innerText === cells[7].innerText &&
         cells[6].innerText === cells[8].innerText){
        winner = true;
      }else if(cells[0].innerText && 
         cells[0].innerText === cells[3].innerText &&
         cells[0].innerText === cells[6].innerText){
        winner = true;
      }else if(cells[1].innerText && 
         cells[1].innerText === cells[4].innerText &&
         cells[1].innerText === cells[7].innerText){
        winner = true;
      }else if(cells[2].innerText && 
         cells[2].innerText === cells[5].innerText &&
         cells[2].innerText === cells[8].innerText){
        winner = true;
      }else if(cells[0].innerText && 
              cells[0].innerText === cells[4].innerText &&
              cells[0].innerText === cells[8].innerText){
        winner = true;
      }else if(cells[2].innerText && 
               cells[2].innerText === cells[4].innerText &&
               cells[2].innerText === cells[6].innerText){
        winner = true;
      }
      if(winner){
        info.innerText = `Winner is ${turn}. Would you like to restart and play a new game?`;
        playing = false;
        restartBtn.style.display = 'block';
        restartBtn.addEventListener('click', restart);
  
      }else if( //check if it's draw 
        cells[0].innerText  && 
        cells[1].innerText && 
        cells[2].innerText  &&
        cells[3].innerText  &&
        cells[4].innerText &&
        cells[5].innerText &&
        cells[6].innerText  &&
        cells[7].innerText  &&
        cells[8].innerText ){
        playing = false;
        restartBtn.style.display = 'block';
        restartBtn.addEventListener('click', restart);
        info.innerText = `It's a DRAW!!!`
        }else{
           //change whose turn it is
          turn === 'X'? turn = 'O' : turn = 'X';
          //update info section with correct turn
          info.innerText = `It is ${turn}'s turn.`;
        }
    }
  
  //restart game
  function restart(){
    playing = true;
    turn ='X';
    info.innerText = `It is ${turn}'s turn.`;
    cells.forEach(cell=> {
      cell.innerText = '';
     // cell.classList.remove(...cell.classList);
    //  cell.classList.add('cell');
    })
  }
};


