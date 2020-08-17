const Player = (name, letter) => {
	const letter = letter;
	const name = name;
};

const GameBoard = () => {
	let gameBoard = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
};

const Game = () => {
	let player1 = new Player(name, letter);
	let player2 = new Player();

	function play(position) {
		if (!turn(this.name)) {
			return 'not your turn';
		} else if (valid(position)) {
			updateBoard(this.letter, position);
		} else {
			return 'please type a valid position';
		}
	}

	function updateBoard(letter, position) {
		/*some action*/
		if (isWinner()) {
			/* end game */
		} else {
			nextMove();
		}
	}

	function isWinner() {}
};
