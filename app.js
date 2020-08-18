// window.onload = () => {
const scoreBoard = () => {
	let x = 0;
	let o = 0;

	const update = (winner) => {
		if (winner == 'X') {
			x += 1;
			document.getElementById('xScore').innerText = x;
		} else {
			o += 1;
			document.getElementById('oScore').innerText = o;
		}
	};
	return { x, o, update };
};


document.getElementById('startGame').style.display = 'none';
document.getElementById('board').style.display = 'none';
document.getElementById('newRound').style.display = 'none';
// };
let scores = scoreBoard();

const cells = document.querySelectorAll('.hoverable');

let playerLetters = [];
let players = [];

const Player = (name, letter) => {
	let moves = [];
	const move = (cellNumber) => {
		moves.push(cellNumber);
	};
	return { name, letter, move };
};

var createPlayer = document.querySelector('#createPlayer');
createPlayer.addEventListener('click', (e) => {
	e.preventDefault();
	let playerName = document.getElementById('name').value;
	let playerLetter = document.getElementById('letter').value;

	if (playerLetters[0] == null) {
		document.getElementById('nameLabel').innerText = 'Player 2 Name: ';
		player1 = Player(playerName, playerLetter);
		players.push(player1);
		playerLetters.push(playerLetter);
		playerLetter[0] == 'X' ? (otherLetter = 'O') : (otherLetter = 'X');
		document.getElementById('letterOptions').style.display = 'none';
		document.getElementById(
			'letterInfo'
		).innerText = `Player 1 has chosen: ${player1.letter}, Player 2 will play with: ${otherLetter}`;
		document.getElementById('name').value = '';
	} else if (playerLetters[0] != null && playerLetters[1] == null) {
		playerLetter[0] == 'X' ? (otherLetter = 'O') : (otherLetter = 'X');
		player2 = Player(playerName, otherLetter);
		players.push(player2);
		playerLetters.push(otherLetter);
		document.getElementById('createPlayers').style.display = 'none';
		document.getElementById('startGame').style.display = '';
		document.getElementById('playerOne').innerText = player1.name;
		document.getElementById('playerTwo').innerText = player2.name;
		document.getElementById('oneLetter').innerText = player1.letter;
		document.getElementById('twoLetter').innerText = player2.letter;
	} else {
		return;
	}
});

let player1 = players[0];
let player2 = players[1];
let currentPlayer;

var startGamebtn = document.querySelector('#startGameButton');
startGamebtn.addEventListener('click', (e) => {
	e.preventDefault();
	document.getElementById('startGame').style.display = 'none';
	document.getElementById('board').style.display = '';
	
	currentPlayer = players[Math.floor(Math.random() * 2)]
	
	document.getElementById('playerName').innerText = currentPlayer.name;
	
	
});

cells.forEach((cell, index) => {
	cell.addEventListener('click', (e) => {
		currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1;
		e.currentTarget.innerText = currentPlayer.letter;
		currentPlayer.move(index);
		isWinner(currentPlayer.moves);
	})
})

// scoreBoard.updateScore(winner);

// console.log(randPlayer())
// const GameBoard = () => {
// 	let gameBoard = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// };

// const Game = (()=>{
const WINNING_ARRAY = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]];

function isWinner(arr) {
	WINNING_ARRAY.forEach((item) => {
		if (JSON.stringify(item) === JSON.stringify(arr)) {
			console.log("winner")
		} else {
			console.log("retry")
		}
	});
};

function gameOver() {
	document.getElementById('newRound').style.display = '';
}

function newRound() {
	scores.update()
}
	// return {currentPlayer, player1}
// })();

// Game.currentPlayer;
