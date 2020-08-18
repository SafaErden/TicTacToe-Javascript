const board = document.getElementById('board')
const newRound = document.getElementById('newRound')
const xScore = document.getElementById('xScore')
const oScore = document.getElementById('oScore')
const cells = document.querySelectorAll('.hoverable');
const createPlayer = document.querySelector('#createPlayer');
const pName = document.getElementById('name');
const pLetter = document.getElementById('letter');
const letterOptions = document.getElementById('letterOptions');
const letterInfo = document.getElementById('letterInfo');
const createPlayers = document.getElementById('createPlayers');
const reloader = document.querySelector('#reloader');
const nextRound = document.querySelector('#nextRound');
const winnerName = document.getElementById('winnerName');
const playerName = document.getElementById('playerName');
const player_1 = document.getElementById('player1');
const player_2 = document.getElementById('player2');


export {
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
};