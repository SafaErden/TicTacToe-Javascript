const GameLogic = (() => {
	function isFull(gameboard) {
		return !Object.values(gameboard).includes('');
	}

	function patternWins(pattern, symbol, gameboard) {
		for (let j = 0; j < pattern.length; j += 1) {
			const gameboardIndex = pattern[j];
			if (gameboard[gameboardIndex] !== symbol) {
				return false;
			}
		}
		return true;
	}

	function isWinner(winningArray, gameboard) {
		for (let index = 0; index < winningArray.length; index += 1) {
			const element = winningArray[index];
			if (patternWins(element, 'X', gameboard)) {
				return 1;
			}
			if (patternWins(element, 'O', gameboard)) {
				return 2;
			}
		}
		return 0;
	}
	return { isFull, patternWins, isWinner };
})();

export default GameLogic;
