function isFull(gameboard) {
	return !Object.values(gameboard).includes('');
}

export default isFull;
