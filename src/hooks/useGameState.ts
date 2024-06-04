import { useState } from 'react';
import { GameState } from '../utils/types';

export default function useGameState(): [
	GameState,
	React.Dispatch<React.SetStateAction<GameState>>
] {
	const [gameState, setGameState] = useState<GameState>({
		currentScore: 0,
		highScore: 0,
		gameOver: false,
		selectedAlbums: [],
	});

	return [gameState, setGameState];
}
