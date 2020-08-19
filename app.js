import {
	img,
	board,
	newRound,
	xScore,
	oScore,
	cells,
	createPlayer,
	pName,
	pLetter,
	letterOptions,
	letterInfo,
	createPlayers,
	reloader,
	nextRound,
	winnerName,
	playerName,
	player_1,
	player_2
} from './dom.js';

board.style.display = 'none';
newRound.style.display = 'none';

let players = [];
const WINNING_ARRAY = [
	[ 0, 1, 2 ],
	[ 3, 4, 5 ],
	[ 6, 7, 8 ],
	[ 0, 3, 6 ],
	[ 1, 4, 7 ],
	[ 2, 5, 8 ],
	[ 0, 4, 8 ],
	[ 2, 4, 6 ]
];
let gameBoard = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' };
let currentPlayer;

const Player = (name, letter) => {
	return { name, letter };
};

createPlayer.addEventListener('click', (e) => {
	e.preventDefault();
	if (pName.value.length > 2) {
		if (players.length == 0) {
			player1 = Player(pName.value, pLetter.value);
			players.push(player1);
			player_1.innerText = player1.name;
			letterInfo.innerText = `${player1.name} has chosen: ${player1.letter}, Player 2 will play with: ${player1.letter ==
			'X'
				? 'O'
				: 'X'}`;
			pName.value = '';
			letterOptions.style.display = 'none';
		} else {
			let otherLetter = player1.letter == 'X' ? 'O' : 'X';
			player2 = Player(pName.value, otherLetter);
			players.push(player2);
			player_2.innerText = player2.name;
			createPlayers.style.display = 'none';
			board.style.display = '';
			playerName.innerText = player1.name;
			currentPlayer = player1;
		}
		createPlayer.innerText = 'Start Game';
	} else {
		alert('Please type a valid name which has at least 3 letters!');
	}
});

let player1 = players[0];
let player2 = players[1];

const scoreBoard = () => {
	let x = 0;
	let o = 0;

	const update = (winner) => {
		if (winner == 'X') {
			x += 1;
			xScore.innerText = x;
		} else {
			o += 1;
			oScore.innerText = o;
		}
		return;
	};
	return { x, o, update };
};

let scores = scoreBoard();

cells.forEach((cell, index) => {
	cell.addEventListener('click', () => {
		if (gameBoard[index] == '') {
			gameBoard[index] = currentPlayer.letter;
			cell.innerText = gameBoard[index];
			currentPlayer == player1 ? (currentPlayer = player2) : (currentPlayer = player1);
			playerName.innerText = currentPlayer.name;

			if (isWinner(gameBoard) > 0) {
				currentPlayer == player2 ? scores.update(player1.letter) : scores.update(player2.letter);

				gameOver();
			}
			if (isFull()) {
				gameOver(true);
			}
		}
	});
});

function patternWins(pattern, symbol) {
	for (let j = 0; j < pattern.length; j++) {
		const gameboardIndex = pattern[j];
		if (gameBoard[gameboardIndex] != symbol) {
			return false;
		}
	}
	return true;
}

function isWinner() {
	for (let index = 0; index < WINNING_ARRAY.length; index++) {
		const element = WINNING_ARRAY[index];
		if (patternWins(element, 'X')) {
			return 1;
		}
		if (patternWins(element, 'O')) {
			return 2;
		}
	}
}

function isFull() {
	return !Object.values(gameBoard).includes('');
}

function gameOver(draw = false) {
	board.style.display = 'none';
	newRound.style.display = '';
	currentPlayer == player2 ? (winnerName.innerHTML = player1.name) : (winnerName.innerHTML = player2.name);

	cells.forEach((cell) => {
		cell.innerHTML = '&nbsp;';
	});
	gameBoard = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' };
	if (draw == true) {
		img.src = 'assets/draw.jpg';
		winnerName.parentNode.style.display = 'none';
	}
}

nextRound.addEventListener('click', () => {
	board.style.display = '';
	newRound.style.display = 'none';
	img.src = 'assets/congrats.jpg';
	winnerName.parentNode.style.display = '';
});

reloader.addEventListener('click', () => {
	location.reload();
});
