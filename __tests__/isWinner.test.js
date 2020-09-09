import GameLogic from '../scripts/gameLogic.js';

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

let winnerBoard = {
	0: 'X',
	1: 'X',
	2: 'X',
	3: 'O',
	4: 'O',
	5: '',
	6: '',
	7: '',
	8: ''
};

test('it returns true if the given pattern is one of the winner pattern in the winning array', () => {
	expect(GameLogic.patternWins(WINNING_ARRAY[0], 'X', winnerBoard)).toBe(true);
});

test('Returns 1 if x is winner', () => {
	expect(GameLogic.isWinner(WINNING_ARRAY, winnerBoard)).toBe(1);
});
