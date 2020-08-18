import {
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
} from "./dom.js";


board.style.display = "none";
newRound.style.display = "none";

let players = [];

const Player = (name, letter) => {
	let moves = [];
	const move = (cellNumber) => {
		moves.push(cellNumber);
	};
	const clearMoves = () => {
		while (moves.length > 0) {
			moves.pop();
		}
	};
	return { name, letter, move, moves, clearMoves };
};

createPlayer.addEventListener('click', (e) => {
	e.preventDefault();

	if (players.length == 0) {
		player1 = Player(pName.value, pLetter.value);
		players.push(player1);
		player_1.innerText = player1.name;
		letterInfo.innerText = `${player1.name} has chosen: ${player1.letter}, Player 2 will play with: ${player1.letter == 'X' ? 'O' : 'X'}`;
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
	}
	createPlayer.innerText = 'Start Game';
});

let player1 = players[0];
let player2 = players[1];
let currentPlayer;

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
	};
	return { x, o, update };
};

let scores = scoreBoard();


cells.forEach((cell, index) => {
	cell.addEventListener('click', () => {
		playerName.parentNode.style.display = 'none';
		currentPlayer == player1 ? (currentPlayer = player2) : (currentPlayer = player1);
		cell.innerText = currentPlayer.letter;
		currentPlayer.move(index);
		isWinner(currentPlayer.moves);
	});
});

const WINNING_ARRAY = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

var combine = function (a, min) {
	var fn = function (n, src, got, all) {
		if (n == 0) {
			if (got.length > 0) {
				all[all.length] = got;
			}
			return;
		}
		for (var j = 0; j < src.length; j++) {
			fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
		}
		return;
	};
	var all = [];
	fn(min, a, [], all);
	return all;
};

let permArr = [],
	usedChars = [];

function permute(input) {
	var i, ch;
	for (i = 0; i < input.length; i++) {
		ch = input.splice(i, 1)[0];
		usedChars.push(ch);
		if (input.length == 0) {
			permArr.push(usedChars.slice());
		}
		permute(input);
		input.splice(i, 0, ch);
		usedChars.pop();
	}
	return permArr;
}

function isWinner(arr) {
	let possibilities = [];
	combine(arr, 3).forEach((item) => {
		possibilities.push(permute(item));
	});
	if (arr.length > 2) {
		possibilities[0].forEach((moves) => {
			WINNING_ARRAY.forEach((item) => {
				if (JSON.stringify(item) === JSON.stringify(moves)) {
					gameOver();
					while (possibilities.length > 0) {
						possibilities.pop();
					}
				}
			});
		});
	}
}

function gameOver() {
	board.style.display = 'none';
	newRound.style.display = '';
	winnerName.innerHTML = currentPlayer.name;

	cells.forEach((cell) => {
		cell.innerHTML = '&nbsp;';
	});
	scores.update(currentPlayer.letter);
}

reloader.addEventListener('click', () => {
	location.reload();
});

nextRound.addEventListener('click', () => {
	player1.clearMoves();
	player2.clearMoves();
	board.style.display = '';
	newRound.style.display = 'none';
});
