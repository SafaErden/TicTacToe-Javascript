import ScoreBoard from '../scripts/scoreBoard.js';

const scores = ScoreBoard();

test('Initialize the scoreboard with x is equal 0 and o is equal 0', () => {
	expect(scores.x).toBe(0);
	expect(scores.o).toBe(0);
	expect(scores.o).not.toBe(1);
});

test('Initialize the scoreboard with x is equal 0 and o is equal 0', () => {
	scores.update('X');
	expect(scores.x).toBe(1);
	expect(scores.o).toBe(0);
});
