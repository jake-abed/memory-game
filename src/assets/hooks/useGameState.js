import { useState } from 'react';

export default function useGameState() {
    const [gameState, setGameState] = useState({
        score: 0,
        gameOver: false,
        difficulty: 'easy',
        selectedAlbums: new Map()
    });

    return [gameState, setGameState];
};
