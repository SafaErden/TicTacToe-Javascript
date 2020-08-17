window.onload = () => {
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

	let scores = scoreBoard();
	// scores.update('X');
	// scores.update('X');
	// scores.update('O');
	// scores.update('X');
	// scores.update('O');
	// scores.update('X');
	// scores.update('O');
};
let playerLetters = [];
const Player = (name, letter) => {
	const move = (cellNumber) => {
		console.log(cellNumber, letter);
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
		playerLetters.push(playerLetter);
		playerLetter[0] == 'X' ? (otherLetter = 'O') : (otherLetter = 'X');
		document.getElementById('letterOptions').style.display = 'none';
		document.getElementById(
			'letterInfo'
		).innerText = `Player 1 has chosen: ${player1.letter}, Player 2 will play with: ${otherLetter}`;
		console.log(player1);
	} else if (playerLetters[0] != null && playerLetters[1] == null) {
		playerLetter[0] == 'X' ? (otherLetter = 'O') : (otherLetter = 'X');
		player2 = Player(playerName, otherLetter);
		playerLetters.push(otherLetter);
		console.log(player2);
	} else {
		return;
	}
});

// scoreBoard.updateScore(winner);

// const GameBoard = () => {
// 	let gameBoard = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// };

// const Game = () => {
// 	let player1 = new Player(name, letter);
// 	let player2 = new Player();

// 	function play(position) {
// 		if (!turn(this.name)) {
// 			return 'not your turn';
// 		} else if (valid(position)) {
// 			updateBoard(this.letter, position);
// 		} else {
// 			return 'please type a valid position';
// 		}
// 	}

// 	function updateBoard(letter, position) {
// 		/*some action*/
// 		if (isWinner()) {
// 			/* end game */
// 		} else {
// 			nextMove();
// 		}
// 	}

// 	function isWinner() {}
// };
