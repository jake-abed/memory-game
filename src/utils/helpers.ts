'use strict'

const shuffleArray = (arr: Array<unknown>): Array<unknown> => {
	const shuffledArray = [...arr]
	return shuffledArray.sort((_a, _b) => 0.5 - Math.random())
}

export {
	shuffleArray
}
