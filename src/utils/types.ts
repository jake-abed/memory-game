interface Album {
	artist: string;
	album: string;
	imageUrl?: string;
}

interface GameState {
	currentScore: number;
	highScore: number;
	selectedAlbums: Array<string>;
	gameOver: boolean;
	message?: string;
}

export type { Album, GameState };
