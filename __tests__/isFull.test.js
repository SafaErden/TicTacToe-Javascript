import GameLogic from '../scripts/gameLogic.js';

let gameBoard1 = {
	0: '',
	1: '',
	2: '',
	3: '',
	4: '',
	5: '',
	6: '',
	7: '',
	8: ''
};
let gameBoard2 = {
	0: 'x',
	1: 'x',
	2: 'x',
	3: 'o',
	4: 'o',
	5: 'o',
	6: 'x',
	7: 'x',
	8: 'x'
};

test('it returns false if there are any empty spaces on the board', () => {
	expect(GameLogic.isFull(gameBoard1)).toBe(false);
});

test("it returns true if there isn't any empty space on the board", () => {
	expect(GameLogic.isFull(gameBoard2)).toBe(true);
});
