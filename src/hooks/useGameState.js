import { useState } from 'react'

export default function useGameState() {
  const [gameState, setGameState] = useState({
    currentScore: 0,
    highScore: 0,
    gameOver: false,
    selectedAlbums: new Map()
  })

  console.log(gameState)

  return [gameState, setGameState]
};
