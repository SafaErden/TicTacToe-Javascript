const board = document.getElementById('board')
const newRound = document.getElementById('newRound')

const xScore = document.getElementById('xScore')
const oScore = document.getElementById('oScore')

const cells = document.querySelectorAll('.hoverable');
const createPlayer = document.querySelector('#createPlayer');

const pName = document.getElementById('name');
const pLetter = document.getElementById('letter');
const nameLabel = document.getElementById('nameLabel');
const letterOptions = document.getElementById('letterOptions');
const letterInfo = document.getElementById('letterInfo');
const createPlayers = document.getElementById('createPlayers');
const startGame = document.getElementById('startGame');
const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');
const oneLetter = document.getElementById('oneLetter');
const twoLetter = document.getElementById('twoLetter');
const reloader = document.querySelector('#reloader');
const nextRound = document.querySelector('#nextRound');
const winnerName = document.getElementById('winnerName');
const startGamebtn = document.querySelector('#startGameButton');
const playerName = document.getElementById('playerName');


export {
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
}