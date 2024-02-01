import { useState } from 'react'

export default function useGameState() {
  const [gameState, setGameState] = useState({
    currentScore: 0,
    highScore: 0,
    gameOver: false,
    selectedAlbums: [],
  })

  return [gameState, setGameState]
};
