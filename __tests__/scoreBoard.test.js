import ScoreBoard from '../scripts/scoreBoard.js';
import Player from '../scripts/player.js';

const scores = ScoreBoard();
const currentPlayer = Player('Phillip', 'X', 0);

test('Initialize the scoreboard with x is equal 0 and o is equal 0', () => {
	expect(scores.x).toBe(0);
	expect(scores.o).toBe(0);
	expect(scores.o).not.toBe(1);
});

test('Initialize the scoreboard with x is equal 0 and o is equal 0', () => {
	scores.update('X', currentPlayer);
	expect(currentPlayer.score).toBe(1);
});
