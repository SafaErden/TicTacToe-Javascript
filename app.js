window.onload = () => {
	const scoreBoard = () => {
		let x = 0;
		let o = 0;

		const update = (winner) => {
			if (winner == 'X') {
				x += 1;
				console.log(x);
				document.getElementById('xScore').innerText = x;
			} else {
				o += 1;
				console.log(o);
				document.getElementById('oScore').innerText = o;
			}
		};
		return { x, o, update };
	};

	let scores = scoreBoard();
	scores.update('X');
	scores.update('X');
	scores.update('O');
	scores.update('X');
	scores.update('O');
	scores.update('X');
	scores.update('O');
};

// scoreBoard.updateScore(winner);
// const Player = (name, letter) => {
// 	const letter = letter;
// 	const name = name;
// };

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
