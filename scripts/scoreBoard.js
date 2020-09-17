const ScoreBoard = () => {
  let x = 0;
  let o = 0;

  const update = (winner, currentPlayer) => {
    if (winner === 'X') {
      x += 1;
      currentPlayer.updateScore(x);
    } else {
      o += 1;
      currentPlayer.updateScore(o);
    }
  };
  return { x, o, update };
};

export default ScoreBoard;
