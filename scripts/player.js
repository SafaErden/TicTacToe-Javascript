const Player = (name, letter, score) => {
  function updateScore(score) {
    this.score = score;
  }
  return {
    name, letter, updateScore, score,
  };
};

export default Player;
