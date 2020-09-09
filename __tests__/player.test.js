import Player from '../scripts/player';

const player = Player('Safa', 'X', 0);
test('initializes a player wtih name, letter and scrore', () => {
  expect(player.name).toBe('Safa');
  expect(player.letter).toBe('X');
  expect(player.score).toBe(0);
});
