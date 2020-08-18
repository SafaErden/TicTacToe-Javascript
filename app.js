import {
	board,
	newRound,
	xScore,
	oScore,
	cells,
	createPlayer,
	pName,
	pLetter,
	nameLabel,
	letterOptions,
	letterInfo,
	createPlayers,
	startGame,
	playerOne,
	playerTwo,
	oneLetter,
	twoLetter,
	reloader,
	nextRound,
	winnerName,
	startGamebtn,
	playerName
} from "dom";


startGame.style.display = 'none';
board.style.display = 'none';
newRound.style.display = 'none';


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


let playerLetters = [];
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
	let playerName = pName.value;
	let playerLetter = pLetter.value;

	if (playerLetters[0] == null) {
		nameLabel.innerText = 'Player 2 Name: ';
		player1 = Player(playerName, playerLetter);
		players.push(player1);
		playerLetters.push(playerLetter);
		playerLetter[0] == 'X' ? (otherLetter = 'O') : (otherLetter = 'X');
		letterOptions.style.display = 'none';
		letterInfo.innerText = `Player 1 has chosen: ${player1.letter}, Player 2 will play with: ${otherLetter}`;
		playerName = '';
	} else if (playerLetters[0] != null && playerLetters[1] == null) {
		playerLetter[0] == 'X' ? (otherLetter = 'O') : (otherLetter = 'X');
		player2 = Player(playerName, otherLetter);
		players.push(player2);
		playerLetters.push(otherLetter);

		createPlayers.style.display = 'none';
		startGame.style.display = '';
		playerOne.innerText = player1.name;
		playerTwo.innerText = player2.name;
		oneLetter.innerText = player1.letter;
		twoLetter.innerText = player2.letter;

	} else {
		return;
	}
});

let player1 = players[0];
let player2 = players[1];
let currentPlayer;

startGamebtn.addEventListener('click', (e) => {
	e.preventDefault();
	startGame.style.display = 'none';
	board.style.display = '';

	currentPlayer = players[Math.floor(Math.random() * 2)];

	playerName.innerText = currentPlayer.name;
});

cells.forEach((cell, index) => {
	cell.addEventListener('click', (e) => {
		currentPlayer == player1 ? (currentPlayer = player2) : (currentPlayer = player1);
		e.currentTarget.innerText = currentPlayer.letter;
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
