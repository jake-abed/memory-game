'use strict';

const shuffleArray = (arr) => {
    const shuffledArray = [...arr];
    return shuffledArray.sort((a, b) => 0.5 - Math.random());
}

export {
    shuffleArray
}
