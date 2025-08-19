// Keeps track of whose turn it is (X always starts)
let activePlayer = 'X';

// Stores all selected squares to check for wins or ties
let selectedSquares = [];

// Prevents further moves after the game ends
let gameOver = false;

// Function to place X or O in a square when clicked
function placeXOro(squareNumber) {
    // Only allow placing if the square is empty and the game is not over
    if (!selectedSquares.some(e => e.includes(squareNumber)) && !gameOver) {
        let select = document.getElementById(squareNumber);

        // Set the background image depending on the active player
        if (activePlayer == 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // Add move to the array for win/tie checking
        selectedSquares.push(squareNumber + activePlayer);

        // Check if the current move caused a win
        checkWinConditions();

        // Check for tie: if all squares are filled and no winner
        if (!gameOver && selectedSquares.length === 9) {
            setTimeout(() => {
                alert("It's a tie!");
                resetGame();
            }, 500);
        }

        // Switch active player
        activePlayer = (activePlayer === 'X') ? 'O' : 'X';

        // If computer's turn and game not over, make a move
        if (activePlayer === 'O' && !gameOver) {
            disableClick();
            setTimeout(computersTurn, 500);
        }
        return true;
    }
    return false;
}

// Function for computer to make a random move
function computersTurn() {
    let success = false;
    let pickASquare;
    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXOro(pickASquare)) success = true;
    }
}

// Temporarily disables clicks to prevent multiple moves during computer turn
function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(() => { document.body.style.pointerEvents = 'auto'; }, 500);
}

// Plays audio (like the winning sound)
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

// Helper function to check if selectedSquares array contains all three values
function arrayIncludes(a,b,c){
    return selectedSquares.includes(a) && selectedSquares.includes(b) && selectedSquares.includes(c);
}

// Checks all possible win conditions
function checkWinConditions() {
    // X wins
    if(arrayIncludes('0X','1X','2X')) { drawWinLine(101,101,507,101); gameOver=true; }
    if(arrayIncludes('3X','4X','5X')) { drawWinLine(101,304,507,304); gameOver=true; }
    if(arrayIncludes('6X','7X','8X')) { drawWinLine(101,507,507,507); gameOver=true; }
    if(arrayIncludes('0X','3X','6X')) { drawWinLine(101,101,101,507); gameOver=true; }
    if(arrayIncludes('1X','4X','7X')) { drawWinLine(304,101,304,507); gameOver=true; }
    if(arrayIncludes('2X','5X','8X')) { drawWinLine(507,101,507,507); gameOver=true; }
    if(arrayIncludes('6X','4X','2X')) { drawWinLine(101,507,507,101); gameOver=true; }
    if(arrayIncludes('0X','4X','8X')) { drawWinLine(101,101,507,507); gameOver=true; }

    // O wins
    if(arrayIncludes('0O','1O','2O')) { drawWinLine(101,101,507,101); gameOver=true; }
    if(arrayIncludes('3O','4O','5O')) { drawWinLine(101,304,507,304); gameOver=true; }
    if(arrayIncludes('6O','7O','8O')) { drawWinLine(101,507,507,507); gameOver=true; }
    if(arrayIncludes('0O','3O','6O')) { drawWinLine(101,101,101,507); gameOver=true; }
    if(arrayIncludes('1O','4O','7O')) { drawWinLine(304,101,304,507); gameOver=true; }
    if(arrayIncludes('2O','5O','8O')) { drawWinLine(507,101,507,507); gameOver=true; }
    if(arrayIncludes('6O','4O','2O')) { drawWinLine(101,507,507,101); gameOver=true; }
    if(arrayIncludes('0O','4O','8O')) { drawWinLine(101,101,507,507); gameOver=true; }
}

// Canvas setup for drawing winning lines
const canvas = document.getElementById('win-lines');
const c = canvas.getContext('2d');

// Draws the winning line on the canvas with animation
function drawWinLine(xStart, yStart, xEnd, yEnd) {
    let x = xStart;
    let y = yStart;

    function animateLine() {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.beginPath();
        c.moveTo(xStart,yStart);
        c.lineTo(x,y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70,255,33,0.8)';
        c.stroke();

        x += (xEnd - xStart)/20;
        y += (yEnd - yStart)/20;

        if (Math.abs(x - xEnd) > 1 || Math.abs(y - yEnd) > 1) {
            requestAnimationFrame(animateLine);
        } else {
            // Final line to ensure visibility
            c.beginPath();
            c.moveTo(xStart,yStart);
            c.lineTo(xEnd,yEnd);
            c.lineWidth = 10;
            c.strokeStyle = 'rgba(70,255,33,0.8)';
            c.stroke();

            audio('./media/win.mp3');
            setTimeout(resetGame,1500);
        }
    }

    animateLine();
}

// Resets the game after a win or a tie
function resetGame() {
    // Loop through each square and clear the X or O
    for(let i=0;i<9;i++){
        document.getElementById(String(i)).style.backgroundImage='';
    }
    // Clear the selected squares array
    selectedSquares=[];
    // Reset the active player
    activePlayer='X';
    // Reset game over flag
    gameOver=false;
    // Clear the winning line from the canvas
    c.clearRect(0,0,canvas.width,canvas.height);
}

